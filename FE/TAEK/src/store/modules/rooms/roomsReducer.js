import { GET_ROOMS, GET_ROOMS_SUCCESS } from './roomsAction';

const initialState = {
    loading: true,
    data: null,
};

export default function roomsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ROOMS:
            return {
                ...state,
                loading: true,
                data: null,
            };
        case GET_ROOMS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        default:
            return state;
    }
}