import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ModalPortal from 'utils/ModalPortal';
import PersonFilterModalItem from './PersonFilterModalItem';
import { resetCount } from 'store/modules/person/personAction';
import { MAIN } from 'constants/constant';

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
    overflow: hidden;
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

    .modal-item-wrap {
        padding : 20px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .person-type {
            font-size: 16px;
            font-weight: 600;
        }
        .person-age {
            margin-top: 7px;
            font-size: 14px;
        }
        .person-count {
            margin: 0 20px;
            font-size: 18px;
            font-weight: 600;
        }
        .person-count-btn {
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

const PersonFilterModal = ({ handleSetOpen }) => {
    const dispatch = useDispatch();
    const { adult, child, baby } = useSelector(({ person }) => person);
    const handlePersonCountReset = () => dispatch(resetCount());

    return (
        <>
            <ModalPortal>
                <Background onClick={handleSetOpen} />
            </ModalPortal>
            <PersonFilterModalWrap>
                <PersonFilterModalItem
                    typeText={MAIN.PERSON.ADULT_TEXT}
                    ageText={MAIN.PERSON.ADULT_AGE_TEXT}
                    countText={adult}
                    personType={{ personType: 'adult' }}
                />
                <PersonFilterModalItem
                    typeText={MAIN.PERSON.CHILD_TEXT}
                    ageText={MAIN.PERSON.CHILD_AGE_TEXT}
                    countText={child}
                    personType={{ personType: 'child' }}
                />
                <PersonFilterModalItem
                    typeText={MAIN.PERSON.BABY_TEXT}
                    ageText={MAIN.PERSON.BABY_AGE_TEXT}
                    countText={baby}
                    personType={{ personType: 'baby' }}
                />
                <div className='modal-item-wrap'>
                    <button className='modal-btn reset-btn' onClick={handlePersonCountReset}>지우기</button>
                    <button className='modal-btn save-btn' onClick={handleSetOpen}>저장</button>
                </div>
            </PersonFilterModalWrap>
        </>
    )
}

export default PersonFilterModal