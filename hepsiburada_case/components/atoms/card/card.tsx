import React from 'react';
import classnames from 'classnames';

import './card.scss';

type CardSize = 'tiny' | 'small' | 'medium' | 'large';

interface CardProps {
    className?: string;
    size?: CardSize;
}

export const Card = ({
    className = '',
    size = 'medium',
    children,
    ...props
}: CardProps & React.AnchorHTMLAttributes<HTMLElement>) => {
    const classes = classnames({
        card: true,
        [`card--${size}`]: true,
    }, className);

    return (
        <div
            className={classes}
            {...props}
        >
            {children}
        </div>
    );
};
