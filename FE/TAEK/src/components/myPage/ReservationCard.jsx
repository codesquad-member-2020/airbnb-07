import React from 'react'
import { numberComma } from 'utils/util';

const ReservationCard = ({ reservationInfo, index }) => {
    const { hotelName, urls, reservation } = reservationInfo;
    const [titleImgUrl] = urls;

    return (
        <tr className="reservation-card-container">
            <td>{index + 1}</td>
            <td className="hotel-container">
                <img src={titleImgUrl.url} alt='room-image' />
                <div className="hotel-name-title">{hotelName}</div>
            </td>
            <td>
                <div className='date-info'>
                    <span>{reservation.startDate}</span>
                    <span className='date-arrow' >➜</span>
                    <span>{reservation.endDate}</span>
                </div>
            </td>
            <td>{reservation.people}명</td>
            <td>{numberComma(reservation.totalPrice)}원</td>
            <td className="cancel-btn-container">
                <button className="reservation-cancel-btn">취 소</button>
            </td>
        </tr>
    )
}

export default ReservationCard
