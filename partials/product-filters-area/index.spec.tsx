import React from 'react';
import '@testing-library/jest-dom';
import * as data from '@/common/utils/data';
import { fireEvent, screen, waitFor } from '@testing-library/dom';
import { setFilter, setOrderBy } from '@/redux/product-filters/slice';
import { makeTestStore, render } from '../../test-utils';
import { ProductFilters } from './index';

jest.mock('@/common/utils/data');
data.getProductFilterValuesByType = jest.fn().mockImplementation((type) => {
  const res =
    type === 'color'
      ? [{ key: 'red', count: 1 }]
      : [{ key: 'apple', count: 1 }];
  return Promise.resolve(res);
});

describe('ProductFilters', () => {
  it('should render', async () => {
    render(<ProductFilters />);
    await waitFor(() => {
      expect(screen.getByText(/red/i)).toBeInTheDocument();
    });
  });

  it('should be in the document', async () => {
    render(<ProductFilters />);
    await waitFor(() => {
      expect(screen.getByText(/Renk/i)).toBeInTheDocument();
      //   expect(screen.getByText(/Sıralama/i)).toBeInTheDocument();
      //   expect(screen.getByText(/Marka/i)).toBeInTheDocument();
    });
  });

  it('should display color values', async () => {
    render(<ProductFilters />);

    await waitFor(() => {
      expect(screen.getByText(/red/i)).toBeInTheDocument();
    });
  });

  it('should fire set filter event on filter click', async () => {
    const store = makeTestStore();
    render(<ProductFilters />, { store });

    await waitFor(() => {
      expect(screen.getByText(/red/i)).toBeInTheDocument();
    });

    const colorFilter1 = screen.getByText(/red/i);
    fireEvent.click(colorFilter1);

    expect(store.dispatch).toHaveBeenCalledWith(
      setFilter({ type: 'color', value: 'red' })
    );

    const colorFilter2 = screen.getByText(/red/i);
    fireEvent.click(colorFilter2);

    expect(store.dispatch).toHaveBeenCalledWith(
      setFilter({ type: 'color', value: '' })
    );

    const brandFilter1 = screen.getByText(/apple/i);
    fireEvent.click(brandFilter1);

    expect(store.dispatch).toHaveBeenCalledWith(
      setFilter({ type: 'brand', value: 'apple' })
    );

    const brandFilter2 = screen.getByText(/apple/i);
    fireEvent.click(brandFilter2);

    expect(store.dispatch).toHaveBeenCalledWith(
      setFilter({ type: 'brand', value: '' })
    );
  });

  it('should fire set order by event on order filter click', async () => {
    const store = makeTestStore();
    render(<ProductFilters />, { store });

    await waitFor(() => {
      expect(screen.getByText(/En dusuk/i)).toBeInTheDocument();
    });

    const filter1 = screen.getByText(/En dusuk/i);
    fireEvent.click(filter1);

    expect(store.dispatch).toHaveBeenCalledWith(setOrderBy('asc_price'));

    const filter2 = screen.getByText(/En dusuk/i);
    fireEvent.click(filter2);

    expect(store.dispatch).toHaveBeenCalledWith(setOrderBy(''));
  });
});
