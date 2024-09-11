import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '@utils/jwt';
import Logger from '@libs/logger';

export const authenticateJWT = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization?.split(' ')[1]; // Bearer <token>

  if (!token) {
    return res
      .status(401)
      .json({ message: 'Access denied. No token provided.' });
  }

  try {
    req.user = verifyToken(token); // Attach user info to request
    next();
  } catch (error) {
    Logger.error(error);
    res.status(403).json({ message: 'Invalid or expired token' });
  }
};
