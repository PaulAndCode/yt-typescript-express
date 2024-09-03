import { Request, Response, Router } from 'express';
import Logger from '@libs/logger';

const router = Router();

/**
 * @swagger
 * /logger:
 *   get:
 *     description: Logs different levels of messages and returns a response
 *     responses:
 *       200:
 *         description: Returns a message confirming the logs
 */
router.get('/', (req: Request, res: Response) => {
  Logger.error('This is an error log');
  Logger.warn('This is a warn log');
  Logger.info('This is a info log');
  Logger.http('This is a http log');
  Logger.debug('This is a debug log');

  res.send('Check your logs!');
});

export default router;
