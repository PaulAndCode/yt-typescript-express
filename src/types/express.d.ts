import { UserPayload } from '@utils/jwt'; // Import your User type

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload; // Add user property to Request
    }
  }
}
