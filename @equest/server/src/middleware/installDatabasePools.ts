import { Application } from 'express';
import { Pool } from 'pg';

import {
  pgMasterAdminPoolConfig,
  pgMasterPoolConfig,
  redisInstance,
} from '../database';

const { REDIS_SESSION_DB, REDIS_QUEUE_DB } = process.env;

export const installDatabasePools = async (app: Application) => {
  // User Account Connection
  const pgMasterPool = new Pool(pgMasterPoolConfig);
  app.set('pgMasterPool', pgMasterPool);

  // Admin Account Connection
  const pgMasterAdminPool = new Pool(pgMasterAdminPoolConfig);
  app.set('pgMasterAdminPool', pgMasterAdminPool);

  // Redis client instance for sessions
  const redisSession = await redisInstance(parseInt(REDIS_SESSION_DB!));
  app.set('redisSession', redisSession);

  // Redis client instance for queue/pubsub
  const redisQueue = await redisInstance(parseInt(REDIS_QUEUE_DB!));
  app.set('redisQueue', redisQueue);
};
