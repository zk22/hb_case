import React from 'react';
import { render } from '@testing-library/react';
import { Card } from './card';
import '@testing-library/jest-dom';

describe('Card', () => {
  it('should render', () => {
    render(<Card>test</Card>);
  });

  it('should be in the document', () => {
    const { container } = render(<Card>test</Card>);
    expect(container.getElementsByClassName('card').length).toBe(1);
  });

  test('should render child element', () => {
    const label = 'test';
    const { getByText } = render(<Card>{label}</Card>);
    expect(getByText(label)).toBeInTheDocument();
  });

  test('should have specified classNames', () => {
    const className = 'test-class';
    const { container } = render(<Card className={className}></Card>);
    expect(container.firstChild).toHaveClass(className);
  });
});
