import React, { ReactElement } from 'react';
import { Card } from '@/components/atoms/card/card';
import { Media } from '@/components/atoms/media/media';
import { Label } from '@/components/atoms/label/label';
import { ProductModel } from '@/types';
import { RemoveFromCart } from '../remove-from-cart';

import styles from './index.module.scss';

interface ProductTileProps {
  product: ProductModel;
}

export const ProductTile = ({
  children,
  product,
  ...props
}: ProductTileProps & React.HtmlHTMLAttributes<HTMLElement>): ReactElement => {
  const { id, name, images } = product;
  return (
    <div className={styles['product-tile']}>
      <Card size="tiny">
        <div>
          <Media tag="img" src={images[0]} width="100%"></Media>
        </div>
      </Card>
      <div className={styles['product-tile__details']}>
        <Label variant="dark" size="tiny">
          {name}
        </Label>
        <RemoveFromCart productId={id} />
      </div>
    </div>
  );
};
