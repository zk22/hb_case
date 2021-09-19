import React from 'react';
import * as data from '@/common/utils/data';
import { fireEvent, screen, waitFor } from '@testing-library/dom';
import { makeTestStore, render } from '../../test-utils';
import { ProductListArea } from './index';
import '@testing-library/jest-dom';
import { DEFAULT_PAGE_SIZE } from '@/common/constants';

jest.mock('@/common/utils/data');
const getProductsSpy = jest.fn();
data.getProducts = getProductsSpy.mockImplementation((type) => {
  const res = {
    count: 1,
    products: [
      {
        id: 1,
        date: 123,
        name: 'test',
        images: ['test'],
        specs: {},
        price: {
          amount: 1,
        },
      },
    ],
  };
  return Promise.resolve(res);
});

describe('ProductListArea', () => {
  it('should render', async () => {
    render(<ProductListArea />);

    await waitFor(() => {
      expect(screen.getByRole('list')).toBeInTheDocument();
    });
  });

  it('should be in the document', async () => {
    render(<ProductListArea />);

    await waitFor(() => {
      expect(screen.getByRole('list')).toBeInTheDocument();
    });
  });

  it('should display pagination', async () => {
    render(<ProductListArea />);

    await waitFor(() => {
      const pages = screen.getAllByRole('listitem');
      expect(pages.length).toBe(3); // prev - 1 - next
    });
  });

  it('should get products by page when pagination item clicked', async () => {
    const store = makeTestStore();
    render(<ProductListArea />, { store });

    await waitFor(() => {
      const pages = screen.getAllByRole('listitem');
      fireEvent.click(pages[1]);
      expect(getProductsSpy).toHaveBeenCalledWith({
        filters: [],
        from: 0,
        orderBy: '',
        to: DEFAULT_PAGE_SIZE,
      });
    });
  });
});
