import { Pool, PoolConfig } from 'pg';

const {
  PG_MASTER_ADMIN_USERNAME,
  PG_MASTER_ADMIN_PASSWORD,
  PG_MASTER_USERNAME,
  PG_MASTER_PASSWORD,
  PG_MASTER_HOST,
  PG_MASTER_PORT,
  PG_MASTER_NAME,
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
  // ssl: {
  // 	rejectUnauthorized: false,
  // 	ca: fs.readFileSync('/path/to/server-certificates/root.crt').toString(),
  // 	key: fs.readFileSync('/path/to/client-key/postgresql.key').toString(),
  // 	cert: fs.readFileSync('/path/to/client-certificates/postgresql.crt').toString(),
  // },
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
  // ssl: {
  // 	rejectUnauthorized: false,
  // 	ca: fs.readFileSync('/path/to/server-certificates/root.crt').toString(),
  // 	key: fs.readFileSync('/path/to/client-key/postgresql.key').toString(),
  // 	cert: fs.readFileSync('/path/to/client-certificates/postgresql.crt').toString(),
  // },
};
