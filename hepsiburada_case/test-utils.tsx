// test-utils.jsx
import React from 'react';
import { Provider } from 'react-redux';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '@/redux/cart/slice';
import productFiltersReducer from '@/redux/product-filters/slice';
import { makeStore } from '@/redux/store';

export const makeTestStore = () => {
  const store = makeStore();
  const origDispatch = store.dispatch;
  store.dispatch = jest.fn(origDispatch);
  return store;
};

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: { cart: cartReducer, productFilters: productFiltersReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
