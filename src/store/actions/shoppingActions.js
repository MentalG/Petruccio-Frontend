//Action Types
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART";

//Action Creator
export const addProduct = (product) => ({
   type: ADD_PRODUCT_TO_CART,
   payload: product
});

export const deleteProduct = () => ({
   type: DELETE_PRODUCT_FROM_CART
});