import { redisInstance } from '@equest/utils';
import { QueueEvents } from 'bullmq';

const queueEvents = new QueueEvents('Equest Worker', {
  connection: redisInstance(parseInt(process.env['REDIS_QUEUE_DB']!)),
});

queueEvents.on('waiting', ({ jobId }) => {
  console.log(`A job with ID ${jobId} is waiting`);
});

queueEvents.on('active', ({ jobId, prev }) => {
  console.log(`Job ${jobId} is now active; previous status was ${prev}`);
});

queueEvents.on('completed', ({ jobId, returnvalue }) => {
  console.log(`${jobId} has completed and returned ${returnvalue}`);
});

queueEvents.on('failed', ({ jobId, failedReason }) => {
  console.log(`${jobId} has failed with reason ${failedReason}`);
});
