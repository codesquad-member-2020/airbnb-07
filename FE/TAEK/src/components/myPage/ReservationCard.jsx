import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from "react-intersection-observer";
import styled from 'styled-components';
import { numberComma } from 'utils/util';
import { cancelReservation } from 'store/modules/reservation/reservationAction';
import LoadingSpiner from '@/components/common/LoadingSpiner';

const ReservationCardWrap = styled.tr`
    &.reservation-card-container {
        .hotel-container {
        width: 300px;
        padding: 20px;
            img {
                width: 100%;
                height: auto;
                border-radius: 5px;
                box-shadow: ${props => props.theme.boxShadow};
            }
            .hotel-name-title {
                margin-top: 10px;
            }
        }
        .date-info {
            display: flex;
            flex-direction: column;
            .date-arrow {
                margin: 12.5px 0;
                transform: rotate(90deg);
            }
        }
        .reservation-cancel-btn {
            width: 45%;
            height: 35px;
            color: #fff;
            border: none;
            outline: none;
            background-color: ${props => props.theme.brandColor};
            border-radius: 5px;
            font-size: 15px;
            font-weight: 600;
            font-family: 'Noto Sans KR', sans-serif;
            box-shadow: ${props => props.theme.boxShadow};
            cursor: pointer;
        }
        .cancel-btn-container {
            width: 100px;
        }
        transition: 1s ease;
    }
`;

const ReservationCard = ({ reservationInfo, index }) => {
    const dispatch = useDispatch();
    const [cancel, setCancel] = useState(false);
    const { token } = useSelector(({ login }) => login);
    const { hotelName, urls, reservation, accommodationId } = reservationInfo;
    const { id, startDate, endDate, people, totalPrice } = reservation
    const [titleImgUrl] = urls;
    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    const handleCancelClick = () => {
        setCancel(true);
        dispatch(cancelReservation({ accommodationId, reservationId: id, token }));
    }

    return (
        <>
            {cancel && <tr><td><LoadingSpiner /></td></tr>}
            <ReservationCardWrap ref={ref} className='reservation-card-container'>
                <td>{index + 1}</td>
                <td className='hotel-container'>
                    <img src={inView ? titleImgUrl.url : ''} alt='room-image' />
                    <div className='hotel-name-title'>{hotelName}</div>
                </td>
                <td>
                    <div className='date-info'>
                        <span>{startDate}</span>
                        <span className='date-arrow' >➜</span>
                        <span>{endDate}</span>
                    </div>
                </td>
                <td>{people}</td>
                <td>{numberComma(totalPrice)}원</td>
                <td className='cancel-btn-container'>
                    <button className='reservation-cancel-btn' onClick={handleCancelClick} disabled={cancel}>
                        취 소
                    </button>
                </td>
            </ReservationCardWrap>
        </>
    )
}

export default ReservationCard
