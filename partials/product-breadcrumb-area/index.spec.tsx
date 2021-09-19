import React from 'react';
import { makeTestStore, render, screen } from '../../test-utils';
import { ProductBreadcrumbArea } from './index';
import { fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { setOrderBy } from '@/redux/product-filters/slice';

describe('AddToCart', () => {
  it('should render', () => {
    render(<ProductBreadcrumbArea />);
  });

  it('should be in the document', () => {
    render(<ProductBreadcrumbArea />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('should display searched text', async () => {
    render(<ProductBreadcrumbArea />, {
      preloadedState: {
        productFilters: {
          searchText: 'abc',
        },
      },
    });

    expect(screen.getByText(/abc/i)).toBeInTheDocument();
  });

  it('should fire order by changed event on order change', () => {
    const store = makeTestStore();
    render(<ProductBreadcrumbArea />, { store });

    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'asc_price' },
    });

    expect(store.dispatch).toHaveBeenCalledWith(setOrderBy('asc_price'));
  });
});
