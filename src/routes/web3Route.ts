import express from 'express';
import { getEthBalance, getBlockNumber, getAccounts } from '../web3models/blockchainService';
import web3 from '../web3models/web3Client'
import getEthPrice from '../web3models/ethPrice'

const router = express.Router();

router.get('/balance/:address', async (req, res) => {
    const address = req.params.address;
    try {
        const balance = await getEthBalance(address);
        res.send(200).json({ balance: web3.utils.fromWei(balance, 'ether') });
    } catch (error) {
        res.status(500).send('Failed to fetch balance');
    }
});

router.get('/lastBlock', async (req, res) => {
    try {
        const balance = await getBlockNumber();
        res.send(200).json({ lastBlock: web3.utils.fromWei(balance, 'ether') });
    } catch (error) {
        res.status(500).send('Failed to fetch last block');
    }
});

router.get('/getAllAccounts', async (req, res) => {
    try {
        const accounts = await getAccounts();
        res.send(200).json({ accounts });
    } catch (error) {
        res.status(500).send('Failed to fetch all accounts');
    }
});

router.get('/price', async (req, res) => {
    try {
      const price = await getEthPrice();
      res.json({ price: price });
    } catch (error) {
      res.status(500).send({ error: 'Failed to fetch ETH price' });
    }
  });

export default router;
