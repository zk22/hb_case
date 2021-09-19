import React, { ReactElement } from 'react';
import classnames from 'classnames';

import styles from './card.module.scss';

type CardSize = 'tiny' | 'small' | 'medium' | 'large';

interface CardProps {
  className?: string;
  size?: CardSize;
}

export const Card = ({
  className = '',
  size = 'medium',
  children,
  ...props
}: CardProps & React.HTMLAttributes<HTMLElement>): ReactElement => {
  const classes = classnames(
    {
      [styles.card]: true,
      [styles[`card--${size}`]]: true,
    },
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
