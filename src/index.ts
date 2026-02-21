import helmet from 'helmet';
import  Express  from 'express';

const app = Express();

app.use(helmet());
app.use(Express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});