import React, { ReactElement } from 'react';
import classnames from 'classnames';
import ICONS from './icons';

import styles from './icon.module.scss';

export type IconSize = 'small' | 'medium' | 'large';
export type IconType = 'search' | 'close' | 'arrowDown';

interface IconProps {
  className?: string;
  type: IconType;
  size?: IconSize;
}

export const Icon = ({
  className = '',
  size = 'medium',
  type,
  ...props
}: IconProps): ReactElement => {
  const classes = classnames(
    {
      [styles.icon]: true,
      [styles[`icon--${size}`]]: true,
    },
    className
  );

  return (
    <span
      className={classes}
      dangerouslySetInnerHTML={{ __html: ICONS[type] }}
      {...props}
    />
  );
};
