import * as health from '@cloudnative/health-connect';
import cors from 'cors';
import express, { Express } from 'express';

import {
  installDatabasePools,
  installPassport,
  installPostgraphile,
  installSession,
} from './middleware';

export const app: Express = express();

/*
 * When we're using websockets, we may want them to have access to
 * sessions/etc for authentication.
 */
const websocketMiddlewares = [];
app.set('websocketMiddlewares', websocketMiddlewares);

/*
 * Middleware installation requires a specific order
 */
const installMiddleware = async () => {
  await installDatabasePools(app);
  await installSession(app);
  await installPassport(app);
  await installPostgraphile(app);
};

app.use(
  cors({
    origin: 'http://127.0.0.1:4000',
    credentials: true,
  })
);

installMiddleware();

/*
 * Cloud Health Liveliness & Readiness Endpoints
 * Handled by Cloud Health Connect
 */
const healthcheck = new health.HealthChecker();
app.use('/live', health.LivenessEndpoint(healthcheck));
app.use('/ready', health.ReadinessEndpoint(healthcheck));
app.use('/health', health.HealthEndpoint(healthcheck));
