import React from 'react'
import styled from 'styled-components';
import ModalPortal from 'utils/ModalPortal';
import ChargeRange from './ChargeRange';

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 5;
`;

const ChargeFilterModalWrap = styled.div`
    position: absolute;
    top: 52px;
    left: 0;
    width: 400px;
    background-color: #fff;
    z-index: 10;
    overflow: hidden;
    animation-name: chargeModal;
    animation-duration: .2s;
    animation-timing-function:ease-in-out;
    animation-fill-mode: both;
    @keyframes chargeModal {
        0% { height: 0; }
        100% { height: 400px;}
    }
    box-shadow: ${props => props.theme.modalShadow};
    border-radius: 3px;
`;

const ChargeFilterModal = ({ handleSetOpen }) => {
    return (
        <>
            <ModalPortal>
                <Background onClick={handleSetOpen} />
            </ModalPortal>
            <ChargeFilterModalWrap>
                <ChargeRange />
            </ChargeFilterModalWrap>
        </>
    )
}

export default ChargeFilterModal
