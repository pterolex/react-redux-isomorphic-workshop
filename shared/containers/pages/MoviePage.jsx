'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { loadMovie, addToCart, removeFromCart } from '../../actions/movies';
import connectDataFetchers from '../../lib/connectDataFetchers.jsx';

import MoviePage from '../../components/pages/MoviePage.jsx';

class MoviePageContainer extends React.Component {
    handleAddToCartClick = (movie) => {
        this.props.dispatch( addToCart(movie.id) );
    };

    handleRemoveFromCartClick = (movie) => {
        this.props.dispatch( removeFromCart(movie.id) );
    };

    handleGoBack = () => {
        this.props.history.pushState(null, `/movies`);
    };

    handleActivationClick = (movies) => {
        this.props.history.pushState(null, `/movies/${movies.id}`);
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.params.id !== nextProps.params.id) {
            this.props.dispatch(loadMovie(nextProps.params, nextProps.location.query) );
        }
    }

    render() {
        console.log('cart', this.props.cart);
        const movie = this.props.movie || {};
        const isInCart = this.props.cart.indexOf(movie.id) !== -1;

        return (
            <MoviePage
                movie             = {movie}
                isInCart          = {isInCart}
                onAddToCart       = {this.handleAddToCartClick}
                onRemoveFromCart  = {this.handleRemoveFromCartClick}
                onGoBack          = {this.handleGoBack}
            />
        );
    }
}

export default connect( state => ({ movie: state.currentMovie, cart: state.cart.ids }) )(
    connectDataFetchers(MoviePageContainer, [ loadMovie ])
);
