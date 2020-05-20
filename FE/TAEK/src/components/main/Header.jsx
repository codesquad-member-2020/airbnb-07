import React from 'react'
import styled from 'styled-components';

const HeaderWrap = styled.div`
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #c2c2c2;
    font-size: 30px;
    text-align: center;
`;

const Header = () => {
    return (
        <HeaderWrap>
            언젠간 만들 헤더영역
        </HeaderWrap>
    )
}

export default Header
