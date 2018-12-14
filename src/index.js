import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/index';

import App from './App.js';

const store = configureStore();
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
