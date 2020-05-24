import React from 'react'
import styled from 'styled-components';
import ModalPortal from 'utils/ModalPortal';
import DatePicker from './DatePicker';

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
        overflow: hidden;
        animation-name: dateModal;
        animation-duration: .25s;
        animation-timing-function:ease-in-out;
        animation-fill-mode: both;
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
    return (
        <>
            <ModalPortal>
                <Background onClick={handleSetOpen} />
            </ModalPortal>
            <DateFilterModalWrap>
                <DatePicker />
            </DateFilterModalWrap>
        </>
    )
}

export default DateFilterModal
