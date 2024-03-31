import web3 from '../web3models/web3Client';

export const getEthBalance = async (address: string): Promise<bigint> => {
  const balance = await web3.eth.getBalance(address);
  return balance;
};

export const getBlockNumber = async (): Promise<bigint> => {
  const lastBlock = await web3.eth.getBlockNumber();
  return lastBlock;
}

export const getAccounts = async (): Promise<string[]> => {
  const accounts = await web3.eth.getAccounts();
  return accounts;
}