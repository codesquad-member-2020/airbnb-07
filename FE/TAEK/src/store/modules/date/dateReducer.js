import { SAVE_DATE, RESET_DATE, CHECK_IN, CHECK_OUT } from './dateAction';

const initialState = {
    isSave: false,
    isChange: false,
    checkInDate: null,
    checkInDateInfo: {
        year: null,
        month: null,
        day: null,
    },
    checkOutDate: null,
    checkOutDateInfo: {
        year: null,
        month: null,
        day: null,
    },
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
            {
                let dateInfo = null;
                if (action.payload) dateInfo = {
                    year: action.payload._d.getFullYear(),
                    month: action.payload._d.getMonth() + 1,
                    day: action.payload._d.getDate(),
                }
                return {
                    ...state,
                    checkInDate: action.payload,
                    checkInDateInfo: dateInfo,
                    isSave: false,
                    isChange: true,
                }
            }
        case CHECK_OUT:
            {
                let dateInfo = null;
                if (action.payload) dateInfo = {
                    year: action.payload._d.getFullYear(),
                    month: action.payload._d.getMonth() + 1,
                    day: action.payload._d.getDate(),
                }
                return {
                    ...state,
                    checkOutDate: action.payload,
                    checkOutDateInfo: dateInfo,
                    isSave: false,
                    isChange: true,
                }
            }
        default:
            return state
    }
}