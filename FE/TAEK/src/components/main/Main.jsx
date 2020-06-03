import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getCookie } from 'utils/util';
import { COMMON } from 'constants/constant';
import { login } from 'store/modules/login/loginAction';
import styled from 'styled-components';
import MainHeader from '@/components/header/MainHeader';
import FilterButtons from './filterButtons/FilterButtons';
import Rooms from './rooms/Rooms';

const MainContentsWrap = styled.div`
    padding: 30px 15%;
    color: #484848;
`;

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = getCookie(COMMON.TOKEN_KEY);
        if (token) dispatch(login(token));
    }, [dispatch]);

    return (
        <>
            <MainHeader />
            <MainContentsWrap>
                <FilterButtons />
                <Rooms />
            </MainContentsWrap>
        </>
    )
}

export default Main
