import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Cart } from '@/components/atoms/cart/cart';
import Popper from '@/components/molecules/popper/popper';
import { Badge } from '@/components/atoms/badge/badge';
import { getProductDetails } from '@/common/utils/data';
import { setProductInfo } from '@/redux/cart/slice';
import { EMPTY_PRODUCT } from '@/common/constants';
import { ProductModel } from '@/types';
import { ProductTile } from '../product-tile';

import styles from './index.module.scss';

export const UserCart = ({
  children,
  ...props
}: React.HtmlHTMLAttributes<HTMLElement>): ReactElement => {
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(false);
  const cartBtnRef = useRef(null);
  const [cart, products] = useSelector((state: RootStateOrAny) => [
    state.cart.cart,
    state.cart.products,
  ]);

  useEffect(() => {
    if (cart.length) {
      const productIds = cart.map((item) => item.id);
      getProductDetails(productIds).then((resp: ProductModel[]) => {
        dispatch(setProductInfo(resp));
      });
    } else {
      setExpanded(false);
    }
  }, [cart, dispatch]);

  return (
    <div ref={cartBtnRef} className={styles['user-cart']}>
      <Cart onClick={() => setExpanded(!expanded)}>Sepetim</Cart>
      {cart.length > 0 && (
        <Badge className={styles['user-cart__badge']}>{cart.length}</Badge>
      )}
      <Popper
        anchorEl={cartBtnRef}
        open={expanded && cart.length > 0}
        alignment="right"
      >
        {cart.map((cartItem) => {
          const p = products.find((p) => p.id === cartItem.id) || EMPTY_PRODUCT;
          return <ProductTile key={`product-tile-${p.id}`} product={p} />;
        })}
      </Popper>
    </div>
  );
};
