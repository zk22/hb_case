import React from 'react';
import { render } from '@testing-library/react';
import { Headline } from './headline';
import '@testing-library/jest-dom';

describe('Headline', () => {
  it('should render', () => {
    render(<Headline>test</Headline>);
  });

  it('should be in the document', () => {
    const { container } = render(<Headline>test</Headline>);
    expect(container.getElementsByClassName('headline').length).toBe(1);
  });

  test('should render child element', () => {
    const label = 'test';
    const { getByText } = render(<Headline>{label}</Headline>);
    expect(getByText(label)).toBeInTheDocument();
  });

  test('should have specified classNames', () => {
    const className = 'test-class';
    const { container } = render(<Headline className={className}></Headline>);
    expect(container.firstChild).toHaveClass(className);
  });

  test('should have related tag according to level prop', () => {
    const label = 'test';
    const { getByText } = render(<Headline level={2}>{label}</Headline>);
    const headline = getByText(label);

    expect(headline.tagName).toBe('H2');
  });
});
