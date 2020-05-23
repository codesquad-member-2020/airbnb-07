import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ModalPortal from 'utils/ModalPortal';
import ChargeRangePicker from './ChargeRangePicker';
import { MAIN } from 'constants/constant';

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 5;
`;

const ChargeFilterModalWrap = styled.div`
    position: absolute;
    top: 52px;
    left: 0;
    width: 400px;
    background-color: #fff;
    z-index: 10;
    overflow: hidden;
    animation-name: chargeModal;
    animation-duration: .2s;
    animation-timing-function:ease-in-out;
    animation-fill-mode: both;
    @keyframes chargeModal {
        0% { height: 0; }
        100% { height: 400px;}
    }
    box-shadow: ${props => props.theme.modalShadow};
    border-radius: 3px;
`;

const ChargeFilterModalContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 35px;
`;

const AverageTitle = styled.h3`
    align-self: flex-start;
    margin-bottom: 140px;
    font-weight: 600;
    font-size: 16px;
`;

const ChargeRangeText = styled.div`
    margin: 50px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .charge-text {
        width: 35%;
        padding: 15px 20px;
        border: 1px solid #c2c2c2;
        border-radius: 10px;
    }
    .charge-desc {
        color: #a2a2a2;
        font-size: 14px;
        margin-bottom: 5px;
    }
    .charge-text-dash {
        width: 30px;
        font-size: 20px;
        text-align: center;
    }
`;

const ChargeFilterModal = ({ handleSetOpen }) => {
    const { min, max } = useSelector(({ charge }) => charge);

    return (
        <>
            <ModalPortal>
                <Background onClick={handleSetOpen} />
            </ModalPortal>
            <ChargeFilterModalWrap>
                <ChargeFilterModalContentWrap>
                    <AverageTitle>평균 1박 요금은 &#8361; 100,000 입니다.</AverageTitle>
                    <ChargeRangePicker />
                    <ChargeRangeText>
                        <div className='charge-text'>
                            <div className='charge-desc'>최저 요금</div>
                            <div>&#8361; {min}</div>
                        </div>
                        <div className='charge-text-dash'>-</div>
                        <div className='charge-text'>
                            <div className='charge-desc'>최고 요금</div>
                            <div>&#8361; {max === MAIN.CHARGE.MAX_CHARGE ? `${max}+` : max}</div>
                        </div>
                    </ChargeRangeText>
                </ChargeFilterModalContentWrap>
            </ChargeFilterModalWrap>
        </>
    )
}

export default ChargeFilterModal
