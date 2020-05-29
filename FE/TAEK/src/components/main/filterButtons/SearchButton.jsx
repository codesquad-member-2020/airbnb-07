import React from 'react'
import styled from 'styled-components';

const SearchButtonWrap = styled.div`
    border: 1.19px solid #7f8c8d99;
    background-color: #000;
    color: #fff;
    box-shadow: ${(props) => props.theme.boxShadow};
    border-radius: 15px;
    font-size: 14px;
    font-weight: 600;
    padding: 0 25px;
    height: 100%;
    line-height: 39.6px;
    cursor: pointer;
    box-sizing: border-box;
    width: 100px;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const SearchButton = () => {
    return (
        <SearchButtonWrap>
            검 색
        </SearchButtonWrap>
    )
}

export default SearchButton
