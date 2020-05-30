import { GET_ROOMS_INIT_DATA, GET_ROOMS_FILTER_DATA, GET_ROOMS_SUCCESS, GET_ROOMS_ERROR, SAVE_FILTER_DATA, APPLY_CHARGE_FILTER } from './roomsAction';

const initialState = {
    loading: true,
    roomsData: null,
    filterRoomsData: null,
    filterData: null,
    error: null,
};

export default function roomsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ROOMS_INIT_DATA:
            return {
                ...state,
                loading: true,
            }
        case GET_ROOMS_FILTER_DATA:
            return {
                ...state,
                loading: true,
            }
        case GET_ROOMS_SUCCESS:
            {
                const _prices = action.payload.prices ? action.payload.prices : state.roomsData.prices;
                return {
                    ...state,
                    loading: false,
                    roomsData: {
                        ...action.payload,
                        prices: _prices,
                    },
                    filterRoomsData: action.payload,
                    error: null,
                }
            }
        case GET_ROOMS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case SAVE_FILTER_DATA:
            return {
                ...state,
                filterData: action.payload,
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