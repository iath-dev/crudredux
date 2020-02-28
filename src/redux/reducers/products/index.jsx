import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from "../../types";

// Cada Reducer tiene su propio State

const initial = {
    products: [],
    error: false,
    loading: false,
}

export default function(state = initial, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                error: false,
                loading: true
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                products: action.payload
            }
        case ADD_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            }
        default:
            return state;
    }
}
