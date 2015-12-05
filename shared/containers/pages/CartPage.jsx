'use strict';

import React from 'react';

import { connect } from 'react-redux';

import { loadMovies, loadCartMovies, removeFromCart } from '../../actions/movies';
import connectDataFetchers from '../../lib/connectDataFetchers.jsx';
import history from '../../history';

import CartPage from '../../components/pages/CartPage.jsx';

class CartPageContainer extends React.Component {
    handleMovieCardClick = (movie) => {
        this.props.history.pushState(null, `/movies/${movie.id}`);
    };

    handleRemoveFromCartClick = (movie) => {
        this.props.dispatch( removeFromCart(movie.id) );
    };

    handleSearch = (searchText) => {
        this.props.history.pushState(null, this.props.location.pathname, {
            ...this.props.location.query,
            search : searchText
        });
    };

    handleGoBack = () => {
        this.props.history.pushState(null, `/movies`);
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.location.query.search !== nextProps.location.query.search) {
            this.props.dispatch(loadMovies(nextProps.params, nextProps.location.query) );
        }
    }

    render() {
        return (
            <CartPage
                movies      = {this.props.movies}
                cart        = {this.props.cart}
                search      = {this.props.search}
                onItemClick = {this.handleMovieCardClick}
                onGoBack          = {this.handleGoBack}
                onRemoveFromCart  = {this.handleRemoveFromCartClick}
                onSearch    = {this.handleSearch}
            />
        );
    }
}

function mapStateToProps(state) {
    localStorage.cartState = JSON.stringify(state.cart);

    return {
        movies: state.cart.movies || [],
        search: state.movies.search,
        cart:   state.cart.ids
    };
}

export default connect(mapStateToProps)(
    connectDataFetchers(CartPageContainer, [ loadMovies, loadCartMovies ])
);

