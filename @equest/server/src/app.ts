/* eslint-disable react-hooks/rules-of-hooks */
import * as health from '@cloudnative/health-connect';
import { settings } from '@equest/config';
import cors from 'cors';
import express, { Express } from 'express';
import helmet from 'helmet';
import { Middleware } from 'postgraphile';

import {
  installDatabasePools,
  installPassport,
  installPostgraphile,
  installSession,
} from './middleware';
import { routes } from './routes';

export const app: Express = express();

/*
 * When we're using websockets, we may want them to have access to
 * sessions/etc for authentication. Can't give it a type because
 * types are lost in app.use(), app.set()
 */
const websocketMiddlewares: any[] = [];
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
    origin: settings.frontend.origin,
    credentials: true,
  })
);

app.use(helmet());

installMiddleware();
const useRoutes = async () => await routes(app);
useRoutes();
/*
 * Cloud Health Liveliness & Readiness Endpoints
 * Handled by Cloud Health Connect
 */
const healthcheck = new health.HealthChecker();
app.use('/live', health.LivenessEndpoint(healthcheck));
app.use('/ready', health.ReadinessEndpoint(healthcheck));
app.use('/health', health.HealthEndpoint(healthcheck));
