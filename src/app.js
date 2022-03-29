import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import volleyball from 'volleyball';

import apiRouter from './routes/api.js';
import { log } from './utils/logger.js';

const app = express();

dotenv.config();

app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);
app.use(helmet());
app.use(volleyball);

app.use('/api/v1', apiRouter);

app.use((error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  log(error);
  res.status(statusCode).json({
    message: error.message,
  });
});

export default app;
