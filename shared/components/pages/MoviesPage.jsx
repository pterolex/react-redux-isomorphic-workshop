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
                            <Grid className='MoviesPage__list'>Loading</Grid>
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
                                            isInCart          = { this.props.cart.indexOf(movie.id) !== -1}
                                            title             = {movie.title}
                                            pictureURL        = {movie.pictureURL}
                                            onClick           = {onItemClick.bind(this, movie)}
                                            movie             = {movie}
                                            onAddToCart      = {this.props.onAddToCart}
                                            onRemoveFromCart = {this.props.onRemoveFromCart}
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

