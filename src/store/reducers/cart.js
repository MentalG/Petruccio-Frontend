import {
    ADD_PRODUCT_TO_CART,
} from '../constants';

const initialState = {
    cart: []
};

const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_PRODUCT_TO_CART:
            return { ...state, cart: state.cart.concat(payload) };
        default:
            return { ...state };
    }
};

export default cartReducer