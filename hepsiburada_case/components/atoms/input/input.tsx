import React, { useRef } from 'react';
import classnames from 'classnames';

import './input.scss';
import { Icon } from '../icon/icon';

interface InputProps {
    className?: string;
    round?: boolean;
    disabled?: boolean;
    placeholder?: string;
    value?: string;
    fullWidth?: boolean;
}

export const Input = ({
    className = '',
    round = false,
    disabled = false,
    fullWidth = false,
    placeholder,
    value,
    ...props
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>) => {
    const classes = classnames({
        input: true,
        'input--disabled': disabled,
        'input--round': round,
        'input--full-width': fullWidth,
    }, className);
    const inputRef = useRef(null)
    return (
        <div className="input__container">
            <Icon type="search" className="input__icon"/>
            <input
                type="text"
                disabled={disabled}
                className={classes}
                placeholder={placeholder || ' '}
                ref={inputRef}
                defaultValue={value}
                value={value}
                {...props}
            />
        </div>
    );
};
