import React from 'react';
import classnames from 'classnames';

import './media.scss';

interface MediaProps {
    className?: string;
    tag?: string;
}

export const Media = ({
    className = '',
    tag,
    children,
    ...props
}: MediaProps & React.AnchorHTMLAttributes<HTMLElement>) => {
    const classes = classnames({
        media: true,
    }, className);

    const Tag = `${tag}`

    return (
        <Tag
            className={classes}
            {...props}
        >
            {children}
        </Tag>
    );
};
