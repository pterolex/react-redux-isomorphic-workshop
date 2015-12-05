'use strict';

import React     from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import App from './containers/App.jsx';

import MainLayout from './containers/layouts/MainLayout.jsx';

import MoviesPageContainer from './containers/pages/MoviesPage.jsx';
import MoviePageContainer from './containers/pages/MoviePage.jsx';

export default (
    <Route component={App} >
        <Route component={MainLayout} path='/'>
            <Redirect from='/' to='/movies' />

            <Route component={MoviesPageContainer} path='/movies' />
            <Route component={MoviePageContainer} path='/movies/:id' />

        </Route>
    </Route>
);
