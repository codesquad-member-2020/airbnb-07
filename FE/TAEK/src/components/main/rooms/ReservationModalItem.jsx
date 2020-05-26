import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { numberComma } from 'utils/util';

const ReservationModalItemWrap = styled.div`
    padding: 30px 30px;
    .currentPrice-wrap {
        margin-bottom: 10px;
        .currentPrice {
            color: #000;
            font-size: 28px;
            font-weight: 600;
            margin-right: 5px;
        }
    }
    .rating-wrap {
        font-size: 18px;
        .rating-star-icon {
            width: 13px;
            height: 13px;
            margin-right: 3px;
        }
    }
`;

const CloseButton = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`;

const ReservationModalItem = ({ handleSetOpen, ratingStar, roomData }) => {
    const { checkInDate, checkOutDate } = useSelector(({ date }) => date);
    const { totalCount } = useSelector(({ person }) => person);
    const { currentPrice, hotelRating } = roomData;

    return (
        <>
            <CloseButton onClick={handleSetOpen}>❌</CloseButton>
            <ReservationModalItemWrap>
                <div className='currentPrice-wrap'>
                    <span className='currentPrice'>&#8361; {numberComma(currentPrice)}</span>
                    <span>/박</span>
                </div>
                <div className='rating-wrap'>
                    <img className='rating-star-icon' src={ratingStar} alt='rating-star' />
                    {hotelRating}
                </div>
            </ReservationModalItemWrap>
        </>
    )
}

export default ReservationModalItem
