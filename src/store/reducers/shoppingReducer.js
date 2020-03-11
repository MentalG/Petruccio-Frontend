import { ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART } from '../actions/shoppingActions';

const shoppingReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return { value: state.value + 1 };
    case DELETE_PRODUCT_FROM_CART:
      return { ...state, value: state.value - 1 };
    default:
      return { ...state };
  }
};

export default shoppingReducer;
