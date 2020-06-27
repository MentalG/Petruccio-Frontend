import {
    SET_VIEWPORT,
    GET_PRODUCTS
} from '../constants';

const initialState = {
    viewport: 'main',
    products: []
};

const siteReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_VIEWPORT:
            return { ...state, viewport: payload };
        case GET_PRODUCTS: 
            return {...state, products: payload}
        default:
            return { ...state };
    }
};

export default siteReducer;