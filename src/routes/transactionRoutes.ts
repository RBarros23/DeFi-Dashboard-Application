import { Router } from 'express';
import * as UserModel from '../models/transactionLog';

const router = Router();

//Create a new transaction
router.post('/', async (req, res) => {
  try {
    const { userId, transactionType, amount, currency } = req.body;

    const newTransaction = await UserModel.createTransactionLog(userId, transactionType, amount, currency);
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
});

//Get all users
router.get('/getAllTransactions', async (req, res) => {

  try{
    const getAllTransactions = await UserModel.getAllTransactions();
    res.status(201).json(getAllTransactions);
  } catch (error){
    res.status(500).json({ message: 'Error getting all users', error});
  }
})

//Get user by email
router.get('/getTransactionsByUserId/:userId', async (req, res) => {

  try{
    const { userId } = req.params;
    const userIdNumber = parseInt(userId, 10);

    if (isNaN(userIdNumber)) {
        return res.status(400).json({ message: 'userId is not a valid number'});
    }

    const transaction = await UserModel.getTransactionsById(userIdNumber);
    res.status(201).json(transaction);
  } catch (error){
    res.status(500).json({ message: 'Error getting all users', error});
  }
})

//Get user by id
router.get('/getTransactionsById/:id', async (req, res) => {

  try{
    const { id } = req.params;
    const userIdNumber = parseInt(id, 10);

    if (isNaN(userIdNumber)) {
        return res.status(400).json({ message: 'userId is not a valid number'});
    }

    const user = await UserModel.getTransactionsById(userIdNumber);
    res.status(201).json(user);
  } catch (error){
    res.status(500).json({ message: 'Error getting all users', error});
  }
})


export default router;
