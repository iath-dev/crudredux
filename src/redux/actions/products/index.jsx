import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR, DOWNLOAD_PRODUCTS_START, DOWNLOAD_PRODUCTS_ERROR, DOWNLOAD_PRODUCT_SUCCESS } from "../../types";
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
