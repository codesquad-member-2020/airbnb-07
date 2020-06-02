import React, { useState } from 'react'
import styled from 'styled-components';
import MainHeaderMenu from './MainHeaderMenu';
import miniMenu from 'public/images/mini-menu.svg';

const MainHeaderMiniMenuWrap = styled.div`
    display: none;
    @media (max-width: 1180px) { display: block; }
    .mini-menu {
        position: relative;
        width: 200px;
        height: 30px;
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
    }
`;

const MainHeaderMiniMenu = () => {
    const [bMiniMenuOpen, setOpen] = useState(false);

    const handleMiniMenuOpen = () => setOpen(!bMiniMenuOpen);
    const handleMiniMenuLeave = () => setOpen(false);

    return (
        <MainHeaderMiniMenuWrap>
            <div className='mini-menu' onMouseLeave={handleMiniMenuLeave}>
                <img src={miniMenu} alt="mini-menu" onClick={handleMiniMenuOpen} />
                {bMiniMenuOpen && <MainHeaderMenu />}
            </div>
        </MainHeaderMiniMenuWrap>
    )
}

export default MainHeaderMiniMenu
