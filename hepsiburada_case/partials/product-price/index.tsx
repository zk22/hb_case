import React, { ReactElement } from 'react';
import { Price } from '@/components/atoms/price/price';
import { Percentage } from '@/components/atoms/percentage/percentage';
import { ProductPriceModel } from '@/types';

interface ProductPriceProps {
  price: ProductPriceModel;
}

export const ProductPrice = ({ price }: ProductPriceProps): ReactElement => {
  const { currency, amount, previousAmount, discount } = price;

  return (
    <React.Fragment>
      <Price amount={amount} suffix={currency} />
      {previousAmount && (
        <span>
          <Price
            variant="line-through"
            amount={previousAmount}
            suffix={currency}
          />
          {discount && (
            <Percentage className="m-h-5" variant="discount" value={discount} />
          )}
        </span>
      )}
    </React.Fragment>
  );
};
