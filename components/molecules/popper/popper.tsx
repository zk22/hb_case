import React, { ReactElement, useEffect } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';

import styles from './popper.module.scss';

interface PopperProps {
  className?: string;
  children: JSX.Element;
  open?: boolean;
  alignment?: PopperAlignment;
  anchorEl: React.RefObject<any>;
}

type PopperAlignment = 'left' | 'right';

function Popper({
  open,
  className,
  anchorEl,
  alignment,
  children,
}: PopperProps): ReactElement | null {
  useEffect(() => {
    if (open && anchorEl) {
      anchorEl.current.style.position = 'relative';
    }
  }, [open, anchorEl]);

  const classes = classnames(
    {
      [styles.popper]: true,
      [styles['popper--left']]: alignment === 'left',
      [styles['popper--right']]: alignment === 'right',
    },
    className
  );

  const content = <div className={classes}>{children}</div>;

  if (open && anchorEl.current instanceof Element) {
    return createPortal(content, anchorEl.current);
  }
  return null;
}

export default React.memo(Popper);
