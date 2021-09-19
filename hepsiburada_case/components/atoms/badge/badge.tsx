import React, { ReactElement } from 'react';
import classnames from 'classnames';

import styles from './badge.module.scss';

interface BadgeProps {
  className?: string;
}

export const Badge = ({
  className = '',
  children,
  ...props
}: BadgeProps & React.HTMLAttributes<HTMLSpanElement>): ReactElement => {
  const classes = classnames(
    {
      [styles.badge]: true,
    },
    className
  );

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};
