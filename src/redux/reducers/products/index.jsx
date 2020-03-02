import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR, DOWNLOAD_PRODUCTS_START, DOWNLOAD_PRODUCT_SUCCESS, DOWNLOAD_PRODUCTS_ERROR } from "../../types";

// Cada Reducer tiene su propio State

const initial = {
    products: [],
    error: false,
    loading: false,
}

export default function(state = initial, action) {
    switch (action.type) {
        case ADD_PRODUCT:
        case DOWNLOAD_PRODUCTS_START:
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
                products: [action.payload, ...state.products]
            }
        case ADD_PRODUCT_ERROR:
        case DOWNLOAD_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            }
        case DOWNLOAD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                products: action.payload,
            }
        default:
            return state;
    }
}
