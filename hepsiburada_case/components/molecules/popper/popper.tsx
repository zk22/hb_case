import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';

import './popper.scss';

interface PopperProps {
    className?: string;
    children: JSX.Element;
    open?: boolean;
    alignment?: PopperAlignment;
    anchorEl: React.RefObject<any>;
}

type PopperAlignment = 'left' | 'right';


function Popper({ open, className, anchorEl, alignment, children }: PopperProps) {

    useEffect(() => {
        if (open && anchorEl) {
            anchorEl.current.style.position = "relative";
        }
    }, [open, anchorEl]);

    const classes = classnames({
        popper: true,
        'popper--left': alignment === 'left',
        'popper--right': alignment === 'right',
    }, className)

    const content = (
        <div className={classes}>{children}</div>
    );

    if (open && anchorEl.current instanceof Element) {
        return createPortal(content, anchorEl.current);
    }
    return null;
}

export default React.memo(Popper);