import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './button';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('should render', () => {
    render(<Button>test</Button>);
  });

  it('should be in the document', () => {
    render(<Button>test</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('should render child element', () => {
    const label = 'test';
    const { getByText } = render(<Button>{label}</Button>);
    expect(getByText(label)).toBeInTheDocument();
  });

  test('should have specified classNames', () => {
    const className = 'test-class';
    const { container } = render(<Button className={className}></Button>);
    expect(container.firstChild).toHaveClass(className);
  });
});
