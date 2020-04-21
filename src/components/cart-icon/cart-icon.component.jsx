import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import {
    CartIconContainer,
    ShoppingIconStyles,
    ItemCountStyles,
} from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <CartIconContainer>
            <ShoppingIconStyles onClick={toggleCartHidden} />
            <ItemCountStyles onClick={toggleCartHidden}>
                {itemCount}
            </ItemCountStyles>
        </CartIconContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

// redux selector
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
