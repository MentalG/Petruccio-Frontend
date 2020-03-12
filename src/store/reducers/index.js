import shoppingReducer from './shoppingReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  shopping: shoppingReducer
});

export default rootReducer;
