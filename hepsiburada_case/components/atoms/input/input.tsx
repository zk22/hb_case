import React, { ReactElement, useRef } from 'react';
import classnames from 'classnames';

import styles from './input.module.scss';
import { Icon } from '../icon/icon';

interface InputProps {
  className?: string;
  round?: boolean;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  fullWidth?: boolean;
}

export const Input = ({
  className = '',
  round = false,
  disabled = false,
  fullWidth = false,
  placeholder,
  value,
  ...props
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>): ReactElement => {
  const classes = classnames(
    {
      [styles.input]: true,
      [styles['input--disabled']]: disabled,
      [styles['input--round']]: round,
      [styles['input--full-width']]: fullWidth,
    },
    className
  );
  const inputRef = useRef(null);
  return (
    <div className={styles.input__container}>
      <Icon type="search" className={styles.input__icon} />
      <input
        type="text"
        disabled={disabled}
        className={classes}
        placeholder={placeholder || ' '}
        ref={inputRef}
        value={value}
        {...props}
      />
    </div>
  );
};
