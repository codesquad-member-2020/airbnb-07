import { CHECK_IN, CHECK_OUT } from './dateAction';

const initialState = {
    checkInDate: null,
    checkOutDate: null,
}

// react-dates library api 확인 후 보완 할 것 
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