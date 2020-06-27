import {ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART} from '../constants'

//Action Creator
export const addProduct = (product) => ({
   type: ADD_PRODUCT_TO_CART,
   payload: product
});

export const deleteProduct = () => ({
   type: DELETE_PRODUCT_FROM_CART
});