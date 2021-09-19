import { createSlice } from '@reduxjs/toolkit';
import storage, { STORAGE_KEYS } from '@/common/utils/storage';

const cartInStorage = storage.getItem(STORAGE_KEYS.CART) || [];

export const initialState = {
  cart: [...cartInStorage],
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      const itemIndex = state.cart.findIndex((item) => item.id === id);
      if (itemIndex < 0) {
        state.cart.push({ id });
      }
      storage.setItem(STORAGE_KEYS.CART, state.cart);
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const newCart = [...state.cart.filter((item) => item.id !== id)];
      state.cart = newCart;
      storage.setItem(STORAGE_KEYS.CART, newCart);
    },
    setProductInfo: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, setProductInfo } = cartSlice.actions;
export default cartSlice.reducer;
