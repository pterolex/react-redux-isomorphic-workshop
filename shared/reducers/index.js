'use strict';

import { combineReducers } from 'redux';
import apiResponseFormatter from '../utils/apiResponseFormatter';

import {
    LOAD_MOVIES_SUCCESS,
    LOAD_MOVIE_SUCCESS,
    LOAD_MOVIES_REQUEST,
    ADD_FAVOURITE_MOVIE,
    REMOVE_FAVOURITE_MOVIE,
    LOAD_CART_SUCCESS
} from '../actions/movies';

function movies(state = { movies: [], isLoading: false}, action) {
    switch (action.type) {
        case LOAD_MOVIES_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case LOAD_MOVIES_SUCCESS:
            const entities = action.movies.map( movie => apiResponseFormatter.formatMovie(movie) )
                .filter( m => m.title.toLowerCase().indexOf(action.search) !== -1 );

            return Object.assign({}, state, {
                isLoading: false,
                entities,
                search: action.search
            });

        default:
            return state;
    }
}

function currentMovie(state = {}, action) {
    switch (action.type) {
        case LOAD_MOVIE_SUCCESS:
            return apiResponseFormatter.formatMovie(action.movie);

        default:
            return state;
    }
}

function cart(state = { movies: [], ids: []}, action) {
    switch (action.type) {
        case ADD_FAVOURITE_MOVIE:
            return Object.assign({}, state, {
                ids: [...state.ids, action.movieID]
            });

        case REMOVE_FAVOURITE_MOVIE:
            return Object.assign({}, state, {
                movies: state.movies.filter( movie => movie.id !== action.movieID),
                ids: state.ids.filter( id => id !== action.movieID)
            });

        case LOAD_CART_SUCCESS:
            return Object.assign({}, state, {
                movies: action.data.map(d => apiResponseFormatter.formatMovie(d.data.movies[0]) )
            });

        default:
            return state;
    }
}


const rootReducer = combineReducers({
    currentMovie,
    movies,
    cart
});

export default rootReducer;
