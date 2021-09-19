import React from 'react';
import { render, fireEvent, screen } from '../../test-utils';
import { ProductDetails } from './index';
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

describe('ProductDetails', () => {
  it('should render', () => {
    render(<ProductDetails price={product.price} specs={product.specs} />);
  });

  it('should be in the document', () => {
    render(<ProductDetails price={product.price} specs={product.specs} />);

    expect(screen.getByText(/Marka/i)).toBeInTheDocument();
    expect(screen.getByText(/Renk/i)).toBeInTheDocument();
  });
});
