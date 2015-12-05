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


const rootReducer = combineReducers({
    movies,
    currentMovie
});

export default rootReducer;
