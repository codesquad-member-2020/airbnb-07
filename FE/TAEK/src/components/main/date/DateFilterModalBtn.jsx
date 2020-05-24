import React from 'react'
import styled from 'styled-components';

const DateFilterModalBtnWrap = styled.div`
    padding: 20px 30px;
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
            pointer-events: auto;
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

const DateFilterModalBtn = ({ handleDateInfoReset, handleDateInfoSave }) => {
    return (
        <DateFilterModalBtnWrap>
            <div className='modal-btn-wrap'>
                <button className='modal-btn reset-btn' onClick={handleDateInfoReset}>지우기</button>
                <button className='modal-btn save-btn' onClick={handleDateInfoSave}>저장</button>
            </div>
        </DateFilterModalBtnWrap>
    )
}

export default DateFilterModalBtn
