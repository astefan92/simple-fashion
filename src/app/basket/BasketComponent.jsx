import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Badge from '@material-ui/core/Badge';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Divider from '@material-ui/core/Divider';
import { FormattedNumber }  from 'react-intl';

import './Basket.css';

class ProductComponent extends React.Component {
    state = {
        drawerOpen: false,
    };

    toggleDrawer = (open) => () => {
        this.setState({
            drawerOpen: open,
        });
    };

    getTotalAmountInBasket = () => {
        let amount = 0;

        for (const item of this.props.productsInBasket) {
            amount += item.count * item.product.price;
        }

        return amount + this.props.deliveryCharges;
    }

    getTotalCountInBasket = () => {
        let count = 0;

        for (const item of this.props.productsInBasket) {
            count += item.count;
        }
        
        return count;
    }

    render() {
        const { productsInBasket, deliveryCharges } = this.props;

        if (this.props.showSpinner) {
            return <p>Loading...</p>
        }
    
        return (
            <div className="basket">
                <IconButton color="inherit" onClick={this.toggleDrawer(true)}>
                    <Badge badgeContent={this.getTotalCountInBasket()} color="secondary">
                        <Icon>shopping_basket</Icon>
                    </Badge>
                </IconButton>
                <SwipeableDrawer
                    anchor="right"
                    open={this.state.drawerOpen}
                    onClose={this.toggleDrawer(false)}
                    onOpen={this.toggleDrawer(true)}
                    >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer(false)}
                        onKeyDown={this.toggleDrawer(false)}
                    >
                    </div>
                    <List>
                        {productsInBasket.map((item, index) => (
                            <ListItem button key={item.product.code}>
                                <ListItemIcon>
                                    <img src={item.product.image} alt="product" className="product-image"></img>
                                </ListItemIcon>
                                <ListItemText>
                                    <span>{item.product.name} - <FormattedNumber value={item.product.price} style="currency" currency="GBP" currencyDisplay="symbol" /></span>
                                    <div className="grow" />
                                    <IconButton color="inherit" onClick={() => this.props.removeProduct(item.product)}>
                                        <Icon fontSize="small">remove</Icon>
                                    </IconButton>
                                    {item.count}
                                    <IconButton color="inherit" onClick={() => this.props.addProduct(item.product)}>
                                        <Icon fontSize="small">add</Icon>
                                    </IconButton>
                                </ListItemText>

                            </ListItem>
                        ))}
                    </List>
                    <div className="delivery-charges">
                        <Typography variant="subtitle1" noWrap>
                            <Icon fontSize="small" className="delivery-icon">local_shipping</Icon>
                            Delivery charges: 
                            <FormattedNumber value={deliveryCharges} style="currency" currency="GBP" currencyDisplay="symbol" />
                        </Typography>
                    </div>
                    <Divider />
                    <div className="total">
                        <Typography variant="subtitle1" noWrap>
                            Total: <FormattedNumber value={this.getTotalAmountInBasket()} style="currency" currency="GBP" currencyDisplay="symbol" />
                        </Typography>
                    </div>
                    <div className="checkout">
                        <Fab
                            variant="extended"
                            size="medium"
                            color="primary"
                            aria-label="Checkout"
                            >
                            Checkout
                        </Fab>
                    </div>

                </SwipeableDrawer>
            </div>
        )
    }
}

export default ProductComponent;
