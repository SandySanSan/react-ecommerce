import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../../redux/cart/cart.actions';

import CustomButton from '../../custom-button/custom-button.component';
import CartItem from '../../cart-item/cart-item.component';

import {
    CartDropdownContainer,
    EmptyMessageStyles,
    CartItemsStyles,
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <CartDropdownContainer>
            <CartItemsStyles>
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))
                ) : (
                    <EmptyMessageStyles>Your cart is empty.</EmptyMessageStyles>
                )}
            </CartItemsStyles>
            <CustomButton
                onClick={() => {
                    history.push('/checkout');
                    // avoid to write another unecessary disptach function
                    dispatch(toggleCartHidden());
                }}>
                GO TO CHECKOUT
            </CustomButton>
        </CartDropdownContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
