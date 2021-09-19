import React from 'react';
import { render } from '../../test-utils';
import { ProductTile } from './index';
import '@testing-library/jest-dom';

const product = {
  id: 1,
  date: 123,
  name: 'test',
  images: ['test'],
  specs: {},
  price: {
    amount: 1,
  },
};

describe('ProductTile', () => {
  it('should render', () => {
    render(<ProductTile product={product} />);
  });

  it('should be in the document', () => {
    const { container } = render(<ProductTile product={product} />);
    const tile = container.getElementsByClassName('product-tile').length;
    expect(tile).toBe(1);
  });
});
