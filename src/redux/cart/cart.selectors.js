import { createSelector } from 'reselect';

// input selector (just returm a piece of the state)
const selectCart = state => state.cart;

// memoized selector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

// selector
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
                accumulatedQuantity + cartItem.quantity,
            0
        )
);
