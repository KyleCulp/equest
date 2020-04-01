import { createServer } from 'http';
import { checkEnvironmentVariables, makeShutdownActions } from './utils';
import { app } from './app';

// Check if all needed environment variables
// Are accessible & gracefully stop if any are missing
checkEnvironmentVariables();

const port = process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : 3000;

// Getting access to the HTTP server directly means that we can do things
// with websockets if we need to (e.g. GraphQL subscriptions).
export const httpServer = createServer(app);
app.set('httpServer', httpServer);

/*
 * Shutdown processes
 * for clean ends or something
 */
const shutdownActions = makeShutdownActions();

httpServer.listen(port, () => {
	console.log('Server is live');
});
