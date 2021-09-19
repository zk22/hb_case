import React from 'react';
import { render } from '../../test-utils';
import { ProductPrice } from './index';
import '@testing-library/jest-dom';

const price = {
  amount: 1,
  previousAmount: 2,
  discount: 50,
  currency: '₺',
};

describe('ProductPrice', () => {
  it('should render', () => {
    render(<ProductPrice price={price} />);
  });

  it('should be in the document', () => {
    const { container } = render(<ProductPrice price={price} />);

    const priceEl = container.getElementsByClassName('price');
    const percentageEl = container.getElementsByClassName('percentage');
    expect(priceEl.length).toBe(2);
    expect(percentageEl.length).toBe(1);
  });
});
