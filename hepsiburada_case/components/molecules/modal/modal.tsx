import React from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';

import './modal.scss';

interface ModalProps {
    className?: string;
    children: JSX.Element;
    header?: JSX.Element | string;
    footer?: JSX.Element | string;
    open?: boolean;
}


function Modal({ open, className, header, footer, children }: ModalProps) {
    if (!open) {
        return null;
    }

    const classes = classnames({
        modal: true,
    }, className)

    const modalContent = (
        <div className={`modal__backdrop`}>
            <div className={classes}>
                {header && <div className="modal__header">{header}</div>}
                <div className={`modal__content`}>{children}</div>
                {footer && <div className="modal__footer">{footer}</div>}
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}

export default React.memo(Modal);