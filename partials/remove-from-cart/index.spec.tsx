import React from 'react';
import { render, fireEvent, screen, makeTestStore } from '../../test-utils';
import { waitFor } from '@testing-library/dom';
import { removeFromCart } from '@/redux/cart/slice';
import { RemoveFromCart } from './index';
import '@testing-library/jest-dom';

describe('RemoveFromCart', () => {
  it('should render', () => {
    render(<RemoveFromCart productId={1} />);
  });

  it('should be in the document', () => {
    render(<RemoveFromCart productId={1} />);

    expect(screen.getByText(/Kaldır/i)).toBeInTheDocument();
  });

  it('should open confirmation modal when clicked', async () => {
    const { container } = render(<RemoveFromCart productId={1} />);

    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => container.getElementsByClassName('modal'));

    const modal = document.body.getElementsByClassName('modal');
    expect(modal.length).toBe(1);
  });

  it('should dispatch remove from cart event on confirmation', () => {
    const store = makeTestStore();
    render(<RemoveFromCart productId={1} />, { store });

    fireEvent.click(screen.getByRole('button'));

    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[1]); // confirmation button

    expect(store.dispatch).toHaveBeenCalledWith(removeFromCart(1));
  });

  it('should not dispatch remove from cart event on confirmation', () => {
    const store = makeTestStore();
    render(<RemoveFromCart productId={1} />, { store });

    fireEvent.click(screen.getByRole('button'));

    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[2]); // reject button

    const modal = document.body.getElementsByClassName('modal');
    expect(modal.length).toBe(0);
    expect(store.dispatch).not.toHaveBeenCalledWith(removeFromCart(1));
  });
});
