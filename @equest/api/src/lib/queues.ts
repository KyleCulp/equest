import { Queue } from 'bullmq';
import { redisInstance } from '@equest/utils';

export const rlReplaysQueue = new Queue('rl_replays', {
  connection: redisInstance(parseInt(process.env['REDIS_RL_DB']!)),
});
