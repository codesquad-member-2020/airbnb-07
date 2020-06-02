import React from 'react'
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

const MainHeaderMenuWrap = styled.div`
    .main-header-menu {
        display: flex;
        align-items: center;
        font-size: 15px;
        font-weight: 600;
        color: #484848;
        li {
            margin-right: 20px;
            cursor: pointer;
            :last-child {
                margin-right: 0;
            }
        }
    @media (max-width: 1180px) { display: none; }
    }
`;

const MainHeaderMenu = () => {
    let history = useHistory();
    const handleMyPageClick = () => history.push('/mypage');

    return (
        <MainHeaderMenuWrap>
            <ul className='main-header-menu'>
                <li>숙소 호스트 되기</li>
                <li>체험 호스팅하기</li>
                <li>도움말</li>
                <li onClick={handleMyPageClick}>마이페이지</li>
                <li>로그아웃</li>
            </ul>
        </MainHeaderMenuWrap>
    )
}

export default MainHeaderMenu
