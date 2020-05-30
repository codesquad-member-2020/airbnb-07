import React from 'react'
import { numberComma } from 'utils/util';

const ReservationCard = ({ reservationInfo, index }) => {
    const { hotelName, urls, reservations } = reservationInfo;
    const [titleImgUrl] = urls;
    const [reservationsInfo] = reservations;

    return (
        <tr className="reservation-card-container">
            <td>{index + 1}</td>
            <td className="hotel-container">
                <img src={titleImgUrl.url} alt='room-image' />
                <div className="hotel-name-title">{hotelName}</div>
            </td>
            <td>
                <div className='date-info'>
                    <span>{reservationsInfo.startDate}</span>
                    <span className='date-arrow' >➜</span>
                    <span>{reservationsInfo.endDate}</span>
                </div>
            </td>
            <td>{reservationsInfo.people}명</td>
            <td>{numberComma(reservationsInfo.totalPrice)}원</td>
            <td className="cancel-btn-container">
                <button className="reservation-cancel-btn">취소</button>
            </td>
        </tr>
    )
}

export default ReservationCard
