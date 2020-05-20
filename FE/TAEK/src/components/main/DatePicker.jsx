import React, { useState } from 'react'
import "react-dates/initialize";
import { DateRangePicker } from 'react-dates';
import "react-dates/lib/css/_datepicker.css";

const DatePicker = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);
    const handleDatesChange = ({ startDate, endDate }) => {
        setStartDate(startDate);
        setEndDate(endDate);
    };

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
