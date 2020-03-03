import { combineReducers } from 'redux';
import AlertReducer from './alerts';
import ProductsReducer from './products';

export default combineReducers({
    products: ProductsReducer,
    alert: AlertReducer,
})
