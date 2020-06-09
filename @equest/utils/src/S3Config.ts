import S3 from 'aws-sdk/clients/s3';

const { S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, S3_ENDPOINT, S3_REGION, S3_REPLAYS_BUCKET } = process.env;

// if (!S3_ACCESS_KEY_ID || !S3_SECRET_ACCESS_KEY || S3_ENDPOINT || !S3_REGION || !S3_REPLAYS_BUCKET) {
//   throw new Error('Multer S3 Env missing');
// }

export const S3Config: S3.Types.ClientConfiguration = {
  accessKeyId: S3_ACCESS_KEY_ID,
  secretAccessKey: S3_SECRET_ACCESS_KEY,
  endpoint: S3_ENDPOINT,
  region: S3_REGION,
};
