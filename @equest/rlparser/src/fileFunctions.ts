import S3, { PutObjectRequest } from 'aws-sdk/clients/s3';
import fs, { ReadStream } from 'fs';
import zlib from 'zlib';

/*
 * Compress a file with zlib's gzip
 *
 * @param filePath Exact path of file
 */
export const compressFile = async (filePath: string): Promise<ReadStream> => {
  const readStream = fs.createReadStream(filePath);
  const writeStream = fs.createWriteStream(`${filePath}.gz`);
  readStream.pipe(zlib.createGzip()).pipe(writeStream);

  return new Promise((resolve, reject) => {
    readStream.on('error', (err) => reject(err));
    writeStream.on('finish', () => resolve(fs.createReadStream(`${filePath}.gz`)));
  });
};

/*
 * Upload file to S3 storage
 *
 * @param file Singular file to upload
 * @param key Exact path in S3 for file
 * @param bucket S3 bucket to put file in
 * @param s3 s3 client instance to use
 */
export const uploadFile = (file: ReadStream, key: string, bucket: string, s3: S3) => {
  let params: PutObjectRequest = {
    Bucket: bucket,
    Key: key,
    Body: file,
    ContentType: 'application/json',
    ContentEncoding: 'gzip',
  };

  s3.putObject(params, async (err, data) => {
    if (err) console.log('Error', err);
    if (data) {
      console.log('Upload Success', data);
    }
  });
};

/*
 * Delete a file
 *
 * @param filePath Exact path of file to delete
 */
export const deleteFile = (filePath: string) => {
  if (fs.existsSync(filePath)) {
    fs.unlink(filePath, (err) => {
      if (err) console.log(err);
      console.log('Deleted file: ', filePath);
    });
  }
};
