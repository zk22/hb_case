import React from 'react';
import classnames from 'classnames';

import './badge.scss';

interface BadgeProps {
    className?: string;
}

export const Badge = ({
    className = '',
    children,
    ...props
}: BadgeProps & React.HTMLAttributes<HTMLSpanElement>) => {
    const classes = classnames({
        badge: true,
    }, className);

    return (
        <span
            className={classes}
            {...props}
        >{children}</span>
    );
};
