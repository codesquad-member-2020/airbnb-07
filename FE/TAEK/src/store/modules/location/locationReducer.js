import { MAIN } from 'constants/constant';
import { CHANGE_LOCATION } from './locationAction';

const initialState = {
    locationInfo: MAIN.LOCATION.DEFAULT_LOCATION,
}

export default function locationReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_LOCATION:
            return {
                ...state,
                locationInfo: action.payload,
            }
        default:
            return state;
    }
}