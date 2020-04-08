import { checkEnvironmentVariables } from '@equest/utils';

enum EnvironmentalVariables {
  NODE_ENV,
  PG_MASTER_HOST,
  PG_MASTER_PORT,
  PG_MASTER_USERNAME,
  PG_MASTER_PASSWORD,
  PG_MASTER_NAME,
  PG_MASTER_ADMIN_USERNAME,
  PG_MASTER_ADMIN_PASSWORD,
  REDIS_HOST,
  REDIS_PORT,
  REDIS_FAMILY,
  REDIS_PASSWORD,
  REDIS_SESSION_DB,
  REDIS_QUEUE_DB,
  SERVER_URL,
  SERVER_PORT,
  JWT_SECRET,
}

export const handleLifecycle = () => {};

checkEnvironmentVariables(EnvironmentalVariables);
