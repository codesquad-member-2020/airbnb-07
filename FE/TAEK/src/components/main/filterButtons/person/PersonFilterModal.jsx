import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ModalPortal from 'utils/ModalPortal';
import PersonFilterModalItem from './PersonFilterModalItem';
import { saveCount, resetCount } from 'store/modules/person/personAction';
import { MAIN } from 'constants/constant';

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
`;

const PersonFilterModalWrap = styled.div`
    position: absolute;
    top: 52px;
    left: 0;
    width: 370px;
    background-color: #fff;
    z-index: 10;
    overflow: hidden;
    animation-name: personModal;
    animation-duration: .2s;
    animation-timing-function:ease-in-out;
    animation-fill-mode: both;
    @keyframes personModal {
        0% { height: 0; }
        100% { height: 305px;}
    }
    box-shadow: ${props => props.theme.modalShadow};
    border-radius: 3px;
    .modal-item-wrap {
        padding : 20px 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
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
            :disabled {
                box-shadow: none;
                background-color: #7f8c8d50;
                cursor: auto;
            }
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
    const { isChange, totalCount, adultCount, childCount, babyCount } = useSelector(({ person }) => person);

    const handlePersonCountReset = () => dispatch(resetCount());
    const handlePersonCountSave = () => {
        if (isChange) dispatch(saveCount());
        handleSetOpen();
    }

    return (
        <>
            <ModalPortal>
                <Background onClick={handlePersonCountSave} />
            </ModalPortal>
            <PersonFilterModalWrap>
                <PersonFilterModalItem
                    totalCount={totalCount}
                    typeText={MAIN.PERSON.ADULT.TEXT}
                    ageText={MAIN.PERSON.ADULT.DESC}
                    countType={MAIN.PERSON.ADULT.COUNT_TYPE}
                    countText={adultCount}
                />
                <PersonFilterModalItem
                    totalCount={totalCount}
                    typeText={MAIN.PERSON.CHILD.TEXT}
                    ageText={MAIN.PERSON.CHILD.DESC}
                    countType={MAIN.PERSON.CHILD.COUNT_TYPE}
                    countText={childCount}
                />
                <PersonFilterModalItem
                    totalCount={totalCount}
                    typeText={MAIN.PERSON.BABY.TEXT}
                    ageText={MAIN.PERSON.BABY.DESC}
                    countType={MAIN.PERSON.BABY.COUNT_TYPE}
                    countText={babyCount}
                />
                <div className='modal-item-wrap'>
                    <button className='modal-btn reset-btn' onClick={handlePersonCountReset}>지우기</button>
                    <button className='modal-btn save-btn' onClick={handlePersonCountSave}>저장</button>
                </div>
            </PersonFilterModalWrap>
        </>
    )
}

export default PersonFilterModal
