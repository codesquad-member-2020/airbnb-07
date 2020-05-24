import React, { useState } from 'react'
import styled from 'styled-components';
import DatePicker from './DatePicker';

const DateFilterWrap = styled.div`
    position: relative;
    color: #484848;
`;

const HighlightBorder = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2.25px solid #000;
    border-radius: 15px;
    pointer-events: none;
    box-sizing: border-box;
    z-index: 10;
`;

const DateFilterBtn = styled.div`
    position: relative;
    border: 1.19px solid #7f8c8d99;
    box-shadow: ${(props) => props.theme.boxShadow};
    border-radius: 15px;
    font-size: 14px;
    font-weight: 600;
    padding: 0 25px;
    width: 100%;
    height: 100%;
    line-height: 39.6px;
    text-align: center;
    box-sizing: border-box;
`;

const DateFilter = () => {
    const [isOpen, setOpen] = useState(false);

    const handleSetOpen = () => setOpen(!isOpen);

    return (
        <DateFilterWrap>
            {isOpen && <HighlightBorder />}
            <DateFilterBtn onClick={handleSetOpen}>
                날짜
                <DatePicker />
            </DateFilterBtn>
        </DateFilterWrap>
    )
}

export default DateFilter
