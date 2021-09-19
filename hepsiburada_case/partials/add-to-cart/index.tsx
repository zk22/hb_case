import React, { ReactElement } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Button } from '@/components/atoms/button/button';
import { addToCart } from '@/redux/cart/slice';

export const AddToCart = ({ productId }): ReactElement => {
  const cart = useSelector((state: RootStateOrAny) => state.cart.cart);
  const isAlreadyAdded = cart.findIndex((item) => item.id === productId) >= 0;
  const dispatch = useDispatch();

  return (
    <Button
      fullWidth
      style={{ marginTop: 'auto' }}
      disabled={isAlreadyAdded}
      onClick={() => {
        dispatch(addToCart(productId));
      }}
    >
      {isAlreadyAdded ? 'Bu urunu sepete ekleyemezsiniz' : 'Sepete ekle'}
    </Button>
  );
};
