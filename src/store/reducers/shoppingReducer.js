import {
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART
} from '../actions/shoppingActions';

const initialState = {
  products: []
};

const shoppingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT_TO_CART:
      return { products: state.products.concat(payload) };
    default:
      return { ...state };
  }
};

export default shoppingReducer;
