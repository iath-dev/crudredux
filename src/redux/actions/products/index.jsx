import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR, DOWNLOAD_PRODUCTS_START, DOWNLOAD_PRODUCTS_ERROR, DOWNLOAD_PRODUCT_SUCCESS, DELETE_PRODUCT_START, DELETE_PRODUCT_ERROR, DELETE_PRODUCT_SUCCESS, SELECT_EDIT_PRODUCT, EDIT_PRODUCT_START, EDIT_PRODUCT_SUCCESS, EDIT_PRODUCT_ERROR } from "../../types";
import AxiosClient from "../../../config";
import Swal from 'sweetalert2';

export function createNewProductAction(product) {
    return async (dispatch) => {
        dispatch(addProduct());

        try {
            // Insertar a la API

            await AxiosClient.post('/products', product);

            dispatch(addProductSuccess(product));
            
            //Alerta
            Swal.fire(
                'Correcto',
                'El producto se agrego correctamente',
                'success'
            )
        } catch (error) {
            dispatch(addProductError());

            // Alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intente de nuevo'
            })
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
})

const addProductSuccess = (product) => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product,
})

const addProductError = () => ({
    type: ADD_PRODUCT_ERROR,
})

export function getAllProducts() {
    return async (dispatch) => {
        dispatch(downloadProducts());

        try {
            const response = await AxiosClient.get('/products');
            dispatch(downloadSuccess(response.data));
        } catch (error) {
            dispatch(downloadError());
        }

    }
}

const downloadProducts = () => ({
    type: DOWNLOAD_PRODUCTS_START,
})

const downloadError = () => ({
    type: DOWNLOAD_PRODUCTS_ERROR,
})

const downloadSuccess = (products) => ({
    type: DOWNLOAD_PRODUCT_SUCCESS,
    payload: products,
})

export function deleteProduct(id) {
    return async (dispatch) => {
        dispatch(deleteProductStart());

        try {
            await AxiosClient.delete(`/products/${id}`);
            dispatch(deleteProductSuccess(id));
            Swal.fire(
                'Eliminado!',
                'El elemento a sido eliminado',
                'success'
            )
        } catch (error) {
            dispatch(deleteProductsError());
        }

    }
}

const deleteProductStart = () => ({
    type: DELETE_PRODUCT_START,
});

const deleteProductSuccess = id => ({
    type: DELETE_PRODUCT_SUCCESS,
    payload: id
})

const deleteProductsError = () => ({
    type: DELETE_PRODUCT_ERROR,
})

export function getEditProduct(item) {
    return (dispatch) => {
        dispatch(setEditProduct(item));
    }
}

const setEditProduct = (item) => ({
    type: SELECT_EDIT_PRODUCT,
    payload: item,
})

export function editProduct(product) {

}

const editProductStart = () => ({
    type: EDIT_PRODUCT_START,
})

const editProductSuccess = (product) => ({
    type: EDIT_PRODUCT_SUCCESS,
    payload: product,
})

const editProductError = () => ({
    type: EDIT_PRODUCT_ERROR,
})
