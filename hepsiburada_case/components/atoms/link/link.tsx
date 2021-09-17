import React, { MouseEvent } from 'react';
import classnames from 'classnames';

import './link.scss';

export type Target = '_blank' | '_parent' | '_top' | '_self';

interface LinkProps {
    className?: string;
    href?: string;
    target?: Target;
}

export const Link = ({
    className = '',
    href = '',
    target = '_blank',
    children,
    onClick,
    ...props
}: LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const classes = classnames({
        link: true,
    }, className);

    const linkDestination = () => {
        return href || undefined;
    }

    const linkTarget = () => {
        return href ? target : undefined;
    }

    const onLinkClick = (event: MouseEvent) => {
        if (!linkDestination()) {
            event.preventDefault();
        }
        onClick && onClick(event as MouseEvent<HTMLAnchorElement>);
    }

    return (
        <a
            className={classes}
            href={linkDestination()}
            target={linkTarget()}
            onClick={onLinkClick}
            {...props}
        >
            {children}
        </a>
    );
};
