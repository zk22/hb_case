import React, { ReactElement } from 'react';
import classnames from 'classnames';

import styles from './product-spec.module.scss';

interface SpecProps {
  className?: string;
  name: string;
  value: string;
}

export const Spec = ({
  className = '',
  name,
  value,
  ...props
}: SpecProps): ReactElement => {
  const classes = classnames(
    {
      [styles.spec]: true,
    },
    className
  );

  return (
    <div className={classes} {...props}>
      <div className={styles.spec__key}>{name}:</div>
      <div className={styles.spec__value}>{value}</div>
    </div>
  );
};
