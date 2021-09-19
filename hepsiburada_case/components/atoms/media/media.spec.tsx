import React from 'react';
import { render } from '@testing-library/react';
import { Media } from './media';
import '@testing-library/jest-dom';

describe('Media', () => {
  it('should render', () => {
    render(<Media tag="img" src="test" />);
  });

  it('should be in the document', () => {
    const { getByRole } = render(<Media tag="img" src="test" />);
    expect(getByRole('img')).toBeInTheDocument();
  });

  test('should have related tag according to level prop', () => {
    const { getByRole } = render(<Media tag={'img'} src="test" />);
    expect(getByRole('img').tagName).toBe('IMG');
  });

  test('should use default tag if not provided', () => {
    const { container } = render(<Media src="test" />);
    expect(container.firstChild?.nodeName).toBe('DIV');
  });
});
