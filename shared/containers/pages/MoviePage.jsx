'use strict';

import React from 'react';

import { connect } from 'react-redux';

import { loadMovie, addToCart, removeFromCart } from '../../actions/movies';
import connectDataFetchers from '../../lib/connectDataFetchers.jsx';
import history from '../../history';

import MoviePage from '../../components/pages/MoviePage.jsx';

class MoviePageContainer extends React.Component {
    render() {
        return (
            <MoviePage
                movie       = {this.props.movie}
                onCartClick = {this.handleCartClick}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        movie: state.currentMovie
    };
}

export default connect(mapStateToProps)(
    connectDataFetchers(MoviePageContainer, [ loadMovie ])
);

