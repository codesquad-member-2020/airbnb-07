import {
    MODAL_TOGGLE,
    SELECTED_ROOM,
    GET_RESERVATION_INFO_DATA,
    GET_RESERVATION_INFO_SUCCESS,
    GET_RESERVATION_INFO_ERROR
} from './reservationAction';

const initialState = {
    isModalOpen: false,
    roomData: null,
    loading: true,
    reservationData: null,
    error: null,
}

export default function reservationReducer(state = initialState, action) {
    switch (action.type) {
        case MODAL_TOGGLE:
            const _isModalOpen = state.isModalOpen;
            return {
                ...state,
                isModalOpen: !_isModalOpen,
            }
        case SELECTED_ROOM:
            return {
                ...state,
                roomData: action.payload,
            }
        case GET_RESERVATION_INFO_DATA:
            return {
                ...state,
                loading: true,
            }
        case GET_RESERVATION_INFO_SUCCESS:
            {
                return {
                    ...state,
                    loading: false,
                    reservationData: action.payload,
                    error: null,
                }
            }
        case GET_RESERVATION_INFO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}