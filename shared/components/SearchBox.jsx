'use strict';

import React from 'react';
import cx from 'classnames';

if ( process.env.BROWSER ) {
    require('./SearchBox.less');
}

import IconButton from 'react-mdl/lib/IconButton';
import Icon from 'react-mdl/lib/Icon';
import Textfield from 'react-mdl/lib/Textfield';

export default class SearchBox extends React.Component {
    static propTypes = {
        search   : React.PropTypes.string,
        onSearch : React.PropTypes.func
    };

    state = {
        isFocused: false
    };

    handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            this.props.onSearch(e.target.value);
        }
    };

    handleSearchChange = (value) => {
        if (!value) {
            this.props.onSearch(value);
        }
    };

    render() {
        const { search, onSearch } = this.props;

        const rootClassNames = cx('SearchBox', {
            'SearchBox--focused' : this.state.isFocused
        });

        return (
            <div className={rootClassNames}>
                <div
                    className='SearchBox__box'
                    onClick={() => this.refs.input.focus()}>
                    <Icon name='search' className='SearchBox__search-icon'/>

                    <input
                        className    = 'SearchBox__input'
                        type         = 'text'
                        ref          = 'input'
                        placeholder  = {'Search'}
                        defaultValue = {search}
                        onChange     = {(e) => this.handleSearchChange(e.target.value)}
                        onKeyDown    = {this.handleKeyDown}
                        onFocus      = { () => this.setState( { isFocused: true } ) }
                        onBlur       = { () => this.setState( { isFocused: false } ) }
                    />
                </div>

                <Textfield
                    className      = 'SearchBox__input-expandable'
                    type           = 'text'
                    placeholder    = {'Search'}
                    label          = {'ololo'}
                    defaultValue   = {search}
                    expandable     = {true}
                    expandableIcon = 'search'
                    onChange       = {this.handleSearchChange}
                    onKeyDown      = {this.handleKeyDown}
                    onFocus        = { () => this.setState( { isFocused: true } ) }
                    onBlur         = { () => this.setState( { isFocused: false } ) }
                />
            </div>
        );
    }
}

