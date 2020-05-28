import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { checkIn, checkOut } from 'store/modules/date/dateAction';
import styled from 'styled-components';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import 'moment/locale/ko';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { MAIN } from 'constants/constant';

moment.locale('ko');

const DatePickerWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 5;
    .DateRangePicker {
        width: 100%;
    }
    .DateRangePickerInput {
        display: flex;
        background-color: transparent;
        position: relative;
        #airbnb-end-date {
            display:none;
        }
        .DateInput {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .DateInput_input {
            cursor: pointer;
            opacity: 0;
        }
        .DateInput_fang {
            display: none;
        }
        .DateRangePickerInput_arrow {
            display: none;
        }
    }
    .DayPickerNavigation_button__default {
        border: none;
        outline: none;
    }
    .DayPicker_weekHeader {
        color: #95a5a6;
    }
    .CalendarMonth_table {
        margin-top: 10px;
        tr {
            border: 1px solid #fff;
        }
        td {
            outline: none;
        }
    }
    .CalendarDay__default {
        border: none;
    }
    .CalendarDay {
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
            outline: none;
        }
    }
`;

const DatePicker = ({ dateFilterModalBtn }) => {
    const dispatch = useDispatch();
    const { checkInDate, checkOutDate } = useSelector(({ date }) => date);
    const [focusedInput, setFocusedInput] = useState('startDate');

    const handleDatesChange = ({ startDate, endDate }) => {
        dispatch(checkIn(startDate));
        dispatch(checkOut(endDate));
        if (endDate) setFocusedInput('startDate');
    };

    const handleOnFocusChange = focusedInput => {
        setFocusedInput(focusedInput);
        if (focusedInput === 'endDate' && checkOutDate) dispatch(checkOut(null));
    }

    return (
        <DatePickerWrap>
            <DateRangePicker
                startDateId={MAIN.DATE.START_DATE_ID}
                endDateId={MAIN.DATE.END_DATE_ID}
                startDate={checkInDate}
                endDate={checkOutDate}
                onDatesChange={handleDatesChange}
                focusedInput={focusedInput}
                onFocusChange={handleOnFocusChange}
                calendarInfoPosition='bottom'
                renderCalendarInfo={dateFilterModalBtn}
                hideKeyboardShortcutsPanel readOnly noBorder small keepOpenOnDateSelect
            />
        </DatePickerWrap>
    )
}

export default DatePicker
