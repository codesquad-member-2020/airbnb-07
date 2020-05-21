import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ModalPortal from 'utils/ModalPortal';
import { resetCount, increaseCount, decreaseCount } from 'store/modules/person';

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 5;
`;

const PersonFilterModalWrap = styled.div`
    position: absolute;
    top: 52px;
    left: 0;
    width: 350px;
    background-color: #fff;
    z-index: 10;
    animation-name: modal;
    animation-duration: .2s;
    animation-timing-function:ease-in-out;
    animation-fill-mode: both;
    @keyframes modal {
        0% { height: 0; }
        100% { height: 300px;}
    }
    box-shadow: ${props => props.theme.modalShadow};
    border-radius: 3px;

    & .modal-item-wrap {
        padding : 20px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & .person-type {
            font-size: 16px;
            font-weight: 600;
        }
        & .person-age {
            margin-top: 7px;
            font-size: 14px;
        }
        & .person-count {
            margin: 0 20px;
            font-size: 18px;
            font-weight: 600;
        }
        & .person-count-btn {
            border-radius: 50%;
            background-color: #fff;
            outline: none;
            border: 1.19px solid #7f8c8d;
            width: 30px;
            height: 30px;
            padding: 0;
            margin: 0;
            font-size: 10px;
            cursor: pointer;
            box-shadow: ${(props) => props.theme.boxShadow};
        }
        & .modal-btn {
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


const PersonFilterModal = ({ handleSetOpen }) => {
    const dispatch = useDispatch();
    const { adult, child, baby } = useSelector(({ person }) => person);
    const handlePersonCountUp = (personType) => dispatch(increaseCount(personType));
    const handlePersonCountDown = (personType) => dispatch(decreaseCount(personType));
    const handlePersonCountReset = () => dispatch(resetCount());

    return (
        <>
            <ModalPortal>
                <Background onClick={handleSetOpen} />
            </ModalPortal>
            <PersonFilterModalWrap>
                <div className='modal-item-wrap'>
                    <div>
                        <div className='person-type'>어른</div>
                        <div className='person-age'>만 13세 이상</div>
                    </div>
                    <div>
                        <button className='person-count-btn' onClick={() => handlePersonCountDown({ personType: 'adult' })}>➖</button>
                        <span className='person-count'>{adult}</span>
                        <button className='person-count-btn' onClick={() => handlePersonCountUp({ personType: 'adult' })}>➕</button>
                    </div>
                </div>
                <div className='modal-item-wrap'>
                    <div>
                        <div className='person-type'>어린이</div>
                        <div className='person-age'>2 ~ 12세</div>
                    </div>
                    <div>
                        <button className='person-count-btn' onClick={() => handlePersonCountDown({ personType: 'child' })}>➖</button>
                        <span className='person-count'>{child}</span>
                        <button className='person-count-btn' onClick={() => handlePersonCountUp({ personType: 'child' })}>➕</button>
                    </div>
                </div>
                <div className='modal-item-wrap'>
                    <div>
                        <div className='person-type'>유아</div>
                        <div className='person-age'>2세 미만</div>
                    </div>
                    <div>
                        <button className='person-count-btn' onClick={() => handlePersonCountDown({ personType: 'baby' })}>➖</button>
                        <span className='person-count'>{baby}</span>
                        <button className='person-count-btn' onClick={() => handlePersonCountUp({ personType: 'baby' })}>➕</button>
                    </div>
                </div>
                <div className='modal-item-wrap'>
                    <button className='modal-btn reset-btn' onClick={handlePersonCountReset}>지우기</button>
                    <button className='modal-btn save-btn' onClick={handleSetOpen}>저장</button>
                </div>
            </PersonFilterModalWrap>
        </>
    )
}

export default PersonFilterModal
