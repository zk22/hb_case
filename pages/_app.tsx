import type { AppProps } from 'next/app';
import { ReactElement, useEffect } from 'react';
import { wrapper } from '@/redux/store';
import storage, { STORAGE_KEYS } from '@/common/utils/storage';
import products from '@/common/products.json';

import '@/common/styles/index.scss';

const loadProductData = (): void => {
  storage.setItem(STORAGE_KEYS.PRODUCTS, products);
};

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  useEffect(() => {
    loadProductData();
  }, []);

  return <Component {...pageProps} />;
}
export default wrapper.withRedux(MyApp);
