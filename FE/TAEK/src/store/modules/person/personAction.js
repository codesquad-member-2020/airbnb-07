const RESET_COUNT = 'person/RESET_COUNT';
const INCREASE_COUNT = 'person/INCREASE';
const DECREASE_COUNT = 'person/DECREASE_COUNT';

const resetCount = () => ({ type: RESET_COUNT });
const increaseCount = (data) => ({ type: INCREASE_COUNT, payload: data });
const decreaseCount = (data) => ({ type: DECREASE_COUNT, payload: data });

export {
    RESET_COUNT,
    INCREASE_COUNT,
    DECREASE_COUNT,
    resetCount,
    increaseCount,
    decreaseCount,
}