import React from 'react';
import classnames from 'classnames';

import './button.scss';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps {
    className?: string;
    size?: ButtonSize;
    variant?: ButtonVariant;
    disabled?: boolean;
    fullWidth?: boolean;
    outlined?: boolean;
    onClick?: () => void;
}

export const Button = ({
    className = '',
    size = 'medium',
    variant = 'primary',
    disabled = false,
    fullWidth = false,
    outlined = false,
    children,
    ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    const classes = classnames({
        button: true,
        [`button--${size}`]: true,
        [`button--${variant}`]: true,
        'button--disabled': disabled,
        'button--full-width': fullWidth,
        'button--outlined': outlined,
    }, className);
    return (
        <button
            type="button"
            className={classes}
            {...props}
        >
            {children}
        </button>
    );
};
