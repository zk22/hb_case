import reducer, {
  initialState,
  setFilter,
  setSearchText,
  setOrderBy,
} from './slice';

describe('product filters slice', () => {
  describe('reducer, actions and selectors', () => {
    it('should return the initial state on first run', () => {
      const nextState = initialState;
      const result = reducer(undefined, {});
      expect(result).toEqual(nextState);
    });

    it('should properly set the state when a filter item is set', () => {
      const filter = { type: 'color', value: 'red' };
      const nextState = reducer(initialState, setFilter(filter));

      const rootState = { productFilters: nextState };
      expect(rootState.productFilters.filters).toEqual({
        color: 'red',
        brand: '',
      });
    });

    it('should properly set the state when search text is set', () => {
      const text = 'test';
      const nextState = reducer(initialState, setSearchText(text));

      const rootState = { productFilters: nextState };
      expect(rootState.productFilters.searchText).toEqual(text);
    });

    it('should properly set the state when order by is set', () => {
      const orderBy = 'asc_price';
      const nextState = reducer(initialState, setOrderBy(orderBy));

      const rootState = { productFilters: nextState };
      expect(rootState.productFilters.orderBy).toEqual(orderBy);
    });
  });
});
