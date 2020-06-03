import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCookie } from 'utils/util';
import { COMMON } from 'constants/constant';
import { login } from 'store/modules/login/loginAction';
import MainHeader from '@/components/header/MainHeader';
import ReservationList from './ReservationList';

const MyPage = () => {
    const dispatch = useDispatch();
    const { bLogin } = useSelector(({ login }) => login);

    useEffect(() => {
        const token = getCookie(COMMON.TOKEN_KEY);
        if (token) dispatch(login(token));
    }, [dispatch]);

    return (
        <>
            <MainHeader />
            {bLogin && <ReservationList />}
        </>
    )
}

export default MyPage
