import React, { ReactElement } from 'react';
import classnames from 'classnames';

import styles from './price.module.scss';

type PriceVariant = 'default' | 'line-through' | 'discount' | 'profit';

interface PriceProps {
  className?: string;
  amount: number;
  variant?: PriceVariant;
  showSignum?: boolean;
  suffix?: string;
}

interface PriceFormatted {
  signum: string;
  integer: string;
  fraction: string;
}

const format = (amount: number, showSignum?: boolean): PriceFormatted => {
  const formattedCents: number = (showSignum ? Math.abs(amount) : amount) / 100;
  const [integer, fraction] = new Intl.NumberFormat('en', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
    .format(formattedCents)
    .split('.');

  return {
    signum: amount >= 0 ? '+' : '-',
    integer: integer.replace(/,/g, '.'),
    fraction: String(fraction),
  };
};

export const Price = ({
  className = '',
  amount,
  variant = 'default',
  showSignum,
  suffix,
  ...props
}: PriceProps): ReactElement => {
  const classes = classnames(
    {
      [styles.price]: true,
      [styles[`price--${variant}`]]: true,
    },
    className
  );

  const formatted = format(amount, showSignum);
  return (
    <span className={classes} {...props}>
      {showSignum && <span className="price__signum">{formatted.signum}</span>}
      <span className="price__integer">{formatted.integer}</span>
      <span className="price__seperator">,</span>
      <span className="price__fraction">{formatted.fraction}</span>
      <span className="price__suffix">{suffix}</span>
    </span>
  );
};
