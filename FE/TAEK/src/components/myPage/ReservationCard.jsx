import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { numberComma, getCookie } from 'utils/util';
import { cancelReservation } from 'store/modules/reservation/reservationAction';
import LoadingSpiner from '@/components/common/LoadingSpiner';
import { MAIN } from 'constants/constant';

const ReservationCard = ({ reservationInfo, index }) => {
    const dispatch = useDispatch();
    const [cancel, setCancel] = useState(false);
    const { hotelName, urls, reservation, accommodationId } = reservationInfo;
    const { id, startDate, endDate, people, totalPrice } = reservation
    const [titleImgUrl] = urls;

    const handleCancelClick = () => {
        setCancel(true);
        const token = getCookie(MAIN.RESERVATION.TOKEN_KEY);
        dispatch(cancelReservation({ accommodationId, reservationId: id, token }));
    }

    return (
        <>
            {cancel && <tr><td><LoadingSpiner /></td></tr>}
            <tr className='reservation-card-container'>
                <td>{index + 1}</td>
                <td className='hotel-container'>
                    <img src={titleImgUrl.url} alt='room-image' />
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
            </tr>
        </>
    )
}

export default ReservationCard
