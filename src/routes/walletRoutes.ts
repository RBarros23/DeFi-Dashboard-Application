import { Router } from 'express';
import * as UserModel from '../models/walletAddress';

const router = Router();

//Create a new transaction
router.post('/', async (req, res) => {
  try {
    const { userId, encrypted_wallet_address } = req.body;

    const newWallet = await UserModel.createWallet(userId, encrypted_wallet_address);
    res.status(201).json(newWallet);
  } catch (error) {
    res.status(500).json({ message: 'Error creating wallet', error });
  }
});

//Get all users
router.get('/getAllWallets', async (req, res) => {

  try{
    const allWallets = await UserModel.getAllWallets();
    res.status(200).json(allWallets);
  } catch (error){
    res.status(500).json({ message: 'Error getting all wallets', error});
  }
})

//Get user by id
router.get('/getWalletById/:id', async (req, res) => {

  try{
    const { id } = req.params;

    const WalletById = await UserModel.getWalletById(id);
    res.status(200).json(WalletById);
  } catch (error){
    res.status(500).json({ message: 'Error getting wallet by user', error});
  }
})

//Get user by userId
router.get('/getWalletByUserId/:userId', async (req, res) => {

  try{
    const { userId } = req.params;

    const wallet = await UserModel.getWalletByUserId(userId);
    res.status(200).json(wallet);
  } catch (error){
    res.status(500).json({ message: 'Error getting wallet by user ID', error});
  }
})

//Get user by userId
router.get('/getWalletByAddress/:address', async (req, res) => {

  try{
    const { address } = req.params;

    const wallet = await UserModel.getWalletByAddress(address);
    res.status(200).json(wallet);
  } catch (error){
    res.status(500).json({ message: 'Error getting wallet by user ID', error});
  }
})

export default router;
