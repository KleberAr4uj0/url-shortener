import helmet from 'helmet';
import  Express, { Router }  from 'express';
import { errorMiddleware } from './middleware/error-middleware';

const app = Express();

app.use(helmet());
app.use(Express.json());
app.use(Router);
app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});