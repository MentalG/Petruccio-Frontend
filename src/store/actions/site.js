import { SET_VIEWPORT, GET_PRODUCTS } from '../constants';
import api from '../../api-singleton';


//Action set viewport
export const setViewport = viewport => ({
  type: SET_VIEWPORT,
  payload: viewport
});

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const products = await api.products.getProducts();
      console.log(products);
      dispatch({
        type: GET_PRODUCTS,
        payload: products
      })
    } catch (error) {
      console.log(error);
    }
  }
};