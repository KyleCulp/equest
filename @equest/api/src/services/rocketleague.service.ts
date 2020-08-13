import { Injectable } from '@nestjs/common';
import { S3Config } from '@equest/config';
import S3 from 'aws-sdk/clients/s3';
import multer from 'multer';
import fs from 'fs';
import '@equest/config';
import { rlReplaysQueue } from '../lib/queues';
import { exec, execFileSync, execFile, ChildProcess, PromiseWithChild } from 'child_process';
import { stdout, stderr } from 'process';

interface ReplayStats {
  replay_id: string;
}

@Injectable()
export class RocketLeagueService {
  getHello(): string {
    return 'Hello World!';
  }

  // Parses a replay, returning stdout
  parseReplay(file: Express.Multer.File): Promise<{ time: number; stdout: string; stderr: string }> {
    const start = Date.now();
    return new Promise((resolve, reject) => {
      execFile('./rrrocket', ['--crc-check', '--json-lines', `${file.path}`], (err, stdout, stderr) => {
        if (err) reject(err);
        const end = Date.now();
        resolve({
          time: end - start,
          stdout,
          stderr,
        });
      });
    });
  }

  async uploadFile(file: Express.Multer.File): Promise<Object> {
    const { S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, S3_ENDPOINT, S3_REGION, S3_REPLAYS_BUCKET } = process.env;

    // const parsedReplayOutput = await this.parseReplay(file);
    // Extract the properties object from the json stdout from rrrocket
    // const parsedReplay = JSON.parse(parsedReplayOutput.stdout)['properties'];
    // const replay_id = JSON.parse(parsedReplayOutput.stdout)['properties']['Id'];

    const s3 = new S3({
      accessKeyId: S3_ACCESS_KEY_ID,
      secretAccessKey: S3_SECRET_ACCESS_KEY,
      endpoint: S3_ENDPOINT,
      region: S3_REGION,
    });

    const fileStream = fs.createReadStream(file.path);
    fileStream.on('error', function (err) {
      console.log('File Error', err);
    });

    const params = {
      Bucket: S3_REPLAYS_BUCKET!,
      Key: 'replays/rocketleague/' + file.originalname,
      Body: fileStream,
    };

    // s3.putObject(params, async (err, data) => {
    //   if (err) console.log('Error', err);
    //   if (data) {
    await rlReplaysQueue.add('replay', {
      replay_name: file.originalname,
      replayPath: 'replays/rocketleague/' + file.originalname,
    });
    console.log('Upload Success', file.originalname); // was data
    //   }
    // });

    return {
      status: 200,
    };
  }

  async uploadFiles(files: Express.Multer.File[]) {
    for (let file of files) {
      this.uploadFile(file);
    }
  }
}
