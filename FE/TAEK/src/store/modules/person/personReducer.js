import { RESET_COUNT, INCREASE_COUNT, DECREASE_COUNT } from './personAction';

const initialState = {
    totalCount: 0,
    adultCount: 0,
    childCount: 0,
    babyCount: 0,
}

export default function personReducer(state = initialState, action) {
    switch (action.type) {
        case RESET_COUNT:
            return {
                ...state,
                ...initialState,
            }
        case INCREASE_COUNT:
            {
                if (state.totalCount + 1 > 8) return { ...state };
                const _state = { ...state }
                const countType = action.payload.countType;
                const updateCount = ++_state[countType];
                _state[countType] = updateCount;
                return {
                    ...state,
                    ..._state,
                    totalCount: state.totalCount + 1,
                }
            }
        case DECREASE_COUNT:
            {
                const _state = { ...state }
                const countType = action.payload.countType;
                const updateCount = --_state[countType];
                if (updateCount < 0) return { ...state };
                _state[countType] = updateCount;
                return {
                    ...state,
                    ..._state,
                    totalCount: state.totalCount - 1,
                }
            }
        default:
            return state
    }
}