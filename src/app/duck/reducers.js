import { Types as types } from './actions';

const INITIAL_STATE = {
  deliveryCharges: 4.95,
  showSpinner: false,
  products: [],
  productsInBasket: [],
}
const homeReducer = (state=INITIAL_STATE, action) => {

  switch(action.type) {

    case types.ADD_PRODUCT: {
      const { product } = action;
      const { productsInBasket } = state;
      const newProductsInBasket = [...productsInBasket];
      const productIndex = productsInBasket.findIndex((p) => p.product.code === product.code); 

      if (productIndex === -1) {
        newProductsInBasket.push({
          product,
          count: 1,
        });
      } else {
        newProductsInBasket[productIndex].count++;
      }

      return {
        ...state,
        productsInBasket: newProductsInBasket,
      }
    }

    case types.REMOVE_PRODUCT: {
      const { product } = action;
      const { productsInBasket } = state;
      const newProductsInBasket = [...productsInBasket];
      const productIndex = productsInBasket.findIndex((p) => p.product.code === product.code); 

      if (newProductsInBasket[productIndex].count === 1) {
        newProductsInBasket.splice(productIndex, 1);
      } else {
        newProductsInBasket[productIndex].count--;
      }

      return {
        ...state,
        productsInBasket: newProductsInBasket
      }
    }
    
    case types.REQUEST_PRODUCTS: {
      return {
        ...state,
        showSpinner: true
      }
    }
    
    case types.RECEIVE_PRODUCTS: {
      const { products } = action;
      return {
        ...state,
        products,
        showSpinner: false
        
      }
    }
    
    default: return state;
  }
}

export default homeReducer;