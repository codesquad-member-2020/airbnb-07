import React from 'react'
import styled from 'styled-components';

const ChargeFilterBtn = styled.div`
    border: 1.19px solid #7f8c8d99;
    box-shadow: ${(props) => props.theme.boxShadow};
    border-radius: 14px;
    color: #484848;
    font-size: 15px;
    font-weight: 600;
    width: 100px;
    line-height: 39.6px;
    text-align: center;
    cursor: pointer;
`;

const ChargeFilter = () => {
    return (
        <ChargeFilterBtn>
            요금
        </ChargeFilterBtn>
    )
}

export default ChargeFilter
