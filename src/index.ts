import express, { Request, Response } from 'express';
import router from './routes/userRoutes';

const app = express();

app.use(express.json());

app.use('/', router);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, blockchain world!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
