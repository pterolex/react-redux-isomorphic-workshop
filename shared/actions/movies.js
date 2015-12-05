'use strict';

import api                  from '../apiSingleton';

export const LOAD_MOVIES_SUCCESS = 'LOAD_MOVIES_SUCCESS';
export const LOAD_MOVIES_REQUEST = 'LOAD_MOVIES_REQUEST';
export const ADD_FAVOURITE_MOVIE = 'ADD_FAVOURITE_MOVIE';
export const REMOVE_FAVOURITE_MOVIE = 'REMOVE_FAVOURITE_MOVIE';

export function loadMovies(params = {}, query = {}) {
    return (dispatch) => {
        const search = query.search || '';

        dispatch({
            type: LOAD_MOVIES_REQUEST
        });

        return api.movies.list({
            search
        }).then( ({data} ) => {
            dispatch({
                type        : LOAD_MOVIES_SUCCESS,
                movies      : data.movies,
                // movies      : [],
                search
            });
        });
    };
}

export const LOAD_MOVIE_SUCCESS = 'LOAD_MOVIE_SUCCESS';

export function loadMovie(params) {
    return (dispatch) => {
        return api.movies.show({
            id: params.id
        }).then( ({data} ) => {
            dispatch({
                type        : LOAD_MOVIE_SUCCESS,
                movie       : data.movies[0],
            });
        });
    };
}

export function addToCart(id, query = {}) {
    api.movies.addMovie(id);

    return (dispatch) => {
        dispatch({
            type        : ADD_FAVOURITE_MOVIE,
            movieID     : id
        });
    };
}

export function removeFromCart(id, query = {}) {
    api.movies.removeMovie(id);
    return (dispatch) => {
        dispatch({
            type        : REMOVE_FAVOURITE_MOVIE,
            movieID     : id
        });
    };
}
