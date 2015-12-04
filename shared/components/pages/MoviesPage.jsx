import React from 'react';

import Grid, { Cell } from 'react-mdl/lib/Grid';

import MovieCard from '../MovieCard.jsx';
import AppBar   from '../AppBar.jsx';

if ( process.env.BROWSER ) {
    require('./MoviesPage.less');
}

export default class MoviesPage extends React.Component {
    static propTypes = {
        movies: React.PropTypes.arrayOf(React.PropTypes.object),
        search:      React.PropTypes.string,
        onItemClick: React.PropTypes.func,
        onSearch:    React.PropTypes.func
    };

    render() {
        const { movies, search, onItemClick, onSearch, onCartClick, isLoading } = this.props;
        const cart = [];

        return (
            <div className='MoviesPage'>
                <AppBar
                    title         = {'Movies'}
                    search        = {search}
                    scrollOffset  = {0}
                    displaySearch = {true}
                    onSearch      = {onSearch}
                    onCartClick   = {onCartClick}
                />

                {
                    isLoading
                        ? (
                            <Grid className='MoviesPage__list'>Loading...</Grid>
                        ) : (
                            <Grid className='MoviesPage__list'>
                                {movies.map( movie =>
                                    <Cell
                                        key    = {movie.id}
                                        align  = 'stretch'
                                        col    = {3}
                                        tablet = {6}
                                        phone  = {12}>
                                        <MovieCard
                                            isInCart          = { cart.indexOf(movie.id) !== -1}
                                            title             = {movie.title}
                                            pictureURL        = {movie.pictureURL}
                                            movie             = {movie}
                                        />
                                    </Cell>
                                )}
                            </Grid>
                        )
                }
            </div>
        );
    }
}

