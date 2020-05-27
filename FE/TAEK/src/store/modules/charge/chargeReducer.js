import { SAVE_CHARGE, RESET_CHARGE, MIN_CHARGE, MAX_CHARGE } from './chargeAction';
import { MAIN } from 'constants/constant';

const initialState = {
    isSave: false,
    isChange: false,
    min: MAIN.CHARGE.MIN_CHARGE,
    max: MAIN.CHARGE.MAX_CHARGE,
}

export default function chargeReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_CHARGE:
            return {
                ...state,
                isSave: true,
                isChange: false,
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
                isChange: true,
            }
        case MAX_CHARGE:
            return {
                ...state,
                max: action.payload,
                isSave: false,
                isChange: true,
            }
        default:
            return state
    }
}