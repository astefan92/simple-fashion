import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { FormattedNumber }  from 'react-intl';
import Typography from '@material-ui/core/Typography';

import animate from '../utils/animation';
import './Product.css';

class ProductComponent extends React.Component {
    constructor(props) {
        super(props);

        this.imageRefs = {};
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    addProduct = (product, index) => {
        this.props.addProduct(product);
        animate(this.imageRefs[index]);
    }

    setImageRef = (index, element) => {
        this.imageRefs[index] = element;
    };

    render() {
        if (this.props.showSpinner) {
            return <p>Loading...</p>
        }
    
        return (
            <div className="products">
                {this.props.products.map((product, index) => (
                    <Card className="card" key={product.code}>
                        <CardActionArea className="action-area">
                            <img src={product.image} alt="product" className="media" ref={(element) => this.setImageRef(index, element)}></img>
                            <CardContent>
                                <Typography gutterBottom variant="inherit" component="h2">
                                    {product.name} - <FormattedNumber value={product.price} style="currency" currency="GBP" currencyDisplay="symbol" />
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <IconButton color="inherit" onClick={() => this.addProduct(product, index)}>
                                <Icon>add_shopping_cart</Icon>
                            </IconButton>
                        </CardActions>
                    </Card>
                ))}
            </div>
        )
    }
}

export default ProductComponent;
