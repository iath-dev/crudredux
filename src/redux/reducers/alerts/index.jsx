import { SHOW_MESSAGE, HIDE_MESSAGE } from "../../types";


const initial = {
    msg: null,
}

export default function(state = initial, action) {
    switch (action.type) {
        case SHOW_MESSAGE:
            return {
                msg: action.payload,
            }
        case HIDE_MESSAGE:
            return {
                msg: null
            }
        default:
            return state;
    }
}
