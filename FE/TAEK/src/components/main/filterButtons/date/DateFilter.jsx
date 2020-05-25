import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import DateFilterModal from './DateFilterModal';

const DateFilterWrap = styled.div`
    position: relative;
    color: #484848;
    cursor: pointer;
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
    overflow: hidden;
`;

const DateFilter = () => {
    const [isOpen, setOpen] = useState(false);
    const [prevDateBtnText, setPrevDateBtnText] = useState('');
    const { isSave, checkInDate, checkOutDate } = useSelector(({ date }) => date);

    const handleSetOpen = () => setOpen(!isOpen);

    const checkIn = checkInDate && `${checkInDate._d.getMonth() + 1}월 ${checkInDate._d.getDate()}일`;
    const checkOut = checkOutDate && `${checkOutDate._d.getMonth() + 1}월 ${checkOutDate._d.getDate()}일`;
    const dateBtnText = isSave ? <span>{checkIn}{checkOut ? ` - ${checkOut}` : ''}</span> : '날짜';

    useEffect(() => {
        setPrevDateBtnText(dateBtnText);
    }, [isOpen]);

    return (
        <DateFilterWrap>
            {(isOpen || isSave) && <HighlightBorder />}
            <DateFilterBtn onClick={handleSetOpen}>
                {isSave ? dateBtnText : prevDateBtnText}
            </DateFilterBtn>
            {isOpen && <DateFilterModal {...{ handleSetOpen }} />}
        </DateFilterWrap>
    )
}

export default DateFilter
