import React, { ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@/components/atoms/button/button';
import Modal from '@/components/molecules/modal/modal';
import { removeFromCart } from '@/redux/cart/slice';

import styles from './index.module.scss';

export const RemoveFromCart = ({ productId }): ReactElement => {
  const dispatch = useDispatch();
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const remove = () => {
    dispatch(removeFromCart(productId));
    setIsConfirmationModalOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        className={styles['remove-from-cart']}
        variant="tertiary"
        outlined
        onClick={() => setIsConfirmationModalOpen(true)}
      >
        Kaldır
      </Button>
      <Modal
        open={isConfirmationModalOpen}
        header={'Urunu silmek istediginize emin misiniz?'}
        footer={
          <div className={styles['remove-from-cart__confirmation__footer']}>
            <Button variant="secondary" onClick={remove}>
              Evet
            </Button>
            <Button
              variant="tertiary"
              onClick={() => setIsConfirmationModalOpen(false)}
            >
              Hayır
            </Button>
          </div>
        }
      >
        {
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentiall....
          </span>
        }
      </Modal>
    </React.Fragment>
  );
};
