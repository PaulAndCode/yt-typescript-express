import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

import morganMiddleware from './middlewares/morganMiddleware';
import Logger from './logger';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(morganMiddleware);

app.get('/logger', (_, res) => {
  Logger.error('This is an error log');
  Logger.warn('This is a warn log');
  Logger.info('This is a info log');
  Logger.http('This is a http log');
  Logger.debug('This is a debug log');

  res.send('Hello world');
});

// Define a simple route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

// Start the server and export the server instance
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Export both the app and the server for testing later
export { app, server };
