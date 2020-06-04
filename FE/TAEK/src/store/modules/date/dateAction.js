const SAVE_DATE = 'date/SAVE_DATE';
const RESET_DATE = 'date/RESET_DATE';
const CHECK_IN = 'date/CHECK_IN';
const CHECK_OUT = 'date/CHECK_OUT';

const saveDate = () => ({ type: SAVE_DATE });
const resetDate = () => ({ type: RESET_DATE });
const checkIn = (date) => ({ type: CHECK_IN, payload: date });
const checkOut = (date) => ({ type: CHECK_OUT, payload: date });

export {
    SAVE_DATE,
    RESET_DATE,
    CHECK_IN,
    CHECK_OUT,
    saveDate,
    resetDate,
    checkIn,
    checkOut,
}