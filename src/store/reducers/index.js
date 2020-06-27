import cartReducer from './cart';
import siteReducer from './site';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    cartReducer,
    siteReducer
});

export default rootReducer;
