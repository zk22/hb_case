import React, { ReactElement } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { setOrderBy } from '@/redux/product-filters/slice';
import { ORDER_TYPES } from '@/common/constants';
import { Select } from '@/components/molecules/select/select';
import { Headline } from '@/components/atoms/headline/headline';
import { Label } from '@/components/atoms/label/label';

import styles from './index.module.scss';

export const ProductBreadcrumbArea = ({
  children,
  ...props
}: React.HtmlHTMLAttributes<HTMLElement>): ReactElement => {
  const [orderBy, searchText] = useSelector((state: RootStateOrAny) => {
    return [state.productFilters.orderBy, state.productFilters.searchText];
  });

  const dispatch = useDispatch();

  const onOrderByChanged = (value: string): void => {
    dispatch(setOrderBy(value));
  };

  return (
    <div className={`container ${styles['breadcrumb-area']}`}>
      <div className={styles['breadcrumb-area__title']}>
        <Headline level={2}>Cep Telefonu</Headline>
        {searchText && (
          <div>
            <Label>Aranan kelime: </Label>
            <Label variant="dark">{searchText}</Label>
          </div>
        )}
      </div>
      <Select
        value={orderBy}
        onChange={(e) => onOrderByChanged(e.target.value)}
      >
        <option value={undefined}>{'Sıralama'}</option>;
        {ORDER_TYPES.map((t, i) => {
          return (
            <option key={`order-option-${i}`} value={t.key}>
              {t.label}
            </option>
          );
        })}
      </Select>
    </div>
  );
};
