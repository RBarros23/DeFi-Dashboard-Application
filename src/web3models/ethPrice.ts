import axios from 'axios';

const getEthPrice = async (): Promise<number> => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
      params: {
        ids: 'ethereum',
        vs_currencies: 'usd',
      },
    });
    
    const price: number = response.data.ethereum.usd;
    return price;
  } catch (error) {
    
    console.error('Error fetching ETH price:', error);
    throw error;
  }
};

export default getEthPrice;
