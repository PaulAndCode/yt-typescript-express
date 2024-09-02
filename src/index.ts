import express from 'express';
import dotenv from 'dotenv';
import morganMiddleware from './middlewares/morganMiddleware';
// Import routes
import indexRouter from './routes/indexRouter';
import loggerRouter from './routes/loggerRouter';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(morganMiddleware);
// Use routes
app.use('/', indexRouter);
app.use('/logger', loggerRouter);

// Start the server and export the server instance
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Export both the app and the server for testing later
export { app, server };
