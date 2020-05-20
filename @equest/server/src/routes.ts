import { Queue } from 'bullmq';
import { Application } from 'express';

export const routes = async (app: Application) => {
  app.get('/', (req, res) => {
    const replayQueue = new Queue('rocket_league_replays');

    async function addJobs() {
      await myQueue.add('myJobName', { foo: 'bar' });
      await myQueue.add('myJobName', { qux: 'baz' });
    }

    addJobs();

    res.send('Hello world!');
  });
};
