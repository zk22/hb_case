import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Pagination } from './pagination';
import '@testing-library/jest-dom';

describe('Pagination', () => {
  it('should render', () => {
    render(
      <Pagination
        count={3}
        page={1}
        onChange={(i) => console.log('page clicked! ', i)}
      />
    );
  });

  it('should be in the document', () => {
    const { getByRole, getAllByRole } = render(
      <Pagination
        count={3}
        page={1}
        onChange={(i) => console.log('page clicked! ', i)}
      />
    );
    expect(getByRole('list')).toBeInTheDocument();
    expect(getAllByRole('listitem').length).toBe(5);
  });

  it('should trigger on change when page clicked', () => {
    const onChangeSpy = jest.fn();
    const { getAllByRole } = render(
      <Pagination count={3} page={1} onChange={onChangeSpy} />
    );

    const pages = getAllByRole('listitem');
    fireEvent.click(pages[2]);

    expect(onChangeSpy).toHaveBeenCalledWith(2);
  });

  it('should trigger on change previous button clicked', () => {
    const onChangeSpy = jest.fn();
    const { getAllByRole } = render(
      <Pagination count={3} page={2} onChange={onChangeSpy} />
    );

    const pages = getAllByRole('listitem');
    fireEvent.click(pages[0]);

    expect(onChangeSpy).toHaveBeenCalledWith(1);
  });

  it('should have disabled previous button when first page is selected', () => {
    const onChangeSpy = jest.fn();
    const { getByText, getAllByRole } = render(
      <Pagination count={3} page={1} onChange={onChangeSpy} />
    );

    const pages = getAllByRole('listitem');
    fireEvent.click(pages[0]);

    expect(getByText(/</i).classList).toContain('pagination__item--disabled');
  });

  it('should trigger on change next button clicked', () => {
    const onChangeSpy = jest.fn();
    const { getAllByRole } = render(
      <Pagination count={3} page={2} onChange={onChangeSpy} />
    );

    const pages = getAllByRole('listitem');
    fireEvent.click(pages[4]);

    expect(onChangeSpy).toHaveBeenCalledWith(3);
  });

  it('should have disabled next button when last page is selected', () => {
    const onChangeSpy = jest.fn();
    const { getByText, getAllByRole } = render(
      <Pagination count={3} page={3} onChange={onChangeSpy} />
    );

    const pages = getAllByRole('listitem');
    fireEvent.click(pages[4]);

    expect(getByText(/>/i).classList).toContain('pagination__item--disabled');
  });
});
