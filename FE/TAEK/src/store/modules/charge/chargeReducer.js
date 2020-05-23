import { SAVE_CHARGE, RESET_CHARGE, MIN_CHARGE, MAX_CHARGE } from './chargeAction';
import { MAIN } from 'constants/constant';

const initialState = {
    isSave: false,
    min: MAIN.CHARGE.MIN_CHARGE,
    max: MAIN.CHARGE.MAX_CHARGE,
}

export default function chargeReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_CHARGE:
            return {
                ...state,
                isSave: true,
            }
        case RESET_CHARGE:
            return {
                ...state,
                ...initialState,
            }
        case MIN_CHARGE:
            return {
                ...state,
                min: action.payload,
                isSave: false,
            }
        case MAX_CHARGE:
            return {
                ...state,
                max: action.payload,
                isSave: false,
            }
        default:
            return state
    }
}