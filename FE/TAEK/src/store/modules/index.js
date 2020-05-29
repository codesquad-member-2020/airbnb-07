import { combineReducers } from 'redux';
import date from './date/dateReducer';
import person from './person/personReducer';
import charge from './charge/chargeReducer';
import rooms from './rooms/roomsReducer';
import reservation from './reservation/reservationReducer';

export default combineReducers({
    date,
    person,
    charge,
    rooms,
    reservation,
});