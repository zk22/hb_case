import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  filters: {
    color: '',
    brand: '',
  },
  searchText: '',
  orderBy: '',
};

export const productFiltersSlice = createSlice({
  name: 'productFilters',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { type, value } = action.payload;
      state.filters[type] = value;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setOrderBy: (state, action) => {
      state.orderBy = action.payload;
    },
  },
});

export const { setFilter, setSearchText, setOrderBy } =
  productFiltersSlice.actions;
export default productFiltersSlice.reducer;
