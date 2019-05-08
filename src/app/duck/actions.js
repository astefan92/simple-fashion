
import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    addProduct: ['product'],
    removeProduct: ['product'],
    requestProducts: ['products'],
    receiveProducts: ['products']
  });
  
  export { Types, Creators };
