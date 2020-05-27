import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { numberComma } from 'utils/util';
import { MAIN } from 'constants/constant';

const ReservationModalItemWrap = styled.div`
    padding: 30px 30px;
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

const ReservationModalItem = ({ handleSetOpen, ratingStar, roomData }) => {
    const { checkInDateInfo, checkOutDateInfo } = useSelector(({ date }) => date);
    const { totalCount, adultCount, childCount, babyCount } = useSelector(({ person }) => person);
    const { currentPrice, hotelRating } = roomData;

    const totalRoomCharge = numberComma(currentPrice * 10 * totalCount);
    const totalCharge = totalRoomCharge;

    const checkInDateInfoText = `${checkInDateInfo.year}. ${checkInDateInfo.month}. ${checkInDateInfo.day}.`;
    const checkOutDateInfoText = checkOutDateInfo && ` ➜ ${checkOutDateInfo.year}. ${checkOutDateInfo.month}. ${checkOutDateInfo.day}.`;

    const personInfoText = [];
    if (adultCount) personInfoText.push(`${MAIN.PERSON.ADULT.TEXT} ${adultCount}명`);
    if (childCount) personInfoText.push(`${MAIN.PERSON.CHILD.TEXT} ${childCount}명`);
    if (babyCount) personInfoText.push(`${MAIN.PERSON.BABY.TEXT} ${babyCount}명`);

    return (
        <>
            <CloseButton onClick={handleSetOpen}>❌</CloseButton>
            <ReservationModalItemWrap>
                <div className='currentPrice-wrap'>
                    <span className='currentPrice'>&#8361; {numberComma(currentPrice)}</span>
                    <span>/1박</span>
                </div>
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
                <div className='charge-info-wrap'>
                    <div className='charge-info-item'>
                        <span>숙박비 (10박 x {totalCount}인)</span>
                        <span>&#8361; {totalRoomCharge}</span>
                    </div>
                    <div className='charge-info-item'>
                        <span>청소비</span>
                        <span>&#8361; 0</span>
                    </div>
                    <div className='charge-info-item'>
                        <span>서비스 수수료</span>
                        <span>&#8361; 0</span>
                    </div>
                    <div className='charge-info-item'>
                        <span>숙박세와 수수료</span>
                        <span>&#8361; 0</span>
                    </div>
                    <div className='charge-info-item'>
                        <span>합계</span>
                        <span>&#8361; {totalCharge}</span>
                    </div>
                </div>
                <button className='reservation-btn'>예약하기</button>
                <div className='reservation-info-text'>예약 확정 전에는 요금이 청구되지 않습니다.</div>
            </ReservationModalItemWrap>
        </>
    )
}

export default ReservationModalItem
