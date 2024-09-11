export interface User {
  id: string;
  username: string;
  email: string;
  password: string; // Hashed password
  role: 'user' | 'admin';
  createdAt: Date;
}

// Example users
export const users: User[] = [];
