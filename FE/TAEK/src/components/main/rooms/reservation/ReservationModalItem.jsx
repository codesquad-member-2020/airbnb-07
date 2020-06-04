import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { numberComma, dayCounter, formatDate } from 'utils/util';
import ReservationFilterInfo from './ReservationFilterInfo';
import ReservationChargeInfo from './ReservationChargeInfo';
import { MAIN } from 'constants/constant';
import { requestReservation } from 'store/modules/reservation/reservationAction';

const ReservationModalItemWrap = styled.div`
    width: 370px;
    color: #000;
    .currentPrice-wrap {
        margin-bottom: 10px;
        .currentPrice {
            font-size: 28px;
            font-weight: 600;
            margin-right: 5px;
        }
    }
    .rating-wrap {
        font-size: 16px;
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid #bdc3c7;
        .rating-star-icon {
            width: 13px;
            height: 13px;
            margin-right: 3px;
        }
    }
    .date-info-wrap {
        margin-bottom: 10px;
    }
    .person-info-wrap {
        margin-bottom: 30px;
    }
    .date-info-wrap, .person-info-wrap {
        font-weight: 600;
        .date-info, .person-info {
            font-weight: 500;
            margin-top: 5px;
            padding: 18px;
            border: 1px solid #bdc3c7;
            box-shadow: ${(props) => props.theme.boxShadow};
            border-radius: 5px;
            font-size: 18px;
        }
    }
    .charge-info-wrap {
        margin-bottom: 30px;
        letter-spacing: -0.03rem;
        .charge-info-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #bdc3c7;
            :last-child {
                margin-bottom: 0;
                padding-bottom: 0;
                border-bottom: none;
                font-weight: 600;
            }
        }
    }
    .reservation-btn {
        width: 100%;
        height: 50px;
        color: #fff;
        border: none;
        outline: none;
        background-color: ${props => props.theme.brandColor};
        border-radius: 5px;
        font-size: 18px;
        font-weight: 600;
        font-family: 'Noto Sans KR', sans-serif;
        box-shadow: ${(props) => props.theme.boxShadow};
        cursor: pointer;
    }
    .reservation-info-text {
        margin-top: 15px;
        text-align: center;
        color: #95a5a6;
    }
`;

const CloseButton = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`;

const ReservationModalItem = ({ handleModalToggle, roomData, reservation, setReservation }) => {
    const dispatch = useDispatch();
    const person = useSelector(({ person }) => person);
    const { checkInDateInfo, checkOutDateInfo } = useSelector(({ date }) => date);
    const { totalCount } = person;
    const { id, currentPrice, hotelRating } = roomData;

    const checkInDateInfoText = `${formatDate(checkInDateInfo.year, checkInDateInfo.month, checkInDateInfo.day, '-')}`;
    const checkOutDateInfoText = `${formatDate(checkOutDateInfo.year, checkOutDateInfo.month, checkOutDateInfo.day, '-')}`;

    const dayCount = dayCounter(checkInDateInfo, checkOutDateInfo);
    const totalRoomCharge = currentPrice * dayCount * totalCount;
    const cleanUpCost = MAIN.RESERVATION.CLEAN_UP_COST;
    const serviceCost = MAIN.RESERVATION.SERVICE_COST;
    const tax = Math.floor(totalRoomCharge * MAIN.RESERVATION.TAX_RATE);
    const totalCharge = totalRoomCharge + cleanUpCost + serviceCost + tax;

    const handleReservationClick = () => {
        setReservation(true);
        const reservationData = {
            startDate: checkInDateInfoText,
            endDate: checkOutDateInfoText,
            people: totalCount,
            totalPrice: totalCharge
        }
        dispatch(requestReservation({ id, reservationData }));
    }

    return (
        <>
            <CloseButton onClick={handleModalToggle}>❌</CloseButton>
            <ReservationModalItemWrap>
                <div className='currentPrice-wrap'>
                    <span className='currentPrice'>&#8361; {numberComma(currentPrice)}</span>
                    <span>/1박</span>
                </div>
                <ReservationFilterInfo {...{ hotelRating, checkInDateInfoText, checkOutDateInfoText, person }} />
                <ReservationChargeInfo {...{ numberComma, dayCount, totalCount, totalRoomCharge, cleanUpCost, serviceCost, tax, totalCharge }} />
                <button className='reservation-btn' onClick={handleReservationClick} disabled={reservation}>
                    예약하기
                </button>
                <div className='reservation-info-text'>예약 확정 전에는 요금이 청구되지 않습니다.</div>
            </ReservationModalItemWrap>
        </>
    )
}

export default ReservationModalItem
