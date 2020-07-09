import { isDev } from '@equest/utils';
import fs from 'fs';
import { Pool, PoolConfig, PoolClient, Client, QueryResult } from 'pg';

const {
  RL_PARSER_USERNAME,
  RL_PARSER_PASSWORD,
  PG_MASTER_HOST,
  PG_MASTER_PORT,
  PG_MASTER_NAME,
  PG_MASTER_CA_LOCATION,
  // PG_MASTER_CERT_LOCATION
} = process.env;

const pgRLPoolConfig: PoolConfig = {
  user: RL_PARSER_USERNAME,
  password: RL_PARSER_PASSWORD,
  host: PG_MASTER_HOST,
  port: parseInt(PG_MASTER_PORT!),
  database: PG_MASTER_NAME,
  connectionTimeoutMillis: 0, // default 0, no timeout
  idleTimeoutMillis: 10000, // default 10,000
  max: 10, // defaultt 10
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync(PG_MASTER_CA_LOCATION!),
    // key: fs.readFileSync(PG_MASTER_KEY_LOCATION!),
    // cert: fs.readFileSync(PG_MASTER_CERT_LOCATION!),
  },
};

export const rlPgPool = new Pool(pgRLPoolConfig);
// https://github.com/ZiaDev/Pg-essential-dev/blob/master/index.js
interface executeTransactionCallback {
  (client: PoolClient): void;
}
export const executeTransaction = async (callback: executeTransactionCallback) => {
  const client = await rlPgPool.connect();
  await client.query('BEGIN');
  try {
    callback(client);
    await client.query('COMMIT');
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
};

export const executeQuery = async (
  sql: string,
  params: Array<any>,
  callback: (err: Error, result: QueryResult<any>) => void
) => {
  if (params.length > 0) {
    return rlPgPool.query(sql, params, callback);
  } else {
    return rlPgPool.query(sql, callback);
  }
};
