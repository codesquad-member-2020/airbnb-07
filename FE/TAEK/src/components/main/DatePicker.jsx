import React, { useState } from 'react'
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import 'moment/locale/ko';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const DatePicker = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);
    const handleDatesChange = ({ startDate, endDate }) => {
        setStartDate(startDate);
        setEndDate(endDate);
    };

    moment.locale('ko');

    return (
        <DateRangePicker
            startDate={startDate}
            startDateId="tata-start-date"
            endDate={endDate}
            endDateId="tata-end-date"
            onDatesChange={handleDatesChange}
            focusedInput={focusedInput}
            onFocusChange={focusedInput => setFocusedInput(focusedInput)}
        />
    )
}

export default DatePicker
