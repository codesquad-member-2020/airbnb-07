import { combineReducers } from 'redux';
import date from './date/dateReducer';
import person from './person/personReducer';

export default combineReducers({
    date,
    person,
});