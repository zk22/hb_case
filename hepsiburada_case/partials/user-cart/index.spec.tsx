import React from 'react';
import { render, fireEvent, screen } from '../../test-utils';
import { waitFor } from '@testing-library/dom';
import { UserCart } from './index';
import '@testing-library/jest-dom';

describe('UserCart', () => {
  it('should render', () => {
    render(<UserCart />);
  });

  it('should be in the document', () => {
    render(<UserCart />);

    expect(screen.getByText(/Sepet/i)).toBeInTheDocument();
  });

  it('should display badge', () => {
    const { container } = render(<UserCart />, {
      preloadedState: { cart: { cart: [{ id: 1 }], products: [] } },
    });

    expect(screen.getByText(/Sepet/i)).toBeInTheDocument();
    expect(container.getElementsByClassName('badge').length).toBe(1);
  });

  it('should expand cart popper when clicked', async () => {
    const { container } = render(<UserCart />, {
      preloadedState: {
        cart: {
          cart: [{ id: 1 }],
          products: [{ id: 1, images: [''], specs: {} }],
        },
      },
    });

    fireEvent.click(screen.getByText(/Sepet/i));

    await waitFor(() => container.getElementsByClassName('popper'));

    const popper = container.getElementsByClassName('popper');
    expect(screen.getByText(/Sepet/i)).toBeInTheDocument();
    expect(popper.length).toBe(1);
    expect(popper[0].childElementCount).toBe(1);
  });
});
