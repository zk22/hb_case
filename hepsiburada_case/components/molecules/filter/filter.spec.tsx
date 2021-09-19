import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Filter } from './filter';
import '@testing-library/jest-dom';

const items = [
  {
    key: 'a1',
    label: 'a1',
  },
  {
    key: 'a2',
    label: 'a2',
  },
  {
    key: 'a3',
    label: 'a3',
  },
];

describe('Filter', () => {
  it('should render', () => {
    render(<Filter label="color" />);
  });

  it('should be in the document', () => {
    const { container } = render(<Filter label="color" />);
    expect(container.getElementsByClassName('filter').length).toBe(1);
  });

  test('should handle selected prop', () => {
    const { container } = render(
      <Filter label="color" items={items} selected={'a2'} />
    );

    const filterItems = container.getElementsByClassName('filter-item');
    expect(filterItems[1].classList).toContain('filter-item--selected');
  });

  test('should handle on select change event', () => {
    const changeSpy = jest.fn();
    const { container } = render(
      <Filter
        label="color"
        items={items}
        selected={'a2'}
        onSelectChange={changeSpy}
      />
    );
    const filterItems = container.getElementsByClassName('filter-item');
    fireEvent.click(filterItems[0]);

    expect(changeSpy).toHaveBeenCalledTimes(1);
    expect(changeSpy).toHaveBeenCalledWith('a1');
  });
});
