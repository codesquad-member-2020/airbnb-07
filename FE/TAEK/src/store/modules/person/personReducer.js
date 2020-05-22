import { RESET_COUNT, INCREASE_COUNT, DECREASE_COUNT } from './personAction';

const initialState = {
    total: 0,
    adult: 0,
    child: 0,
    baby: 0,
}

export default function date(state = initialState, action) {
    switch (action.type) {
        case RESET_COUNT:
            return {
                ...state,
                ...initialState,
            }
        case INCREASE_COUNT:
            {
                if (state.total + 1 > 8) return { ...state };
                const _state = { ...state }
                const personType = action.payload.personType;
                const updateCount = ++_state[personType];
                _state[personType] = updateCount;
                return {
                    ...state,
                    ..._state,
                    total: state.total + 1,
                }
            }
        case DECREASE_COUNT:
            {
                const _state = { ...state }
                const personType = action.payload.personType;
                const updateCount = --_state[personType];
                if (updateCount < 0) return { ...state };
                _state[personType] = updateCount;
                return {
                    ...state,
                    ..._state,
                    total: state.total - 1,
                }
            }
        default:
            return state
    }
}