const CHECK_IN = 'date/CHECK_IN';
const CHECK_OUT = 'date/CHECK_OUT';

export const checkIn = (date) => ({ type: CHECK_IN, payload: date });
export const checkOut = (date) => ({ type: CHECK_OUT, payload: date });

const initialState = {
    checkInDate: null,
    checkOutDate: null,
}

// react-dates library api 확인 후 보완 할 것 
export default function date(state = initialState, action) {
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
            return {
                ...state
            }
    }
}