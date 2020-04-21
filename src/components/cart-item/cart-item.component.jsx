import React from 'react';

import {
    CartItemContainer,
    ItemDetailsStyles,
    NameStyles,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <CartItemContainer>
            <img src={imageUrl} alt='item' />
            <ItemDetailsStyles>
                <NameStyles>{name}</NameStyles>
                <span>
                    {quantity} x ${price}
                </span>
            </ItemDetailsStyles>
        </CartItemContainer>
    );
};

export default CartItem;
