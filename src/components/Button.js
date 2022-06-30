import React from 'react';
import './Button.scss';
// import classnNames from 'classname'

const Button = ({children, size, color, bord}) => {
    return (
        // <button className={`button ${size}`}>{children}</button>
        // <button className={classnames('button',size)}>{children}</button>
                <button className={`button ${size} ${color} ${bord}`}>{children}</button>
    );
};

export default Button;