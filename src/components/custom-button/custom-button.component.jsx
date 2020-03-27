import React from 'react';

import './custom-button.styles.scss';

const CustomButtom = ({ children, ...buttonProps }) => {
    return (
        <button className='custom-button' {...buttonProps}>
            {children}
        </button>
    );
};

export default CustomButtom;
