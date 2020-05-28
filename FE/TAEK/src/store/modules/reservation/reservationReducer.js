import { MODAL_TOGGLE, SELECTED_ROOM } from './reservationAction';

const initialState = {
    isOpen: false,
    roomData: null,
}

export default function reservationReducer(state = initialState, action) {
    switch (action.type) {
        case MODAL_TOGGLE:
            const _isOpen = state.isOpen;
            return {
                ...state,
                isOpen: !_isOpen,
            }
        case SELECTED_ROOM:
            return {
                ...state,
                roomData: action.payload,
            }
        default:
            return state
    }
}