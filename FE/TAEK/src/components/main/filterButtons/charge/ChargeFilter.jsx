import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ChargeFilterModal from './ChargeFilterModal';
import { numberComma } from 'utils/util';
import { MAIN } from 'constants/constant';

const ChargeFilterWrap = styled.div`
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
`;

const ChargeFilterBtn = styled.div`
    border: 1.19px solid #7f8c8d99;
    box-shadow: ${(props) => props.theme.boxShadow};
    border-radius: 15px;
    font-size: 14px;
    font-weight: 600;
    padding: 0 25px;
    height: 100%;
    line-height: 39.6px;
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;
    overflow: hidden;
`;

const ChargeFilter = () => {
    const [isOpen, setOpen] = useState(false);
    const [prevChargeBtnText, setPrevChargeBtnText] = useState('');
    const { isSave, min, max } = useSelector(({ charge }) => charge);

    const handleSetOpen = () => setOpen(!isOpen);

    const minText = numberComma(min);
    const maxText = max === MAIN.CHARGE.MAX_CHARGE ? '' : numberComma(max);
    const chargeBtnText = isSave ? <span>￦ {minText}{maxText ? ` - ￦ ${maxText}` : '+'}</span> : '요금';

    useEffect(() => {
        setPrevChargeBtnText(chargeBtnText);
    }, [isOpen]);

    return (
        <ChargeFilterWrap>
            {(isOpen || isSave) && <HighlightBorder />}
            <ChargeFilterBtn onClick={handleSetOpen}>
                {isSave ? chargeBtnText : prevChargeBtnText}
            </ChargeFilterBtn>
            {isOpen && <ChargeFilterModal {...{ handleSetOpen }} />}
        </ChargeFilterWrap>
    )
}

export default ChargeFilter
