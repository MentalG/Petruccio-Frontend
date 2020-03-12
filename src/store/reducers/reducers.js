import {
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART,
  SET_VIEWPORT
} from '../constants';

const initialState = {
  products: [],
  viewport: 'main'
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT_TO_CART:
      return { ...state, products: state.products.concat(payload) };
    case SET_VIEWPORT:
      return { ...state, viewport: payload };
    default:
      return { ...state };
  }
};
