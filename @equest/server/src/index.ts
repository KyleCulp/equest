import '@equest/config';

import { createServer } from 'http';

import { app } from './app';
import { handleLifecycle } from './lifecycle';

// Run/include application lifecycle related functions
handleLifecycle();

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

// Getting access to the HTTP server directly means that we can do things
// with websockets if we need to (e.g. GraphQL subscriptions).
export const httpServer = createServer(app);
app.set('httpServer', httpServer);

httpServer.listen(port, () => {
  console.log('Server is live');
});
