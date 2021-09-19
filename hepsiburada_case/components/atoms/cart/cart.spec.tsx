import React from 'react';
import { render } from '@testing-library/react';
import { Cart } from './cart';
import '@testing-library/jest-dom';

describe('Cart', () => {
  it('should render', () => {
    render(<Cart>test</Cart>);
  });

  it('should be in the document', () => {
    const { container } = render(<Cart>test</Cart>);
    expect(container.getElementsByClassName('cart').length).toBe(1);
  });

  test('should render child element', () => {
    const label = 'test';
    const { getByText } = render(<Cart>{label}</Cart>);
    expect(getByText(label)).toBeInTheDocument();
  });

  test('should have specified classNames', () => {
    const className = 'test-class';
    const { container } = render(<Cart className={className}></Cart>);
    expect(container.firstChild).toHaveClass(className);
  });
});
