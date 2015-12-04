import React from 'react';

if ( process.env.BROWSER ) {
    require('./MovieCard.less');
}

import Card, {
    CardTitle,
    CardText,
    CardActions,
    CardMenu
} from 'react-mdl/lib/card/Card';

import Button     from 'react-mdl/lib/Button';
import IconButton from 'react-mdl/lib/IconButton';
import Icon       from 'react-mdl/lib/Icon';

export default class MovieCard extends React.Component {
    static propTypes = {
        id                : React.PropTypes.string,
        name              : React.PropTypes.string,
        message           : React.PropTypes.string,
        pictureURL        : React.PropTypes.string,
        author            : React.PropTypes.object,
        onClick           : React.PropTypes.func
    };

    onAddToCartClick() {
        if (this.props.isInCart) {
            this.props.onRemoveFromCart(this.props.movie);
        } else {
            this.props.onAddToCart(this.props.movie);
        }
    }

    render() {
        const { id, title, pictureURL, isInCart, onClick } = this.props;

        return (
            <Card className='MovieCard' shadowLevel={1}>
                <CardTitle className='MovieCard__head'>
                    <div className='MovieCard__info'>
                        <div className='MovieCard__name-author'>
                            <div className='MovieCard__name' onClick={onClick}>
                                {title}
                            </div>
                        </div>
                    </div>
                </CardTitle>

                <div
                    className='MovieCard__media'
                    onClick={onClick}
                    style={{background: `url(${pictureURL}) center / cover`}}
                />

                <CardActions
                    border={true}
                    className='MovieCard__actions'>
                    <div>
                        <IconButton
                            colored={true}
                            name={  isInCart ? 'bookmark' : 'bookmark_border'}
                            onClick={ () => this.onAddToCartClick() }
                        />
                    </div>

                    <Button
                        colored={true}
                        onClick={onClick}>
                        View info
                    </Button>
                </CardActions>
            </Card>
        );
    }
}
