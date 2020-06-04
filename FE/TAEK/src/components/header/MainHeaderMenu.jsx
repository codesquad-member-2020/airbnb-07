import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { deleteCookie } from 'utils/util';
import { COMMON } from 'constants/constant';
import styled from 'styled-components';
import { logout } from 'store/modules/login/loginAction';

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
    const dispatch = useDispatch();
    const { bLogin } = useSelector(({ login }) => login);

    let history = useHistory();

    const handleMyPageClick = () => {
        if (bLogin) return history.push('/mypage');
        alert(COMMON.NOT_LOGIN_MEASSAGE);
        history.push('/login');
    };

    const handleLoginClick = () => {
        if (!bLogin) return history.push('/login');
        dispatch(logout());
        history.push('/');
    }

    return (
        <MainHeaderMenuWrap>
            <ul className='main-header-menu'>
                <li>숙소 호스트 되기</li>
                <li>체험 호스팅하기</li>
                <li>도움말</li>
                <li onClick={handleMyPageClick}>마이페이지</li>
                <li onClick={handleLoginClick}>{bLogin ? '로그아웃' : '로그인'}</li>
            </ul>
        </MainHeaderMenuWrap>
    )
}

export default MainHeaderMenu
