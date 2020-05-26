import React from 'react'
import styled from 'styled-components';
import ModalPortal from 'utils/ModalPortal';
import ReservationModalItem from './ReservationModalItem';

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    background-color: #00000080;
`;

const ReservationModalWrap = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(.5);
    width: 450px;
    height: 650px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: ${props => props.theme.boxShadow};
    z-index: 10;
    animation-name: beservationModal;
    animation-duration: 0.2s;
    animation-timing-function: cubic-bezier(.17,.67,.62,1.64);
    animation-fill-mode: both;
    @keyframes beservationModal{
        to { transform: translate(-50%, -50%) scale(1); }
    }
`;

const ReservationModal = ({ handleSetOpen, ratingStar, roomData }) => {
    return (
        <>
            <ModalPortal>
                <Background onClick={handleSetOpen} />
                <ReservationModalWrap>
                    <ReservationModalItem {...{ handleSetOpen, ratingStar, roomData }} />
                </ReservationModalWrap>
            </ModalPortal>
        </>
    )
}

export default ReservationModal
