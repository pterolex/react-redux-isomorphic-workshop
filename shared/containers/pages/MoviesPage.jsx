'use strict';

import React from 'react';

import { connect } from 'react-redux';

import { loadMovies, addToCart, removeFromCart } from '../../actions/movies';
import connectDataFetchers from '../../lib/connectDataFetchers.jsx';
import history from '../../history';

import MoviesPage from '../../components/pages/MoviesPage.jsx';

class MoviesPageContainer extends React.Component {
    render() {
        return (
            <MoviesPage
                movies      = {this.props.movies}
                search      = {this.props.search}
                isLoading   = {this.props.isLoading}
                onSearch    = {this.handleSearch}
                onCartClick = {this.handleCartClick}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies.entities || [],
        search: state.movies.search,
        isLoading: state.movies.isLoading
    };
}

export default connect(mapStateToProps)(
    connectDataFetchers(MoviesPageContainer, [ loadMovies ])
);

