import React from 'react';
import { render, screen } from '../../test-utils';
import { Header } from './index';
import '@testing-library/jest-dom';

describe('AddToCart', () => {
  it('should render', () => {
    render(<Header />);
  });

  it('should be in the document', () => {
    render(<Header />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText(/Sepet/i)).toBeInTheDocument();
  });
});
