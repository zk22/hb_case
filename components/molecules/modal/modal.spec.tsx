import React from 'react';
import { render } from '@testing-library/react';
import Modal from './modal';
import '@testing-library/jest-dom';

describe('Modal', () => {
  it('should render', () => {
    render(
      <Modal open>
        <div>test</div>
      </Modal>
    );
  });

  it('should be in the document', () => {
    render(
      <Modal open>
        <div>test</div>
      </Modal>
    );
    expect(document.body.getElementsByClassName('modal').length).toBe(1);
  });

  test('should render child elements', () => {
    const label = 'test';
    const { getByText } = render(
      <Modal open>
        <div>{label}</div>
      </Modal>
    );
    expect(getByText(label)).toBeInTheDocument();
  });

  test('should attach to document body', () => {
    render(
      <Modal open>
        <div>test</div>
      </Modal>
    );

    const modal = document.body.getElementsByClassName('modal')[0];
    const backdrop = document.body.getElementsByClassName('modal__backdrop')[0];

    expect(modal.parentNode).toEqual(backdrop);
    expect(backdrop.parentNode).toEqual(document.body);
  });
});
