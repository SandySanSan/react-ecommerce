import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
    selectCartItems,
    selectCartTotal,
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, total }) => {
    const HEADER_TITLES = [
        'Product',
        'Description',
        'Quantity',
        'Price',
        'Remove',
    ];
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                {HEADER_TITLES.map((title) => (
                    <div className='header-block' key={title}>
                        <span>{title}</span>
                    </div>
                ))}
            </div>
            {cartItems.map((item) => (
                <CheckoutItem cartItem={item} key={item.id} />
            ))}

            {total === 0 ? (
                <p className='text-warning'>Your cart is empty!</p>
            ) : (
                <>
                    <div className='total'>TOTAL: ${total}</div>
                    <div className='text-warning'>
                        * Please use the following test credit card for payments
                        * <br />
                        4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
                    </div>
                    <StripeCheckoutButton price={total} />
                </>
            )}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
