import React, { ReactElement } from 'react';
import classnames from 'classnames';

import styles from './headline.module.scss';

const LEVELS: string[] = [
  'primary',
  'secondary',
  'tertiary',
  'quaternary',
  'quinary',
  'senary',
];

interface HeadlineProps {
  className?: string;
  level?: number;
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const Headline = ({
  className = '',
  level = 1,
  children,
  ...props
}: HeadlineProps & React.HTMLAttributes<HTMLHeadingElement>): ReactElement => {
  const classes = classnames(
    {
      [styles.headline]: true,
      [styles[`headline--${LEVELS[level - 1]}`]]: true,
    },
    className
  );

  const Tag = `h${level}` as HeadingTag;

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};
