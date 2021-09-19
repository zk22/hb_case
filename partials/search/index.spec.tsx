import React from 'react';
import { render, fireEvent, screen, makeTestStore } from '../../test-utils';
import { waitFor } from '@testing-library/dom';
import { Search } from './index';
import '@testing-library/jest-dom';
import { setSearchText } from '@/redux/product-filters/slice';

describe('Search', () => {
  it('should render', () => {
    render(<Search />);
  });

  it('should be in the document', () => {
    render(<Search />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should dispatch set search event when zero characters entered', () => {
    const store = makeTestStore();
    render(<Search />, { store });

    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Enter' });

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(setSearchText(''));
  });

  it('should dispatch set search event when more than two characters entered', () => {
    const store = makeTestStore();
    render(<Search />, { store });

    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(input).toBeInTheDocument();
    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(setSearchText('test'));
  });

  it('should not dispatch set search event when less than two characters entered', () => {
    const store = makeTestStore();
    render(<Search />, { store });

    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 't' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(input).toBeInTheDocument();
    expect(store.dispatch).not.toHaveBeenCalledWith(setSearchText('t'));
  });

  it('should not dispatch set search event without enter key', () => {
    const store = makeTestStore();
    render(<Search />, { store });

    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.keyDown(input, { key: 'X' });

    expect(input).toBeInTheDocument();
    expect(store.dispatch).not.toHaveBeenCalledWith(setSearchText('t'));
  });
});
