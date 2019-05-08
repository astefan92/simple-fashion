
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Home } from './home/';
import './App.css';

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
  });

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <div>
                        <Route exact path='/' component={Home} />
                        <Route path='/home' component={Home} />
                    </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;