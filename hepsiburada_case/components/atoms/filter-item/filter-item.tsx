import React, { MouseEvent, ReactElement } from 'react';
import classnames from 'classnames';

import styles from './filter-item.module.scss';

export type Target = '_blank' | '_parent' | '_top' | '_self';

interface FilterItemProps {
  className?: string;
  selected?: boolean;
}

export const FilterItem = ({
  className = '',
  selected,
  children,
  onClick,
  ...props
}: FilterItemProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>): ReactElement => {
  const classes = classnames(
    {
      [styles['filter-item']]: true,
      [styles['filter-item--selected']]: selected,
    },
    className
  );

  const onFilterItemClick = (event: MouseEvent): void => {
    onClick && onClick(event as MouseEvent<HTMLAnchorElement>);
  };

  return (
    <a className={classes} onClick={onFilterItemClick} {...props}>
      {children}
    </a>
  );
};
