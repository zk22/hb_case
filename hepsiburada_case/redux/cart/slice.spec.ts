import reducer, {
  initialState,
  addToCart,
  removeFromCart,
  setProductInfo,
} from './slice';

describe('cart slice', () => {
  describe('reducer, actions and selectors', () => {
    it('should return the initial state on first run', () => {
      const nextState = initialState;
      const result = reducer(undefined, {});
      expect(result).toEqual(nextState);
    });

    it('should properly set the state when an item is added to cart', () => {
      const productId = 12;
      const nextState = reducer(initialState, addToCart(productId));

      const rootState = { cart: nextState };
      expect(rootState.cart.cart).toEqual([{ id: 12 }]);
    });

    it('should properly set the state when an already existing item is added to cart', () => {
      const state = { ...initialState, ...{ cart: [{ id: 12 }, { id: 13 }] } };
      const nextState = reducer(state, addToCart(12));

      const rootState = { cart: nextState };
      expect(rootState.cart.cart).toEqual([{ id: 12 }, { id: 13 }]);
    });

    it('should properly set the state when an item is removed from cart', () => {
      const state = { ...initialState, ...{ cart: [{ id: 12 }, { id: 13 }] } };
      const nextState = reducer(state, removeFromCart(13));

      const rootState = { cart: nextState };
      expect(rootState.cart.cart).toEqual([{ id: 12 }]);
    });

    it('should properly set the product info', () => {
      const products = [
        { id: 12, images: ['test'], specs: { color: 'red', brand: 'apple' } },
      ];
      const nextState = reducer(initialState, setProductInfo(products));

      const rootState = { cart: nextState };
      expect(rootState.cart.products).toEqual(products);
    });
  });
});
