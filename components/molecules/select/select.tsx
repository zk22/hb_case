import React, { ReactElement } from 'react';
import classnames from 'classnames';
import { Icon } from '@/components/atoms/icon/icon';

import styles from './select.module.scss';

interface SelectProps {
  className?: string;
  value?: string;
}

export const Select = ({
  className = '',
  value,
  children,
  ...props
}: SelectProps &
  React.SelectHTMLAttributes<HTMLSelectElement>): ReactElement => {
  const classes = classnames(
    {
      [styles.select]: true,
    },
    className
  );
  return (
    <div className={styles.select__container}>
      <select className={classes} value={value} {...props}>
        {children}
      </select>
      <Icon type="arrowDown" size="small" className={styles.select__expand} />
    </div>
  );
};
