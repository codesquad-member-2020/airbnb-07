import { CHECK_IN, CHECK_OUT } from './dateAction';

const initialState = {
    checkInDate: null,
    checkOutDate: null,
}

export default function dateReducer(state = initialState, action) {
    switch (action.type) {
        case CHECK_IN:
            return {
                ...state,
                checkInDate: action.payload,
            }
        case CHECK_OUT:
            return {
                ...state,
                checkOutDate: action.payload,
            }
        default:
            return state
    }
}