import { Creators } from './actions';

const addProduct = Creators.addProduct;
const removeProduct = Creators.removeProduct;
const requestProductsAction = Creators.requestProducts;
const receiveProductsAction = Creators.receiveProducts;

const fetchProducts = () => {
  return async dispatch => {
    dispatch(requestProductsAction());
    const responseData = require('./products.json');
    dispatch(receiveProductsAction(responseData));
  }
};

export default {
  addProduct,
  removeProduct,
  fetchProducts,
}