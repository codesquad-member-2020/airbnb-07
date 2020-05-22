const RESET_COUNT = 'person/RESET_COUNT';
const INCREASE_COUNT = 'person/INCREASE';
const DECREASE_COUNT = 'person/DECREASE_COUNT';

export const resetCount = () => ({ type: RESET_COUNT });
export const increaseCount = (data) => ({ type: INCREASE_COUNT, payload: data });
export const decreaseCount = (data) => ({ type: DECREASE_COUNT, payload: data });

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
            return { ...state }
    }
}