import { Router, Request, Response } from 'express';
import { authenticateJWT } from '@middlewares/authMiddleware';
import { authorizeRole } from '@middlewares/roleMiddleware';

const router = Router();

/**
 * @swagger
 * /protected/profile:
 *   get:
 *     summary: Get the logged-in user's profile
 *     tags: [Protected]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved user profile
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     username:
 *                       type: string
 *                     email:
 *                       type: string
 *                     role:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *       401:
 *         description: No token provided or token invalid
 */
router.get('/profile', authenticateJWT, (req: Request, res: Response) => {
  res.json({ message: 'This is a protected user profile route' });
});

/**
 * @swagger
 * /protected/admin:
 *   get:
 *     summary: Access admin-only route
 *     tags: [Protected]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Welcome admin
 *       403:
 *         description: Access denied (if not an admin)
 */
router.get(
  '/admin',
  authenticateJWT,
  authorizeRole('admin'),
  (req: Request, res: Response) => {
    res.json({ message: 'Welcome, admin. This is a protected admin route' });
  },
);

export default router;
