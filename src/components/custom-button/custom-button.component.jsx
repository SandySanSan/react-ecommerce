import React from 'react';

import './custom-button.styles.scss';

const CustomButtom = ({ children, isGoogleSignIn, ...buttonProps }) => {
    return (
        <button
            className={`${isGoogleSignIn ? 'google-signin' : ''} custom-button`}
            {...buttonProps}>
            {children}
        </button>
    );
};

export default CustomButtom;
