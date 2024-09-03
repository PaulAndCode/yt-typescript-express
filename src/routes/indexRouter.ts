import { Request, Response, Router } from 'express';

const router = Router();

/**
 * @swagger
 * /:
 *   get:
 *     description: Welcome to the TypeScript Express app
 *     responses:
 *       200:
 *         description: Returns a welcome message
 */
router.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

export default router;
