import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveCharge, resetCharge } from 'store/modules/charge/chargeAction';
import styled from 'styled-components';
import ModalPortal from 'utils/ModalPortal';
import ChargePicker from './ChargePicker';
import { MAIN, COMMON } from 'constants/constant';
import { numberComma, getAverageCharge } from 'utils/util';

const Background = styled.div`
    position: fixed;
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
        100% { height: 370px;}
    }
    box-shadow: ${props => props.theme.modalShadow};
    border-radius: 3px;
`;

const ChargeFilterModalContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    .modal-btn-wrap {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .modal-btn {
            font-size: 16px;
            font-weight: 600;
            padding: 0;
            margin: 0;
            outline: none;
            border: 1px solid #00000080;
            border-radius: 7px;
            padding: 5px 10px;
            cursor: pointer;
            width: 110px;
            height: 35px;
            box-shadow: ${(props) => props.theme.boxShadow};
            font-family: 'Noto Sans KR', sans-serif;
            &.reset-btn {
                color: #000;
                background-color: #fff;
            }
            &.save-btn {
                color: #fff;
                background-color: #000;
            }
        }
    }
`;

const AverageTitle = styled.h3`
    align-self: flex-start;
    margin-bottom: 120px;
    font-weight: 600;
    font-size: 16px;
`;

const ChargeRangeText = styled.div`
    margin: 40px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .charge-text {
        width: 35%;
        padding: 15px 20px;
        border: 1px solid #c2c2c2;
        border-radius: 10px;
        box-shadow: ${(props) => props.theme.boxShadow};
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
        color: #c2c2c2;
    }
`;

const ChargeFilterModal = ({ handleSetOpen }) => {
    const dispatch = useDispatch();
    const { min, max, isChange } = useSelector(({ charge }) => charge);
    const { loading, roomsData, error } = useSelector(({ rooms }) => rooms);

    let prices;
    if (roomsData) prices = roomsData.prices;

    const handleChargeInfoReset = () => dispatch(resetCharge());
    const handleChargeInfoSave = () => {
        if (isChange) dispatch(saveCharge());
        handleSetOpen();
    }

    return (
        <>
            <ModalPortal>
                <Background onClick={handleChargeInfoSave} />
            </ModalPortal>
            <ChargeFilterModalWrap>
                <ChargeFilterModalContentWrap>
                    {(loading || error) ?
                        <span>{COMMON.LOADING}</span> :
                        <>
                            <AverageTitle>평균 1박 요금은 &#8361; {numberComma(getAverageCharge(prices))} 입니다.</AverageTitle>
                            <ChargePicker {...{ prices }} />
                            <ChargeRangeText>
                                <div className='charge-text'>
                                    <div className='charge-desc'>최저 요금</div>
                                    <div>&#8361; {numberComma(min)}</div>
                                </div>
                                <div className='charge-text-dash'>-</div>
                                <div className='charge-text'>
                                    <div className='charge-desc'>최고 요금</div>
                                    <div>&#8361; {max === MAIN.CHARGE.MAX_CHARGE ? `${numberComma(max)}+` : numberComma(max)}</div>
                                </div>
                            </ChargeRangeText>
                            <div className='modal-btn-wrap'>
                                <button className='modal-btn reset-btn' onClick={handleChargeInfoReset}>지우기</button>
                                <button className='modal-btn save-btn' onClick={handleChargeInfoSave}>저장</button>
                            </div>
                        </>}
                </ChargeFilterModalContentWrap>
            </ChargeFilterModalWrap>
        </>
    )
}

export default ChargeFilterModal
