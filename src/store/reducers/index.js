import shoppingReducer from './shoppingReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  shoping: shoppingReducer
});

export default rootReducer;
