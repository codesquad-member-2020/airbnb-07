import React from 'react'
import { MAIN } from 'constants/constant';
import ratingStar from 'public/images/rating-star.svg';

const ReservationFilterInfo = ({ hotelRating, checkInDateInfoText, checkOutDateInfoText, person }) => {
    const { adultCount, childCount, babyCount } = person;

    const personInfoTextArr = [];
    if (adultCount) personInfoTextArr.push(`${MAIN.PERSON.ADULT.TEXT} ${adultCount}명`);
    if (childCount) personInfoTextArr.push(`${MAIN.PERSON.CHILD.TEXT} ${childCount}명`);
    if (babyCount) personInfoTextArr.push(`${MAIN.PERSON.BABY.TEXT} ${babyCount}명`);

    const startDateText = checkInDateInfoText.replace(/-/g, '. ');
    const endDateText = checkOutDateInfoText.replace(/-/g, '. ');
    const personInfoText = personInfoTextArr.join(', ')

    return (
        <>
            <div className='rating-wrap'>
                <img className='rating-star-icon' src={ratingStar} alt='rating-star' />
                {hotelRating}
            </div>
            <div className='date-info-wrap'>
                <div>날짜</div>
                <div className='date-info'>{startDateText}. ➜ {endDateText}.</div>
            </div>
            <div className='person-info-wrap'>
                <div>인원</div>
                <div className='person-info'>{personInfoText}</div>
            </div>
        </>
    )
}

export default ReservationFilterInfo
