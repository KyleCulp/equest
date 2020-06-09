import '@equest/config';
import S3, { PutObjectRequest } from 'aws-sdk/clients/s3';
import { Job, Worker } from 'bullmq';
import fs, { ReadStream } from 'fs';
import { execFile, exec } from 'child_process';
import { importEnv, isDev } from '@equest/config';
import { redisInstance } from '@equest/utils';
import { compressFile, uploadFile, deleteFile } from './fileFunctions';

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
});

const parseReplay = async (replayPath: string, replay_id: string, job: Job) => {
  const replayJson = `${PARSER_DATA_FOLDER}/${replay_id}.json`;
  const start = Date.now();
  exec(
    // `./rrrocket --network-parse --crc-check --pretty --json-lines ${replayPath} >> ${replayJson}`,
    `carball -i ${replayPath} --json ${replayJson} --proto ${replayJson}.pts --gzip ${replayJson}.gzip`,
    {},
    async (err, stdout, stderr) => {
      if (err) console.warn(err);
      if (stderr) {
        // execError extends base Error type, so this should be fine
        // I have no idea what the `token` param in moveToFailed is
        job.moveToFailed(err as Error, job.id!, true);
        job.failedReason = stderr;
      }

      const end = Date.now();
      console.log(end - start);
      const compressedFile = await compressFile(replayJson);
      uploadFile(compressedFile, `rocket_league/data/${replay_id}.json.gz`, S3_REPLAYS_BUCKET!, s3);

      // Delete the json & gzipped json files once done
      // deleteFile(replayJson);
      // deleteFile(`${replayJson}.gz`);
    }
  );
};

const rlReplaysWorker = async (job: Job) => {
  const replayPath = PARSER_REPLAY_FOLDER + '/' + job.data['replay_id'] + '.replay';
  let replay = fs.createWriteStream(replayPath);
  let params = {
    Bucket: S3_REPLAYS_BUCKET!,
    Key: job.data['replayPath'],
  };

  let s3Stream = s3.getObject(params).createReadStream();
  s3Stream
    .pipe(replay)
    .on('error', function (err) {
      // capture any errors that occur when writing data to the file
      console.error('File Stream:', err);
    })
    .on('close', async () => {
      console.log('Parsing replay: ', job.data['replay_id']);
      await parseReplay(replayPath, job.data['replay_id'], job);
    });
};

const worker = new Worker('rl_replays', rlReplaysWorker, {
  connection: redisInstance(parseInt(process.env['REDIS_RL_DB']!)),
});

worker.on('completed', (job: Job) => {
  console.log(`${job.id} has completed!`);
});

worker.on('failed', (job: Job, err) => {
  console.log(`${job.id} has failed with ${err.message}`);
});

process.on('unhandledRejection', (reason) => {
  console.log('Reason: ' + reason);
});
