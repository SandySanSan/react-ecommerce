import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceforStripe = price * 100;
    const publishableKey = 'pk_test_w5wpX1bDThiA2JWK3mKUMeuy00JCQ1w932';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    };
    return (
        <StripeCheckout
            label='Pay now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceforStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
