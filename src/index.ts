import express, { Request, Response } from 'express';
import usersRouter from './routes/userRoutes';
import transaction from './routes/transactionRoutes';
import wallet from './routes/walletRoutes';

const app = express();

app.use(express.json());

//Route for users
app.use('/users', usersRouter);

//Route for transactions
app.use('/transactions', transaction);

//Route for wallets
app.use('/wallet', wallet);


app.get('/', (req: Request, res: Response) => {
  res.send('Hello, blockchain world!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
