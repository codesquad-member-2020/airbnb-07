import React from 'react'
import styled from 'styled-components';

const ChargeFilterWrap = styled.div`
    position: relative;
    color: #484848;
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
`;

const ChargeFilter = () => {
    return (
        <ChargeFilterWrap>
            <ChargeFilterBtn>요금</ChargeFilterBtn>
        </ChargeFilterWrap>
    )
}

export default ChargeFilter
