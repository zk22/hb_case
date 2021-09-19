import React, { ReactElement } from 'react';
import classnames from 'classnames';

import styles from './label.module.scss';

type LabelSize = 'tiny' | 'small' | 'medium' | 'large';
type LabelVariant = 'default' | 'dark';

interface LabelProps {
  className?: string;
  size?: LabelSize;
  variant?: LabelVariant;
  bold?: boolean;
}

export const Label = ({
  className = '',
  size = 'medium',
  variant = 'default',
  bold,
  children,
  ...props
}: LabelProps & React.HTMLAttributes<HTMLElement>): ReactElement => {
  const classes = classnames(
    {
      [styles.label]: true,
      [styles['label--bold']]: bold,
      [styles[`label--${variant}`]]: variant,
      [styles[`label--${size}`]]: size,
    },
    className
  );

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};
