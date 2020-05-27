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
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;
    overflow: hidden;
    width: 100px;
    text-align: center;
`;

const SearchButton = () => {
    return (
        <SearchButtonWrap>
            검 색
        </SearchButtonWrap>
    )
}

export default SearchButton
