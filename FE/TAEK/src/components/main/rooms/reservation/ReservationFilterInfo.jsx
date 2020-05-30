import React from 'react'
import { useSelector } from 'react-redux';
import { MAIN } from 'constants/constant';
import { formatDate } from 'utils/util';

const ReservationFilterInfo = ({ ratingStar, hotelRating }) => {
    const { checkInDateInfo, checkOutDateInfo } = useSelector(({ date }) => date);
    const { adultCount, childCount, babyCount } = useSelector(({ person }) => person);

    const checkInDateInfoText = `${formatDate(checkInDateInfo.year, checkInDateInfo.month, checkInDateInfo.day, '. ')}.`;
    const checkOutDateInfoText = checkOutDateInfo && ` ➜ ${formatDate(checkOutDateInfo.year, checkOutDateInfo.month, checkOutDateInfo.day, '. ')}.`;

    const personInfoText = [];
    if (adultCount) personInfoText.push(`${MAIN.PERSON.ADULT.TEXT} ${adultCount}명`);
    if (childCount) personInfoText.push(`${MAIN.PERSON.CHILD.TEXT} ${childCount}명`);
    if (babyCount) personInfoText.push(`${MAIN.PERSON.BABY.TEXT} ${babyCount}명`);

    return (
        <>
            <div className='rating-wrap'>
                <img className='rating-star-icon' src={ratingStar} alt='rating-star' />
                {hotelRating}
            </div>
            <div className='date-info-wrap'>
                <div>날짜</div>
                <div className='date-info'>{checkInDateInfoText}{checkOutDateInfoText}</div>
            </div>
            <div className='person-info-wrap'>
                <div>인원</div>
                <div className='person-info'>{personInfoText.join(', ')}</div>
            </div>
        </>
    )
}

export default ReservationFilterInfo
