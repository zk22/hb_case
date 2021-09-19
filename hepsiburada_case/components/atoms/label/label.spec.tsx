import React from 'react';
import { render } from '@testing-library/react';
import { Label } from './label';
import '@testing-library/jest-dom';

describe('Label', () => {
  it('should render', () => {
    render(<Label>test</Label>);
  });

  it('should be in the document', () => {
    const { getByText } = render(<Label>test</Label>);
    expect(getByText('test')).toBeInTheDocument();
  });

  test('should have specified classNames', () => {
    const className = 'test-class';
    const { getByText } = render(<Label className={className}>test</Label>);
    expect(getByText('test')).toHaveClass(className);
  });
});
