import { combineReducers } from 'redux';
import date from './date/dateReducer';
import person from './person/personReducer';
import charge from './charge/chargeReducer';

export default combineReducers({
    date,
    person,
    charge,
});