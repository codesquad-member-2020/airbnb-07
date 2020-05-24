import { SAVE_DATE, RESET_DATE, CHECK_IN, CHECK_OUT } from './dateAction';

const initialState = {
    isSave: false,
    isChange: false,
    checkInDate: null,
    checkOutDate: null,
}

export default function dateReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_DATE:
            return {
                ...state,
                isSave: true,
                isChange: false,
            }
        case RESET_DATE:
            return {
                ...state,
                ...initialState,
            }
        case CHECK_IN:
            return {
                ...state,
                checkInDate: action.payload,
                isSave: false,
                isChange: true,
            }
        case CHECK_OUT:
            return {
                ...state,
                checkOutDate: action.payload,
                isSave: false,
                isChange: true,
            }
        default:
            return state
    }
}