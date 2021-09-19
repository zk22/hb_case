import React, { ReactElement, useEffect, useState } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { DEFAULT_PAGE_SIZE } from '@/common/constants';
import { toProductFilterParams } from '@/common/mappers';
import { getProducts } from '@/common/utils/data';
import { Pagination } from '@/components/molecules/pagination/pagination';
import { ProductModel } from '@/types';
import { ProductCard } from '../product-card';

import styles from './index.module.scss';

export const ProductListArea = ({
  className = '',
  children,
  ...props
}: React.HtmlHTMLAttributes<HTMLElement>): ReactElement => {
  const [products, setProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [filters, orderBy, searchText] = useSelector(
    (state: RootStateOrAny) => {
      return [
        state.productFilters.filters,
        state.productFilters.orderBy,
        state.productFilters.searchText,
      ];
    }
  );

  useEffect(() => {
    const load = async (): Promise<void> => {
      const response: any = await getProducts(
        toProductFilterParams({
          searchText,
          orderBy,
          color: filters.color,
          brand: filters.brand,
          from: (currentPage - 1) * DEFAULT_PAGE_SIZE,
          to: currentPage * DEFAULT_PAGE_SIZE,
        })
      );

      setProductCount(response.count);
      setProducts(response.products);
    };
    load();
  }, [filters, searchText, orderBy, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters, orderBy]);

  return (
    <div>
      <div className={styles['product-list-area__list']}>
        {products.length > 0 ? (
          products.map((p: ProductModel) => {
            return (
              <div
                key={`product-${p.id}`}
                className={styles['product-list-area__product']}
              >
                <ProductCard product={p} />
              </div>
            );
          })
        ) : (
          <span>Urun bulunamadı</span>
        )}
      </div>
      {products.length > 0 && (
        <div>
          <Pagination
            count={Math.ceil(productCount / DEFAULT_PAGE_SIZE)}
            page={currentPage}
            onChange={(p) => {
              setCurrentPage(p as number);
            }}
          />
        </div>
      )}
    </div>
  );
};
