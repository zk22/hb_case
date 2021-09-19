import React, { KeyboardEvent, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchText } from '@/redux/product-filters/slice';
import { Input } from '@/components/atoms/input/input';

export const Search = (): ReactElement => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    const { value } = e.target as HTMLInputElement;
    if (e.key === 'Enter') {
      if (value.length === 0 || value.length >= 2) {
        dispatch(setSearchText(text));
      }
    }
  };

  return (
    <Input
      round
      fullWidth
      value={text}
      placeholder={'Urunler icerisinde ara'}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => onKeyDown(e)}
    />
  );
};
