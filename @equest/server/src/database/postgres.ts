import { isDev } from '@equest/utils';
import fs from 'fs';
import { Pool, PoolConfig } from 'pg';

const {
  PG_MASTER_ADMIN_USERNAME,
  PG_MASTER_ADMIN_PASSWORD,
  PG_MASTER_USERNAME,
  PG_MASTER_PASSWORD,
  PG_MASTER_HOST,
  PG_MASTER_PORT,
  PG_MASTER_NAME,
  PG_MASTER_CA_LOCATION,
  // PG_MASTER_KEY_LOCATION,
  // PG_MASTER_CERT_LOCATION
} = process.env;

export const pgMasterAdminPoolConfig: PoolConfig = {
  user: PG_MASTER_ADMIN_USERNAME,
  password: PG_MASTER_ADMIN_PASSWORD,
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

export const pgMasterPoolConfig: PoolConfig = {
  user: PG_MASTER_USERNAME,
  password: PG_MASTER_PASSWORD,
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
