import React, { ReactElement } from 'react';
import classnames from 'classnames';

interface MediaProps {
  className?: string;
  tag?: string;
}

type MediaTag = 'img';

export const Media = ({
  className = '',
  tag,
  children,
  ...props
}: MediaProps & React.ImgHTMLAttributes<HTMLImageElement>): ReactElement => {
  const classes = classnames(
    {
      media: true,
    },
    className
  );

  const Tag = `${tag || 'div'}` as MediaTag;

  return <Tag className={classes} {...props} />;
};
