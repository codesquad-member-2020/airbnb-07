import { GET_ROOMS, GET_ROOMS_SUCCESS } from './roomsAction';

const initialState = {
    loading: true,
    roomsData: null,
};

export default function roomsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ROOMS:
            return {
                ...state,
                loading: true,
                roomsData: null,
            };
        case GET_ROOMS_SUCCESS:
            return {
                ...state,
                loading: false,
                roomsData: action.payload,
            };
        default:
            return state;
    }
}