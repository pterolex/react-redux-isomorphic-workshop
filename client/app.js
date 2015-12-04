'use strict';

import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import fetch from 'isomorphic-fetch';

import configureStore from '../shared/store/configureStore';
import routes from '../shared/routes.jsx';
import history from '../shared/history.js';
import jQuery         from 'jquery';

const initialState = window.__INITIAL_STATE__ || {};
// initialState.cart = localStorage('movies') || {};
const store = configureStore(initialState);
window.jQuery = window.$ = jQuery;

ReactDOM.render(
    <Provider store={store}>
        <Router children={routes} history={history} />
    </Provider>,

    document.getElementById('react-view')
);




