import React from 'react';
import { render } from '@testing-library/react';
import { Badge } from './badge';
import '@testing-library/jest-dom';

describe('Badge', () => {
  it('should render', () => {
    render(<Badge>12</Badge>);
  });

  test('should render child element', () => {
    const label = 'test';
    const { getByText } = render(<Badge>{label}</Badge>);
    expect(getByText(label)).toBeInTheDocument();
  });
});
