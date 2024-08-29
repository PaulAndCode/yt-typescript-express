import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

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
