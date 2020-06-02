import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { changePage } from 'store/modules/rooms/roomsAction';
import styled from 'styled-components';
import mainAirbnbLogo from 'public/images/main-airbnb-logo.png';
import miniMenu from 'public/images/mini-menu.svg';
import MainHeaderMenu from './MainHeaderMenu';
import MainHeaderMiniMenu from './MainHeaderMiniMenu';

const MainHeaderArea = styled.div`
    position: relative;
    width: 100%;
    height: 80px;
`;

const MainHeaderWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    box-shadow: 0 4px 6px #32325d1c, 0 1px 3px #00000014;
    width: 100%;
    height: 80px;
    background-color: #fff;
    padding: 0 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    transition: .4s ease;
    &.hide {
        box-shadow: 0;
        transform: translateY(-80px);
    }
    .main-airbnb-logo {
        cursor: pointer;
    }
`;

const MainHeader = () => {
    const dispatch = useDispatch();
    const [hide, setHide] = useState(false);
    const [pageY, setPageY] = useState(0);
    const documentRef = useRef(document);

    let history = useHistory();
    const handleLogoClick = () => {
        dispatch(changePage(1));
        window.scrollTo(0, 0);
        history.push('/main');
    }

    const handleScroll = () => {
        const { pageYOffset } = window;
        const deltaY = pageYOffset - pageY;
        const hide = pageYOffset !== 0 && deltaY >= 0;

        setHide(hide);
        setPageY(pageYOffset);
    }

    useEffect(() => {
        documentRef.current.addEventListener('scroll', handleScroll);
        return () => documentRef.current.removeEventListener('scroll', handleScroll);
    }, [pageY]);

    return (
        <MainHeaderArea>
            <MainHeaderWrap className={hide && 'hide'}>
                <img className='main-airbnb-logo' src={mainAirbnbLogo} alt="airbnb-logo" onClick={handleLogoClick} />
                <MainHeaderMenu />
                <MainHeaderMiniMenu />
            </MainHeaderWrap>
        </MainHeaderArea>
    )
}

export default MainHeader
