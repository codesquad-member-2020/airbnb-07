import { GET_ROOMS, GET_ROOMS_SUCCESS, GET_ROOMS_ERROR } from './roomsAction';

const initialState = {
    loading: true,
    roomsData: null,
    error: null,
};

export default function roomsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ROOMS:
            return {
                ...state,
                loading: true,
            }
        case GET_ROOMS_SUCCESS:
            return {
                ...state,
                loading: false,
                roomsData: action.payload,
            }
        case GET_ROOMS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}