import React, { useState } from 'react'
import styled from 'styled-components';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import 'moment/locale/ko';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { MAIN } from 'constants/constant';

const DatePickerWrap = styled.div`
    .DateRangePickerInput {
        border: 1.19px solid #7f8c8d99;
        box-shadow: ${(props) => props.theme.boxShadow};
        border-radius: 15px;
        .DateInput_input__focused {
            border-bottom: none;
        }
        .DateInput {
            background: none;
        }
        input {
            border: none;
            background-color: transparent;
            cursor: pointer;
        }
        .DateInput_input {
            padding: 10px 0;
            text-align: center;
            font-family: 'Noto Sans KR', sans-serif;
            font-weight: 600;
            font-size: 14px;
            &::placeholder {
                color: #484848;
            }
        }
        .DateRangePickerInput_arrow {
            position: absolute;
            top: 50%;
            left: 50%;
            display: inline-block;
            vertical-align: middle;
            color: #484848;
            transform: translate(-50%, -50%);
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
                displayFormat={MAIN.DATE.DATE_FORMAT}
                startDatePlaceholderText={MAIN.DATE.START_DATE_TEXT}
                endDatePlaceholderText={MAIN.DATE.END_DATE_TEXT}
                startDate={startDate}
                startDateId={MAIN.DATE.START_DATE_ID}
                endDate={endDate}
                endDateId={MAIN.DATE.END_DATE_ID}
                onDatesChange={handleDatesChange}
                focusedInput={focusedInput}
                onFocusChange={focusedInput => setFocusedInput(focusedInput)}
                hideKeyboardShortcutsPanel readOnly noBorder small
            />
        </DatePickerWrap>
    )
}

export default DatePicker
