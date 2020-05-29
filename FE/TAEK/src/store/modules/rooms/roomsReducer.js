import { GET_ROOMS, GET_ROOMS_SUCCESS, GET_ROOMS_ERROR, APPLY_CHARGE_FILTER } from './roomsAction';

const initialState = {
    loading: true,
    roomsData: null,
    filterRoomsData: null,
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
                filterRoomsData: action.payload,
            }
        case GET_ROOMS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case APPLY_CHARGE_FILTER:
            {
                const min = action.payload.min;
                const max = action.payload.max;
                const _filterRoomsData = state.roomsData.allData.filter(roomData => roomData.currentPrice >= min && roomData.currentPrice <= max);
                return {
                    ...state,
                    filterRoomsData: {
                        ...state.filterRoomsData,
                        allData: _filterRoomsData,
                    },
                }
            }
        default:
            return state
    }
}