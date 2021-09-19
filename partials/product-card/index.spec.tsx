import React from 'react';
import { render, fireEvent, screen } from '../../test-utils';
import { ProductCard } from './index';
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

describe('ProductCard', () => {
  it('should render', () => {
    render(<ProductCard product={product} />);
  });

  it('should be in the document', () => {
    render(<ProductCard product={product} />);

    expect(screen.getByText(/test/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should display add to cart button on hover', async () => {
    const { container } = render(<ProductCard product={product} />);

    fireEvent.mouseEnter(screen.getByText(/test/i));

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(container.getElementsByClassName('price').length).toBe(0);
  });

  it('should display product details on mouse out', async () => {
    const { container } = render(<ProductCard product={product} />);

    fireEvent.mouseEnter(screen.getByText(/test/i));
    fireEvent.mouseLeave(screen.getByText(/test/i));

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(container.getElementsByClassName('price').length).toBe(1);
  });
});
