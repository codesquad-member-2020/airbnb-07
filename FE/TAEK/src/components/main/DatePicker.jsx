import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import 'moment/locale/ko';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { checkIn, checkOut } from 'store/modules/date';

const DatePickerWrap = styled.div`
    & .CalendarMonth_table {
        margin-top: 10px;
        & tr {
            border: 1px solid #fff;
        }
    }
    & .CalendarDay__default {
        border: none;
    }
    & .CalendarDay {
        vertical-align: middle;
        position: relative;
        z-index: 0;
        &.CalendarDay__selected {
            background-color: #fff;
            &::before {
                content: '';
                width: 50%;
                height: 100%;
                background-color: #ecf0f1;
                position: absolute;
                top: 0;
                z-index: -2;
            }
            &::after {
                content: '';
                width: 100%;
                height: 100%;
                background-color: #000;
                border-radius: 50%;
                position: absolute;
                top: 0;
                left: 0;
                z-index: -1;
            }
        }
        &.CalendarDay__selected_start {
            &::before {
                right: 0;
            }
        }
        &.CalendarDay__selected_end {
            &::before {
                
                left: 0;
            }
        }
        &.CalendarDay__hovered_span, &.CalendarDay__selected_span {
            background-color: #ecf0f1;
            color: #484848;
        }
    }
    & .DayPickerKeyboardShortcuts_show__bottomRight {
        display: none;
    }
`;

const DatePicker = () => {
    moment.locale('ko');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);
    const handleDatesChange = ({ startDate, endDate }) => {
        setStartDate(startDate);
        setEndDate(endDate);
    };

    return (
        <DatePickerWrap>
            <DateRangePicker
                startDate={startDate}
                startDateId="airbnb-start-date"
                endDate={endDate}
                endDateId="airbnb-end-date"
                onDatesChange={handleDatesChange}
                focusedInput={focusedInput}
                onFocusChange={focusedInput => setFocusedInput(focusedInput)}
            />
        </DatePickerWrap>
    )
}

export default DatePicker
