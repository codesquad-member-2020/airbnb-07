import React from 'react'
import { MAIN } from 'constants/constant';
import ratingStar from 'public/images/rating-star.svg';

const ReservationFilterInfo = ({ hotelRating, checkInDateInfoText, checkOutDateInfoText, person }) => {
    const { adultCount, childCount, babyCount } = person;

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
                <div className='date-info'>{checkInDateInfoText.replace(/-/g, '. ')}. ➜ {checkOutDateInfoText.replace(/-/g, '. ')}.</div>
            </div>
            <div className='person-info-wrap'>
                <div>인원</div>
                <div className='person-info'>{personInfoText.join(', ')}</div>
            </div>
        </>
    )
}

export default ReservationFilterInfo
