import React, { ReactElement } from 'react';
import classnames from 'classnames';

import styles from './card-content.module.scss';

interface CardContentProps {
  className?: string;
}

export const CardContent = ({
  className = '',
  children,
  ...props
}: CardContentProps & React.HTMLAttributes<HTMLElement>): ReactElement => {
  const classes = classnames(
    {
      [styles['card-content']]: true,
    },
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
