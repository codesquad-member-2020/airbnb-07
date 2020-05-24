import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveDate, resetDate } from 'store/modules/date/dateAction';
import styled from 'styled-components';
import ModalPortal from 'utils/ModalPortal';
import DatePicker from './DatePicker';
import DateFilterModalBtn from './DateFilterModalBtn';

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 5;
`;

const DateFilterModalWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    .DateRangePicker_picker {
        font-weight: 600;
        overflow: hidden;
        animation-name: dateModal;
        animation-duration: .25s;
        animation-timing-function:ease-in-out;
        @keyframes dateModal {
            0% { height: 0; }
            100% { height: 400px;}
        }
        box-shadow: ${props => props.theme.modalShadow};
        border-radius: 3px;
    }
    .DayPicker__withBorder {
        box-shadow: none;
    }
`;

const DateFilterModal = ({ handleSetOpen }) => {
    const dispatch = useDispatch();
    const { isChange } = useSelector(({ date }) => date);

    const handleDateInfoReset = () => dispatch(resetDate());
    const handleDateInfoSave = () => {
        if (isChange) dispatch(saveDate());
        handleSetOpen();
    }

    const dateFilterModalBtn = () => <DateFilterModalBtn {...{ handleDateInfoReset, handleDateInfoSave }} />;

    return (
        <>
            <ModalPortal>
                <Background onClick={handleDateInfoSave} />
            </ModalPortal>
            <DateFilterModalWrap>
                <DatePicker {...{ dateFilterModalBtn }} />
            </DateFilterModalWrap>
        </>
    )
}

export default DateFilterModal
