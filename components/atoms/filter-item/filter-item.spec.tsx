import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { FilterItem } from './filter-item';
import '@testing-library/jest-dom';

describe('FilterItem', () => {
  it('should render', () => {
    render(<FilterItem>test</FilterItem>);
  });

  it('should be in the document', () => {
    const { container } = render(<FilterItem>test</FilterItem>);
    expect(container.getElementsByClassName('filter-item').length).toBe(1);
  });

  test('should render child element', () => {
    const label = 'test';
    const { getByText } = render(<FilterItem>{label}</FilterItem>);
    expect(getByText(label)).toBeInTheDocument();
  });

  test('should have specified classNames', () => {
    const className = 'test-class';
    const { container } = render(
      <FilterItem className={className}></FilterItem>
    );
    expect(container.firstChild).toHaveClass(className);
  });

  test('should handle on click event', () => {
    const clickSpy = jest.fn();
    const label = 'test';
    const { getByText } = render(
      <FilterItem onClick={clickSpy}>{label}</FilterItem>
    );
    const filterItem = getByText(label);
    fireEvent(
      filterItem,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(clickSpy).toHaveBeenCalledTimes(1);
  });
});
