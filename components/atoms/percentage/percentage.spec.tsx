import React from 'react';
import { render } from '@testing-library/react';
import { Percentage } from './percentage';
import '@testing-library/jest-dom';

describe('Percentage', () => {
  it('should render', () => {
    render(<Percentage value={10} />);
  });

  test('should render child element', () => {
    const { getByText } = render(<Percentage value={10} />);
    expect(getByText(/10%/i)).toBeInTheDocument();
  });
});
