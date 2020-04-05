import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
    selectCartItems,
    selectCartTotal,
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

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
            <div className='total'>${total}</div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
