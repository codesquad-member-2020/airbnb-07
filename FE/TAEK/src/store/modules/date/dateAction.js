const CHECK_IN = 'date/CHECK_IN';
const CHECK_OUT = 'date/CHECK_OUT';

const checkIn = (date) => ({ type: CHECK_IN, payload: date });
const checkOut = (date) => ({ type: CHECK_OUT, payload: date });

export {
    CHECK_IN,
    CHECK_OUT,
    checkIn,
    checkOut,
}