import React from 'react';
import { render } from '@testing-library/react';
import { Price } from './price';
import '@testing-library/jest-dom';

describe('Badge', () => {
  it('should render', () => {
    render(<Price amount={1000} />);
  });

  test('should handle show signum prop', () => {
    const { getByText } = render(<Price amount={1200} showSignum />);
    expect(getByText(/\+/i)).toBeInTheDocument();
    expect(getByText(/12/i)).toBeInTheDocument();
    expect(getByText(/,/i)).toBeInTheDocument();
    expect(getByText(/00/i)).toBeInTheDocument();
  });

  test('should handle show signum prop negative value', () => {
    const { getByText } = render(<Price amount={-1200} showSignum />);
    expect(getByText(/-/i)).toBeInTheDocument();
    expect(getByText(/12/i)).toBeInTheDocument();
    expect(getByText(/,/i)).toBeInTheDocument();
    expect(getByText(/00/i)).toBeInTheDocument();
  });

  test('should handle suffix prop', () => {
    const { getByText } = render(<Price amount={-1200} suffix="₺" />);
    expect(getByText(/12/i)).toBeInTheDocument();
    expect(getByText(/,/i)).toBeInTheDocument();
    expect(getByText(/00/i)).toBeInTheDocument();
    expect(getByText(/₺/i)).toBeInTheDocument();
  });
});
