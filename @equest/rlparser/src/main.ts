import { redisInstance } from '@equest/utils';
import { Job, Worker } from 'bullmq';

const worker = new Worker(
  'rocket_league_replays',

  async (job) => {
    console.log(job);
  },
  { connection: redisInstance(parseInt(process.env['REDIS_RL_DB']!)) }
);

worker.on('completed', (job: Job) => {
  console.log(`${job.id} has completed!`);
});

worker.on('failed', (job: Job, err) => {
  console.log(`${job.id} has failed with ${err.message}`);
});
