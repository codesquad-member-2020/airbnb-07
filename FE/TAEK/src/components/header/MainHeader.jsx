import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import mainAirbnbLogo from 'public/images/main-airbnb-logo.png';
import miniMenu from 'public/images/mini-menu.svg';
import MainHeaderMenu from './MainHeaderMenu';

const MainHeaderArea = styled.div`
    position: relative;
    width: 100%;
    height: 80px;
`;

const MainHeaderWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    box-shadow: 0 4px 6px #32325d1c, 0 1px 3px #00000014;
    width: 100%;
    height: 80px;
    background-color: #fff;
    padding: 0 15%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    .main-airbnb-logo {
        cursor: pointer;
    }
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
    .mini-menu {
        position: relative;
        width: 200px;
        height: 30px;
        display: none;
        align-self: center;
        img {
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
        }
        .main-header-menu {
            position: absolute;
            top: 30px;
            right: 0;
            display: block;
            width: 200px;
            font-size: 15px;
            font-weight: 600;
            color: #484848;
            background-color: #fff;
            z-index: 7;
            overflow: hidden;
            animation-name: miniMenu;
            animation-duration: .3s;
            animation-timing-function:ease-in-out;
            animation-fill-mode: both;
            @keyframes miniMenu {
                0% { height: 0; }
                100% { height: 250px;}
            }
            border-radius: 5px;
            box-shadow: ${props => props.theme.modalShadow};
            box-sizing: border-box;
            li {
                display: block;
                line-height: 30px;
                padding: 10px 20px;
                margin-right: 0;
                cursor: pointer;
            }
        }
        @media (max-width: 1180px) { display: block; }
    }
`;

const MainHeader = () => {
    const [isOpen, setOpen] = useState(false);
    const handleMiniMenuOpen = () => setOpen(!isOpen);
    const handleMiniMenuLeave = () => setOpen(false);

    let history = useHistory();
    const handleLogoClick = () => history.push('/main');

    return (
        <MainHeaderArea>
            <MainHeaderWrap>
                <img className='main-airbnb-logo' src={mainAirbnbLogo} alt="airbnb-logo" onClick={handleLogoClick} />
                <MainHeaderMenu />
                <div className='mini-menu' onMouseLeave={handleMiniMenuLeave}>
                    <img src={miniMenu} alt="mini-menu" onClick={handleMiniMenuOpen} />
                    {isOpen && <MainHeaderMenu />}
                </div>
            </MainHeaderWrap>
        </MainHeaderArea>
    )
}

export default MainHeader
