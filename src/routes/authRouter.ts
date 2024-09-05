import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { generateToken } from '@utils/jwt';
import { users, User } from '@models/User';
import Logger from '@libs/logger';

const router = Router();

// Check if username or email is already in use
const isUniqueUser = (username: string, email: string) => {
  return !users.some(
    (user) => user.username === username || user.email === email,
  );
};

// User registration route
router.post('/register', async (req: Request, res: Response) => {
  const { username, email, password, role } = req.body;

  // Validate input
  if (!username || !email || !password || !role) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Check if username or email is already taken
  if (!isUniqueUser(username, email)) {
    return res
      .status(400)
      .json({ message: 'Username or email already in use' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const newUser: User = {
    id: Date.now().toString(),
    username,
    email,
    password: hashedPassword,
    role,
    createdAt: new Date(),
  };

  // Save the new user to the array
  users.push(newUser);

  res.status(201).json({ message: 'User registered successfully' });

  Logger.info(
    `User successfully registered: ${JSON.stringify(newUser, null, 2)}`,
  );
});

// User login route
router.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);

  if (!user) {
    Logger.error(`400: Invalid credentials`);
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    Logger.error(`400: Invalid credentials`);
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = generateToken({
    userId: user.id,
    role: user.role,
  });
  res.json({ token });
});

export default router;
