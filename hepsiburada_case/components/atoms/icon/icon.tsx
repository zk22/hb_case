import React from 'react';
import classnames from 'classnames';
import ICONS from './icons';

import './icon.scss';

export type IconSize = 'small' | 'medium' | 'large';
export type IconType = 'search' | 'close' | 'arrowDown';

interface IconProps {
    className?: string;
    type: IconType;
    size?: IconSize;
}

export const Icon = ({
    className = '',
    size = 'medium',
    type,
    ...props
}: IconProps) => {
    const classes = classnames({
        icon: true,
        [`icon--${size}`]: true,
    }, className);

    return (
        <span
            className={classes}
            dangerouslySetInnerHTML={{__html: ICONS[type]}}
            {...props}
        />
    );
};
