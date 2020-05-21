import React from 'react'
import styled from 'styled-components';
import mainAirbnbLogo from 'public/images/main-airbnb-logo.png';

const MainHeaderWrap = styled.div`
    box-shadow: 0 4px 6px #32325d1c, 0 1px 3px #00000014;
    width: 100%;
    height: 80px;
    line-height: 80px;
    background-color: #fff;
    padding: 0 10%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    & .main-airbnb-logo {
        cursor: pointer;
    }
    & .main-header-menu {
        display: flex;
        font-size: 15px;
        font-weight: 600;
        color: #484848;
        & li {
            margin-right: 20px;
            cursor: pointer;
            &:last-child {
                margin-right: 0;
            }
        }
    }
`;

const MainHeader = () => {
    return (
        <MainHeaderWrap>
            <img className='main-airbnb-logo' src={mainAirbnbLogo} alt="airbnb-logo" />
            <ul className='main-header-menu'>
                <li>숙소 호스트 되기</li>
                <li>체험 호스팅하기</li>
                <li>도움말</li>
                <li>마이페이지</li>
                <li>로그아웃</li>
            </ul>
        </MainHeaderWrap>
    )
}

export default MainHeader
