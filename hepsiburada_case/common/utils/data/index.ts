import get from 'lodash.get';
import storage, { STORAGE_KEYS } from '../storage';

export const sortByOrderType = (a, b, type): number => {
  if (type === 'asc_price') {
    return a.price.amount - b.price.amount;
  }
  if (type === 'desc_price') {
    return b.price.amount - a.price.amount;
  }
  if (type === 'asc_date') {
    return a.date - b.date;
  }
  if (type === 'desc_date') {
    return b.date - a.date;
  }
  return 0;
};

export const getProductFilterValuesByType = (type) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const products = storage.getItem(STORAGE_KEYS.PRODUCTS) || [];
      console.log('PRODUCTS: ', products);
      const values = products.reduce((acc, item) => {
        const current = acc[item.specs[type]] || 0;
        acc[item.specs[type]] = Number(current) + 1;
        return acc;
      }, {});

      resolve(
        Object.keys(values).map((value) => ({
          key: value,
          count: values[value],
        }))
      );
    }, 100);
  });
};

export const getProducts = ({ filters, from, to, orderBy }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const products = storage.getItem(STORAGE_KEYS.PRODUCTS) || [];

      let filteredProducts = products.filter((product) => {
        return filters.every((filter) => {
          if (filter.type === 'includes') {
            return get(product, filter.key)
              .toLowerCase()
              .includes(filter.value.toLowerCase());
          } else if (filter.type === 'equal') {
            return get(product, filter.key) === filter.value;
          }
        });
      });

      if (orderBy) {
        filteredProducts = filteredProducts.sort((a, b) =>
          sortByOrderType(a, b, orderBy)
        );
      }

      resolve({
        products: filteredProducts.slice(from, to),
        count: filteredProducts.length,
      });
    });
  });
};

export const getProductDetails = (productIds: number[]) => {
  return new Promise((resolve) => {
    const products = storage.getItem(STORAGE_KEYS.PRODUCTS) || [];
    const filtered = products.filter((product) =>
      productIds.includes(product.id)
    );
    resolve(filtered);
  });
};
