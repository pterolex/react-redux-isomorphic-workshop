'use strict';

import React from 'react';

import { connect } from 'react-redux';

import { loadMovies, addToCart, removeFromCart } from '../../actions/movies';
import connectDataFetchers from '../../lib/connectDataFetchers.jsx';
import history from '../../history';

import MoviesPage from '../../components/pages/MoviesPage.jsx';

class MoviesPageContainer extends React.Component {
    handleMovieCardClick = (movie) => {
        this.props.history.pushState(null, `/movies/${movie.id}`);
    };

    handleAddToCartClick = (movie) => {
        this.props.dispatch( addToCart(movie.id) );
    };

    handleRemoveFromCartClick = (movie) => {
        this.props.dispatch( removeFromCart(movie.id) );
    };

    handleCartClick = () => {
        this.props.history.pushState(null, '/cart');
    };

    handleSearch = (searchText) => {
        this.props.history.pushState(null, this.props.location.pathname, {
            ...this.props.location.query,
            search : searchText
        });
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.location.query.search !== nextProps.location.query.search) {
            this.props.dispatch(loadMovies(nextProps.params, nextProps.location.query) );
        }
    }

    render() {
        return (
            <MoviesPage
                movies      = {this.props.movies}
                cart        = {this.props.cart}
                search      = {this.props.search}
                isLoading   = {this.props.isLoading}
                onItemClick = {this.handleMovieCardClick}
                onSearch    = {this.handleSearch}
                onCartClick = {this.handleCartClick}
                onAddToCart      = {this.handleAddToCartClick}
                onRemoveFromCart = {this.handleRemoveFromCartClick}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies.entities || [],
        search: state.movies.search,
        isLoading: state.movies.isLoading,
        cart:   state.cart.ids
    };
}

export default connect(mapStateToProps)(
    connectDataFetchers(MoviesPageContainer, [ loadMovies ])
);

