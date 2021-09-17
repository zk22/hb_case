import React from 'react';
import classnames from 'classnames';
import { Icon } from '../../atoms/icon/icon';

import './select.scss';

interface SelectProps {
    className?: string;
    value?: string;
}

export const Select = ({
    className = '',
    value,
    children,
    ...props
}: SelectProps & React.SelectHTMLAttributes<HTMLSelectElement>) => {
    const classes = classnames({
        select: true,
    }, className);
    return (
        <div className="select__container">
            <select
                className={classes}
                value={value}
                {...props}
            >
                {children}
            </select>
            <Icon type="arrowDown" size="small" className="select__expand"/>
        </div>
    );
};
