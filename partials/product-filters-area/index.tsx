import React, { ReactElement, useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Filter } from '@/components/molecules/filter/filter';
import { getProductFilterValuesByType } from '@/common/utils/data';
import { ORDER_TYPES, FILTERS } from '@/common/constants';
import { toFilterItemLabel } from '@/common/mappers';
import { setFilter, setOrderBy } from '@/redux/product-filters/slice';

export const ProductFilters = ({
  className = '',
  children,
  ...props
}: React.HtmlHTMLAttributes<HTMLElement>): ReactElement => {
  const dispatch = useDispatch();

  const [colors, setColors] = useState([]);
  const [brands, setBrands] = useState([]);

  const [filters, orderBy] = useSelector((state: RootStateOrAny) => [
    state.productFilters.filters,
    state.productFilters.orderBy,
  ]);

  useEffect(() => {
    const load = async (): Promise<void> => {
      const colorsResp: any = await getProductFilterValuesByType(FILTERS.color);
      setColors(colorsResp.map(toFilterItemLabel));

      const brandsResp: any = await getProductFilterValuesByType(FILTERS.brand);
      setBrands(brandsResp.map(toFilterItemLabel));
    };
    load();
  }, []);

  const onFilterChanged = (type: string, value: string): void => {
    const newFilter = {
      type,
      value: filters[type] === value ? '' : value,
    };
    dispatch(setFilter(newFilter));
  };

  const onOrderByChanged = (value: string): void => {
    const newOrderBy = value === orderBy ? '' : value;
    dispatch(setOrderBy(newOrderBy));
  };

  return (
    <div>
      <Filter
        label="Renk"
        items={colors}
        selected={filters.color}
        onSelectChange={(key) => onFilterChanged(FILTERS.color, key)}
      />
      <Filter
        label="Sıralama"
        items={ORDER_TYPES}
        selected={orderBy}
        onSelectChange={(key) => onOrderByChanged(key)}
      />
      <Filter
        label="Marka"
        items={brands}
        selected={filters.brand}
        onSelectChange={(key) => onFilterChanged(FILTERS.brand, key)}
      />
    </div>
  );
};
