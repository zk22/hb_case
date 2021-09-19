import React, { ReactElement } from 'react';
import { Spec } from '@/components/atoms/product-spec/product-spec';
import { ProductPriceModel, ProductSpecsModel } from '@/types';
import { ProductPrice } from '../product-price';

export const ProductDetails = ({
  price,
  specs,
}: {
  price: ProductPriceModel;
  specs: ProductSpecsModel;
}): ReactElement => {
  return (
    <React.Fragment>
      <div className="m-v-10">
        <Spec name="Marka" value={specs.brand} />
        <Spec name="Renk" value={specs.color} />
      </div>
      <ProductPrice price={price} />
    </React.Fragment>
  );
};
