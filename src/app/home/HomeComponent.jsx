import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import ProductContainer from '../product/ProductContainer';
import BasketContainer from '../basket/BasketContainer';
import { IntlProvider } from 'react-intl';

import './Home.css';

function HomeComponent(props) {

  return (
    <IntlProvider locale="en-us">
      <div className="app">
          <AppBar className="header" id="appHeader">
              <Toolbar>
                <Typography className="title" variant="h6" color="inherit" noWrap>
                    Simple Fashion
                </Typography>
                <div className="grow" />
                <BasketContainer />
              </Toolbar>
          </AppBar>
          <ProductContainer />
      </div>
    </IntlProvider>
  )
}

export default HomeComponent;