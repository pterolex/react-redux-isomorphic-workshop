import React from 'react';

import Card, {
    CardTitle,
    CardText,
    CardActions,
    CardMenu
} from 'react-mdl/lib/card/Card';

import Grid, { Cell } from 'react-mdl/lib/Grid';
import Button         from 'react-mdl/lib/Button';
import IconButton     from 'react-mdl/lib/IconButton';
import Icon           from 'react-mdl/lib/Icon';
import MovieCard from '../MovieCard.jsx';

import AppBar from '../AppBar.jsx';

if ( process.env.BROWSER ) {
    require('./CartPage.less');
}

export default class CartPage extends React.Component {
    static propTypes = {
        movie: React.PropTypes.object,
        onAddToCart: React.PropTypes.func,
        onRemoveFromCart: React.PropTypes.func,
        onmovieClick: React.PropTypes.func
    };

    render() {
        const { onGoBack, cart} = this.props;
        const movies = [
            {id: 1, title: 'Movie 1'},
            {id: 2, title: 'Movie 2'}
        ];

        return (
            <div className='CartPage'>
                <AppBar
                    backgroundURL    = {''}
                    rightIconName    = 'arrow_back'
                    onRightIconClick = {onGoBack}
                    title            = {'Cart'}
                    height           = {200}
                />

                <div className='CartPage__content'>
                    <Card className='CartPage__Paper' shadowLevel={1}>
                        <CardTitle className='CartPage__head'>
                            <div className='CartPage__info'>
                                <div className='CartPage__name'>
                                    Movies Cart
                                </div>
                            </div>
                        </CardTitle>
                        {
                            movies.map( movie =>
                                <div className='CartPage__movie'>
                                    <div>
                                        {movie.title}
                                    </div>
                                    <Button
                                        colored={true}
                                        onClick={this.onAddToCartClick.bind(this, movie)}>
                                        Remove
                                    </Button>
                                </div>
                            )
                        }
                        {
                            movies.length === 0
                                ? 'No movies'
                                : ''
                        }
                    </Card>

                </div>
            </div>
        );
    }
}

