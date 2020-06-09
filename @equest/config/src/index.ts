export * from './main';
// Done for intellisense, won't matter when compiled
import S3 from 'aws-sdk/clients/s3';
import { config } from 'dotenv';
export const isDev: boolean = process.env.NODE_ENV === 'development';

/**
 * Pass in an env file's path. Use process.cwd()
 *
 * @param envFile - Hard path to the env file.
 */
export function importEnv(envFile: string) {
  console.log('Loaded env file: ', envFile);
  config({ path: envFile });
}

if (isDev) {
  config({ path: '../../.env' });
  config({ path: '../../secrets.env' });
} else {
  console.log('Loading prod');
  // config({ path: process.env[''] });
}

const devSettings = {};

const prodSettings = {};

export const settings = isDev ? devSettings : prodSettings;

const { S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, S3_ENDPOINT, S3_REGION } = process.env;

export const S3Config: S3.Types.ClientConfiguration = {
  accessKeyId: S3_ACCESS_KEY_ID,
  secretAccessKey: S3_SECRET_ACCESS_KEY,
  endpoint: S3_ENDPOINT,
  region: S3_REGION,
};
