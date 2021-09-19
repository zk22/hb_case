import React from 'react';
import { render } from '@testing-library/react';
import { CardContent } from './card-content';
import '@testing-library/jest-dom';

describe('CardContent', () => {
  it('should render', () => {
    render(<CardContent>test</CardContent>);
  });

  it('should be in the document', () => {
    const { container } = render(<CardContent>test</CardContent>);
    expect(container.getElementsByClassName('card-content').length).toBe(1);
  });

  test('should render child element', () => {
    const label = 'test';
    const { getByText } = render(<CardContent>{label}</CardContent>);
    expect(getByText(label)).toBeInTheDocument();
  });

  test('should have specified classNames', () => {
    const className = 'test-class';
    const { container } = render(
      <CardContent className={className}></CardContent>
    );
    expect(container.firstChild).toHaveClass(className);
  });
});
