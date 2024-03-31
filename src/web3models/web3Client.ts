import Web3 from 'web3';

const web3Instance = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/9b5a4239d6ee466c925a060a7d04d885'));

export default web3Instance;
