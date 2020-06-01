import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import ModalPortal from 'utils/ModalPortal';
import ReservationModalItem from './ReservationModalItem';
import ReservationModalMap from './ReservationModalMap';
import { modalToggle } from 'store/modules/reservation/reservationAction';
import LoadingSpiner from '@/components/common/LoadingSpiner';

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 5;
    background-color: #00000080;
`;

const ReservationModalWrap = styled.div`
    position: fixed;
    display: flex;
    padding: 0 10px;
    align-items: center;
    justify-content: space-around;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(.5);
    width: 830px;
    height: 650px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: ${props => props.theme.boxShadow};
    z-index: 10;
    animation-name: reservationModal;
    animation-duration: 0.2s;
    animation-timing-function: cubic-bezier(.17,.67,.62,1.64);
    animation-fill-mode: both;
    @keyframes reservationModal{
        to { transform: translate(-50%, -50%) scale(1); }
    }
`;

const ReservationModal = ({ roomData }) => {
    const dispatch = useDispatch();
    const [reservation, setReservation] = useState(false);

    const handleModalToggle = () => dispatch(modalToggle());

    return (
        <>
            {reservation && <LoadingSpiner />}
            <ModalPortal>
                <Background onClick={handleModalToggle} />
                <ReservationModalWrap>
                    <ReservationModalItem {...{ handleModalToggle, roomData, reservation, setReservation }} />
                    <ReservationModalMap {...{ roomData }} />
                </ReservationModalWrap>
            </ModalPortal>
        </>
    )
}

export default ReservationModal
