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
            return {
                ...state,
                checkInDate: action.payload,
                checkInDateInfo: getDateInfo(action.payload),
                isSave: false,
                isChange: true,
            }
        case CHECK_OUT:
            return {
                ...state,
                checkOutDate: action.payload,
                checkOutDateInfo: getDateInfo(action.payload),
                isSave: false,
                isChange: true,
            }
        default:
            return state
    }
}

function getDateInfo(dateData) {
    let dateInfo = null;
    if (dateData) dateInfo = {
        year: dateData._d.getFullYear(),
        month: dateData._d.getMonth() + 1,
        day: dateData._d.getDate(),
    }
    return dateInfo
}