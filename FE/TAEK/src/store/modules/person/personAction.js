const SAVE_COUNT = 'person/SAVE_COUNT';
const RESET_COUNT = 'person/RESET_COUNT';
const INCREASE_COUNT = 'person/INCREASE';
const DECREASE_COUNT = 'person/DECREASE_COUNT';

const saveCount = () => ({ type: SAVE_COUNT });
const resetCount = () => ({ type: RESET_COUNT });
const increaseCount = (countType) => ({ type: INCREASE_COUNT, payload: countType });
const decreaseCount = (countType) => ({ type: DECREASE_COUNT, payload: countType });

export {
    SAVE_COUNT,
    RESET_COUNT,
    INCREASE_COUNT,
    DECREASE_COUNT,
    saveCount,
    resetCount,
    increaseCount,
    decreaseCount,
}