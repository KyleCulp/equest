import '@equest/config';
import S3, { PutObjectRequest } from 'aws-sdk/clients/s3';
import { Job, Worker } from 'bullmq';
import fs, { readFileSync } from 'fs';
import { execFile, exec } from 'child_process';
import { importEnv, isDev } from '@equest/config';
import { redisInstance } from '@equest/utils';
import { dirname, join } from 'path';
import { validateReplayJson } from './validator';
import { downloadFileFromS3 } from './fileFunctions';
import { parseRocketLeagueReplay } from './parse';
import { uploadDataToPG, isReplayDuplicate } from './database';
import { ParsedReplay } from './types';
import { rlReplaysQueue } from '@equest/api/src/lib/queues';
import util from 'util';
import { extractReplayMeta, extractPlayerStats } from './normalize';

// Import package-specific env files
if (isDev) {
  importEnv(process.cwd() + '/.env');
  importEnv(process.cwd() + '/secrets.env');
}

const {
  S3_ACCESS_KEY_ID,
  S3_SECRET_ACCESS_KEY,
  S3_ENDPOINT,
  S3_REGION,
  S3_REPLAYS_BUCKET,
  PARSER_REPLAY_FOLDER,
  PARSER_DATA_FOLDER,
} = process.env;

const s3 = new S3({
  accessKeyId: S3_ACCESS_KEY_ID,
  secretAccessKey: S3_SECRET_ACCESS_KEY,
  endpoint: S3_ENDPOINT,
  region: S3_REGION,
}); // When this function finishes calling, bullmq marks the job as complete // If any of these steps throw an error, the job will be marked as failed. // Logging the error with bullmq will allow us to see why it failed in a dashboard // And retry the job if we think it was a one off error, or allow us indepth error // logging if it's something we've never encountered before

// Main function basically, is called whenever a new job is put into the queue.
// When it finishes without throwing an error, the job is marked complete.
/* Step of this function:
 * 1.) Download replay file from S3, using the bullmq Job object's data
 * 2.) Parse the replay by sending it two directories to fetch/store data
 * 3.) Validate said outputs from the parser, typechecking all fields are there
 * 4.) Check if replay exist in database already
 * 5.) Split apart and normalize the data
 * 6.) Upload the data + logs into postgresql/s3
 * 6.) Compress the outputs of the files using zlib
 * 7.) Upload compressed files into S3
 * 8.) Delete the files on this machine, saving up space.
 */
const rlReplaysWorker = async (job: Job) => {
  // job.data['replay_name'] is the file name
  // "0D61CECF4C3A786641C1FA98161A59F8.replay"
  // I'd love for it to be the actual replay_id
  const replayPath = PARSER_REPLAY_FOLDER + '/' + job.data['replay_name'];
  const params = {
    Bucket: S3_REPLAYS_BUCKET!,
    Key: job.data['replayPath'],
  };
  await downloadFileFromS3(replayPath, params, s3);

  const replayJsonOutput = join(PARSER_DATA_FOLDER!, `${job.data['replay_name']}.json`);

  // Step #2
  console.log('Parsing replay: ', job.data['replay_name']);
  const parserResults = await parseRocketLeagueReplay(replayPath, replayJsonOutput);
  console.log('Replay ', job.data['replay_name'], 'successfully parsed in ', parserResults.time / 1000, ' seconds.');

  const parsedFile: any = require(replayJsonOutput);
  const replay_id = parsedFile['match_guid'];

  // // Step #3
  const validationResults = await validateReplayJson(parsedFile);
  if (validationResults.valid) {
    console.log('Replay valid: ', job.data['replay_name'], ' ', replay_id);
  } else {
    console.log('Replay failed: ', job.data['replay_name'], ' ', replay_id, validationResults);
  }

  // // Step #4
  // const isDuplicate = await isReplayDuplicate(replay_id);
  // if (isDuplicate) {
  //   throw Error('Duplicate replay');
  // }

  // // Step #5
  // Deep duplicate the object, cause the object's memory location is currently the json file
  const replayData = Object.assign({}, parsedFile);
  const replay_meta = extractReplayMeta(replayData);
  const player_stats = extractPlayerStats(replayData);
  console.log('Stats: ', player_stats.length);

  // const results = await uploadDataToPG(parsedFile, {
  //   parserResults,
  //   validationResults,
  // });
  // writeFileSync('./temp.json', util.inspect(results), 'utf-8');
};

const worker = new Worker('rl_replays', rlReplaysWorker, {
  connection: redisInstance(parseInt(process.env['REDIS_RL_DB']!)),
});

worker.on('completed', (job: Job) => {
  console.log(`${job.id} has completed!`);
});

worker.on('failed', (job: Job, err) => {
  console.log(`${job.id} has failed with ${err}`);
});

process.on('unhandledRejection', (reason) => {
  console.log('Reason: ' + reason);
});
