import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js';
import { verifyToken } from './middlewares/auth.middleware.js';
import { connectDB } from './configs/db.connect.js';

const app = express();
dotenv.config();

const morganMiddleware = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  {
    stream: {
      write: (message) => console.log(message.trim()),
    },
  }
);

app.use(morganMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', verifyToken, authRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

const port = process.env.PORT || 3000;

const server = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      console.log(`Visit http://localhost:${port} to access the server.`);
    });
  } catch (error) {
    console.log(error);
  }
};
server();
