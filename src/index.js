import React from 'react';
import ReactDOM from "react-dom";
import App from './app'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

import './style.css';


const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
