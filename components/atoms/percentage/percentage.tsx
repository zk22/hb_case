import React, { ReactElement } from 'react';
import classnames from 'classnames';

import styles from './percentage.module.scss';

type PercentageVariant = 'default' | 'line-through' | 'discount' | 'profit';

interface PercentageProps {
  className?: string;
  value: number;
  variant?: PercentageVariant;
}

export const Percentage = ({
  className = '',
  value,
  variant = 'default',
  ...props
}: PercentageProps): ReactElement => {
  const classes = classnames(
    {
      [styles.percentage]: true,
      [styles[`percentage--${variant}`]]: true,
    },
    className
  );

  return (
    <span className={classes} {...props}>
      {value}%
    </span>
  );
};
