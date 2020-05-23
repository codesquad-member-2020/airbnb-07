import { RESET_CHARGE, MIN_CHARGE, MAX_CHARGE } from './chargeAction';
import { MAIN } from 'constants/constant';

const initialState = {
    min: MAIN.CHARGE.MIN_CHARGE,
    max: MAIN.CHARGE.MAX_CHARGE,
}

export default function chargeReducer(state = initialState, action) {
    switch (action.type) {
        case RESET_CHARGE:
            return {
                ...state,
                ...initialState,
            }
        case MIN_CHARGE:

            return {
                ...state,
                min: action.payload,
            }
        case MAX_CHARGE:
            return {
                ...state,
                max: action.payload,
            }
        default:
            return state
    }
}