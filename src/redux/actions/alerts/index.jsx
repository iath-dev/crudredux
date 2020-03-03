import { SHOW_MESSAGE, HIDE_MESSAGE } from "../../types";

/**
 * Acción para mostrar alertas
 * @param {string} text 
 * @param {string} classes 
 */
export function showAlert(text, classes) {
    return (dispatch) => {
        dispatch(showAlertOn({ text, classes }));

        setTimeout(() => {
            dispatch(hideAlert());
        }, 3000);

    }
}

const showAlertOn = (msg) => ({
    type: SHOW_MESSAGE,
    payload: msg,
})

const hideAlert = () => ({
    type: HIDE_MESSAGE,
})
