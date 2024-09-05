import { Router, Request, Response } from 'express';
import { authenticateJWT } from '@middlewares/authMiddleware';
import { authorizeRole } from '@middlewares/roleMiddleware';

const router = Router();

// General protected route
router.get('/profile', authenticateJWT, (req: Request, res: Response) => {
  res.json({ message: 'This is a protected user profile route' });
});

// Admin-only route
router.get(
  '/admin',
  authenticateJWT,
  authorizeRole('admin'),
  (req: Request, res: Response) => {
    res.json({ message: 'Welcome, admin. This is a protected admin route' });
  },
);

export default router;
