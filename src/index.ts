import express, { Request, Response } from 'express';
import usersRouter from './routes/userRoutes';
import transaction from './routes/transactionRoutes';
import wallet from './routes/walletRoutes';
import dotenv from 'dotenv';
import { authenticateToken } from './middleware/authenticateToken';
import authenticate from './routes/authenticate';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/login', authenticate);

//Route for users
// app.use('/users', usersRouter);
app.use('/users', authenticateToken, usersRouter);

//Route for transactions
app.use('/transactions', authenticateToken, transaction);

//Route for wallets
app.use('/wallet', authenticateToken, wallet);


app.get('/', (req: Request, res: Response) => {
  res.send('Hello, blockchain world!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
