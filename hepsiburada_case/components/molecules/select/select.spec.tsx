import React from 'react';
import { render } from '@testing-library/react';
import { Select } from './select';
import '@testing-library/jest-dom';

describe('Select', () => {
  it('should render', () => {
    render(
      <Select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Select>
    );
  });

  it('should be in the document', () => {
    const { getByRole } = render(
      <Select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Select>
    );
    expect(getByRole('combobox')).toBeInTheDocument();
  });
});
