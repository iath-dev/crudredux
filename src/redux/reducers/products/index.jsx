import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR, DOWNLOAD_PRODUCTS_START, DOWNLOAD_PRODUCT_SUCCESS, DOWNLOAD_PRODUCTS_ERROR, DELETE_PRODUCT_START, DELETE_PRODUCT_ERROR, DELETE_PRODUCT_SUCCESS, SELECT_EDIT_PRODUCT } from "../../types";

// Cada Reducer tiene su propio State

const initial = {
    products: [],
    productEdit: null,
    error: false,
    loading: false,
}

export default function(state = initial, action) {
    switch (action.type) {
        case ADD_PRODUCT:
        case DOWNLOAD_PRODUCTS_START:
        case DELETE_PRODUCT_START:
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
                products: [...state.products, action.payload]
            }
        case ADD_PRODUCT_ERROR:
        case DOWNLOAD_PRODUCTS_ERROR:
        case DELETE_PRODUCT_ERROR:
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
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                products: state.products.filter((item) => item.id  !== action.payload),
            }
        case SELECT_EDIT_PRODUCT:
            return {
                ...state,
                productEdit: action.payload,
            }
        default:
            return state;
    }
}
