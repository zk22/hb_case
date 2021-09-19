import React from 'react';
import { render } from '@testing-library/react';
import { Icon } from './icon';
import '@testing-library/jest-dom';

describe('Icon', () => {
  it('should render', () => {
    render(<Icon type="close" />);
  });

  it('should be in the document', () => {
    const { container } = render(<Icon type="close" />);
    expect(container.getElementsByClassName('icon').length).toBe(1);
  });

  test('should have specified classNames', () => {
    const className = 'test-class';
    const { container } = render(<Icon type="search" className={className} />);
    expect(container.firstChild).toHaveClass(className);
  });
});
