import { combineReducers } from 'redux';
import date from './date';
import person from './person';

export default combineReducers({
    date,
    person,
});