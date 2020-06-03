import { LOGIN, LOGOUT } from './loginAction';

const initialState = {
    bLogin: false,
    token: null,
}

export default function locationReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                bLogin: true,
                token: action.payload,
            }
        case LOGOUT:
            return {
                ...state,
                bLogin: false,
            }
        default:
            return state;
    }
}