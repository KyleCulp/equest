import '@equest/config';

import IORedis from 'ioredis';

const { REDIS_HOST, REDIS_PORT, REDIS_FAMILY, REDIS_PASSWORD } = process.env;

/**
 * Return a redis client instance, connnecting to the provided database
 *
 * @param database - Specific redis database for the client instance to connect to
 * @returns An IORedis Client
 */
export const redisInstance = async (database: number) => {
  return new IORedis({
    port: parseInt(REDIS_PORT!),
    host: REDIS_HOST,
    family: parseInt(REDIS_FAMILY!),
    // password: REDIS_PASSWORD,
    db: database,
  });
};
