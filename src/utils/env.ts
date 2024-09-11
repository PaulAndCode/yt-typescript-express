import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Validate environment variables and provide fallback values if necessary
const ENV = {
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || '',
  NODE_ENV: process.env.NODE_ENV || 'development',
  // Add more environment variables as needed
};

// Check if critical environment variables are missing
if (!ENV.JWT_SECRET) {
  throw new Error('Missing JWT_SECRET in environment variables.');
}

export default ENV;
