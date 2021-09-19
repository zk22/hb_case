import React from 'react';
import { render, fireEvent, screen, makeTestStore } from '../../test-utils';
import { addToCart } from '@/redux/cart/slice';
import { AddToCart } from './index';
import '@testing-library/jest-dom';

describe('AddToCart', () => {
  it('should render', () => {
    render(<AddToCart productId={1} />);
  });

  it('should be in the document', () => {
    render(<AddToCart productId={1} />);

    expect(screen.getByText(/Sepete ekle/i)).toBeInTheDocument();
  });

  it('should dispatch add to cart event on click', () => {
    const store = makeTestStore();
    render(<AddToCart productId={1} />, { store });

    fireEvent.click(screen.getByRole('button'));

    expect(store.dispatch).toHaveBeenCalledWith(addToCart(1));
  });
});
