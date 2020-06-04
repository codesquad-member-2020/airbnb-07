import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { checkLogin } from 'store/modules/login/loginAction';
import MainHeader from '@/components/header/MainHeader';
import ReservationList from './ReservationList';

const MyPage = () => {
    const dispatch = useDispatch();
    const { bLogin } = useSelector(({ login }) => login);

    useEffect(() => {
        dispatch(checkLogin());
    }, [dispatch]);

    return (
        <>
            <MainHeader />
            {bLogin && <ReservationList />}
        </>
    )
}

export default MyPage
