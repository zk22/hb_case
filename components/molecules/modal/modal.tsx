import React, { ReactElement } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';

import styles from './modal.module.scss';

interface ModalProps {
  className?: string;
  children: JSX.Element;
  header?: JSX.Element | string;
  footer?: JSX.Element | string;
  open?: boolean;
}

function Modal({
  open,
  className,
  header,
  footer,
  children,
}: ModalProps): ReactElement | null {
  if (!open) {
    return null;
  }

  const classes = classnames(
    {
      [styles.modal]: true,
    },
    className
  );

  const modalContent = (
    <div className={styles.modal__backdrop}>
      <div className={classes}>
        {header && <div className={styles.modal__header}>{header}</div>}
        <div className={styles.modal__content}>{children}</div>
        {footer && <div className={styles.modal__footer}>{footer}</div>}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

export default React.memo(Modal);
