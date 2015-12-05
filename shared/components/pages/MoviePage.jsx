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

import AppBarWithBackground from '../AppBarWithBackground.jsx';

if ( process.env.BROWSER ) {
    require('./MoviePage.less');
}

export default class MoviePage extends React.Component {
    static propTypes = {
        movie: React.PropTypes.object,
        onAddToCart: React.PropTypes.func,
        onRemoveFromCart: React.PropTypes.func,
        onmovieClick: React.PropTypes.func
    };

    render() {
        const {  onAddToCart, onRemoveFromCart, isInCart, onmovieClick, onGoBack} = this.props;
        const movie = {};

        if (!movie.title) {
            return <div />
        }

        return (
            <div className='MoviePage'>
                <AppBarWithBackground
                    backgroundURL    = {movie.pictureURL}
                    rightIconName    = 'arrow_back'
                    onRightIconClick = {onGoBack}
                    title            = {movie.title}
                    height           = {200}
                />

                <div className='MoviePage__content'>
                    <Card className='MoviePage__Paper' shadowLevel={1}>
                        <CardTitle className='MoviePage__head'>
                            <img className='MoviePage__picture' src={movie.pictureURL} />
                            <div className='MoviePage__info'>
                                <div className='MoviePage__name'>
                                    {movie.name}
                                </div>

                                <div className='MoviePage__author-name'>
                                    {movie.title}
                                </div>

                                <div className='MoviePage__pass-info'>

                                    <span className='MoviePage__span-divider'>
                                        {movie.year}
                                    </span>
                                </div>

                                <div className='MoviePage__actions'>
                                    <Button
                                        colored   = {true}
                                        className = 'MoviePage__pass-btn'
                                        raised    = {true}>
                                        Add to cart
                                    </Button>
                                </div>
                            </div>
                        </CardTitle>

                        <div className='MoviePage__details'>
                            <p className='MoviePage__message'>
                                {movie.plot}
                            </p>
                        </div>
                    </Card>

                </div>
            </div>
        );
    }
}

