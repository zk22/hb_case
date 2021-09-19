import { combineReducers } from 'redux';
import cart from './cart/slice';
import productFilters from './product-filters/slice';

const rootReducer = combineReducers({
  cart,
  productFilters,
});

export default rootReducer;
