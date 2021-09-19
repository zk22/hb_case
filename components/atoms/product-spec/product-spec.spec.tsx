import React from 'react';
import { render } from '@testing-library/react';
import { Spec } from './product-spec';
import '@testing-library/jest-dom';

describe('Spec', () => {
  it('should render', () => {
    render(<Spec name="color" value="red" />);
  });

  test('should render child element', () => {
    const { container } = render(<Spec name="color" value="red" />);
    expect(container.getElementsByClassName('spec__key').length).toBe(1);
    expect(container.getElementsByClassName('spec__value').length).toBe(1);
  });
});
