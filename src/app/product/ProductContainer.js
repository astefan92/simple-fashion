
import { connect } from 'react-redux';
import ProductComponent from './ProductComponent';

import { homeOperations } from '../duck';
import './Product.css';

const mapStateToProps = (state) => {
    const { products, showSpinner } = state.home;
    console.log(state.home);
    return {
        products,
        showSpinner
    }
};


const mapDispatchToProps = (dispatch) => {
    const fetchProducts = () => {
        dispatch(homeOperations.fetchProducts())
    };

    const addProduct = (product) => {
        dispatch(homeOperations.addProduct(product))
    }

    return { fetchProducts, addProduct };
};

const ProductContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductComponent);

export default ProductContainer;