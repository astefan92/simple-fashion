
import { connect } from 'react-redux';
import BasketComponent from './BasketComponent';

import { homeOperations } from '../duck';
import './Basket.css';

const mapStateToProps = (state) => {
    const { productsInBasket, deliveryCharges } = state.home;
    console.log(state.home);
    return {
        productsInBasket,
        deliveryCharges
    }
};


const mapDispatchToProps = (dispatch) => {
    const addProduct = (product) => {
        dispatch(homeOperations.addProduct(product))
    }

    const removeProduct = (product) => {
        dispatch(homeOperations.removeProduct(product))
    }

    return { addProduct, removeProduct };
};

const BasketContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BasketComponent);

export default BasketContainer;