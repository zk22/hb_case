import React, { ReactElement, useState } from 'react';
import { Card } from '@/components/atoms/card/card';
import { CardContent } from '@/components/atoms/card-content/card-content';
import { Media } from '@/components/atoms/media/media';
import { Label } from '@/components/atoms/label/label';
import { ProductModel } from '@/types';

import { AddToCart } from '../add-to-cart';
import { ProductDetails } from '../product-details';

interface ProductCardProps {
  product: ProductModel;
}

export const ProductCard = ({
  product,
  children,
  ...props
}: ProductCardProps & React.HtmlHTMLAttributes<HTMLElement>): ReactElement => {
  const { id, name, images, specs, price } = product;
  const [focused, setFocused] = useState(false);

  return (
    <React.Fragment>
      <Card
        onMouseEnter={() => setFocused(true)}
        onMouseLeave={() => setFocused(false)}
      >
        <Media tag="img" src={images[0]} />
        <CardContent>
          <Label variant="dark" size="tiny">
            {name}
          </Label>
          {focused ? (
            <AddToCart productId={id} />
          ) : (
            <ProductDetails price={price} specs={specs} />
          )}
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
