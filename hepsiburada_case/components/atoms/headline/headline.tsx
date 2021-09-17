import React from 'react';
import classnames from 'classnames';

import './headline.scss';

const LEVELS: string[] = [
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
    'quinary',
    'senary',
];

interface HeadlineProps {
    className?: string;
    level?: number;
}

export const Headline = ({
    className = '',
    level = 1,
    children,
    ...props
}: HeadlineProps & React.HTMLAttributes<HTMLHeadingElement>) => {
    const classes = classnames({
        headline: true,
        [`headline--${LEVELS[level - 1]}`]: true,
    }, className);

    const Tag = `h${level}`;

    return (
        <Tag
            className={classes}
            {...props}
        >
            {children}
        </Tag>
    );
};
