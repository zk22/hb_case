import React, { ReactElement } from 'react';
import classnames from 'classnames';

import styles from './cart.module.scss';

export type CartSize = 'small' | 'medium' | 'large';

interface CartProps {
  className?: string;
  size?: CartSize;
}

export const Cart = ({
  className = '',
  size = 'medium',
  children,
  ...props
}: CartProps & React.HtmlHTMLAttributes<HTMLElement>): ReactElement => {
  const classes = classnames(
    {
      [styles.cart]: true,
      [styles[`cart--${size}`]]: true,
    },
    className
  );
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
};
