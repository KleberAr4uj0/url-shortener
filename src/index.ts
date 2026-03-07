import helmet from 'helmet';
import express from 'express';
import Router from './routes/router';
import pool from './database/database';
import { errorMiddleware } from './middleware/error-middleware';

const app = express();

app.use(helmet());
app.use(express.json());
app.use(Router);
app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});