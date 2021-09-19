import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Input } from './input';
import '@testing-library/jest-dom';

describe('Input', () => {
  it('should render', () => {
    render(<Input />);
  });

  it('should be in the document', () => {
    const { getByRole } = render(<Input />);
    expect(getByRole('textbox')).toBeInTheDocument();
  });

  test('should have specified classNames', () => {
    const className = 'test-class';
    const { getByRole } = render(<Input className={className} />);
    expect(getByRole('textbox')).toHaveClass(className);
  });

  test('should handle on change event', () => {
    const changeSpy = jest.fn();
    const { getByRole } = render(<Input onChange={changeSpy} />);
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });

    expect(changeSpy).toHaveBeenCalledTimes(1);
  });
});
