// react
import React from 'react';
import ReactDOM from "react-dom";

// redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

// mui
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import App from './app'

import './style.css';


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

const theme = createMuiTheme({
    // palette: {
    //     primary: { main: '#228e22' },
    //     secondary: { main: '#4d4d4d' },
    // },
    typography: {
        useNextVariants: true,
        fontFamily: '"Raleway", sans-serif;',
    },
    span: {
        useNextVariants: true,
        fontFamily: '"Raleway", sans-serif;',
    },
})

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
