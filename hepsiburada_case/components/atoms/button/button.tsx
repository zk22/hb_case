import React, { ReactElement } from 'react';
import classnames from 'classnames';

import styles from './button.module.scss';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

interface ButtonProps {
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  fullWidth?: boolean;
  outlined?: boolean;
  onClick?: () => void;
}

export const Button = ({
  className = '',
  size = 'medium',
  variant = 'primary',
  disabled = false,
  fullWidth = false,
  outlined = false,
  children,
  ...props
}: ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>): ReactElement => {
  const classes = classnames(
    {
      [styles.button]: true,
      [styles[`button--${size}`]]: true,
      [styles[`button--${variant}`]]: true,
      [styles['button--disabled']]: disabled,
      [styles['button--full-width']]: fullWidth,
      [styles['button--outlined']]: outlined,
    },
    className
  );
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
};
