import React from 'react'
import styled from 'styled-components';
import { numberComma } from 'utils/util';
import ratingStar from 'public/images/rating-star.svg';

const RoomCardWrap = styled.div`
    white-space: nowrap;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: ${props => props.theme.boxShadow};
`;

const RoomImg = styled.img`
    width: 100%;
    height: 65%;
    border-radius: 5px;
`;

const RoomTextInfoWrap = styled.div`
    padding: 10px 10px;
    letter-spacing: -0.03rem;
    .info-top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
        font-size: 15px;
        .location {
            color: #95a5a6;
        }
        .rating-star-icon {
            width: 13px;
            height: 13px;
            margin-right: 3px;
        }
    }
    .info-main {
        .hotelName {
            text-overflow: ellipsis;
            overflow: hidden;
            margin-bottom: 5px;
            line-height: 20px;
            height: 22px;
            letter-spacing: -0.05rem;
        }
        .previousPrice {
            color: #7f8c8d;
            margin-right: 8px;
            text-decoration: line-through;
        }
        .currentPrice {
            color: #000;
            font-weight: 600;
        }
    }
    .info-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 7px;
        font-size: 15px;
        .total-charge {
            color: #95a5a6;
        }
    }
    .reserve-btn {
        color: #fff;
        border: none;
        outline: none;
        background-color: ${props => props.theme.brandColor};
        width: 100px;
        height: 30px;
        border-radius: 5px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        font-family: 'Noto Sans KR', sans-serif;
    }
`;

const RoomCard = ({ roomData }) => {
    const { hotelName, location, currentPrice, previousPrice, hotelRating, urls } = roomData;
    const [titleImgUrl] = urls;

    return (
        <RoomCardWrap>
            <RoomImg src={titleImgUrl.url} alt="숙소 이미지" />
            <RoomTextInfoWrap>
                <div className='info-top'>
                    <div className='location'>{location}</div>
                    <div>
                        <img className='rating-star-icon' src={ratingStar} alt="rating-star" />
                        {hotelRating}
                    </div>
                </div>
                <div className='info-main'>
                    <div className='hotelName' title={hotelName}>{hotelName}</div>
                    <div>
                        <span className='previousPrice'>&#8361; {numberComma(previousPrice)}</span>
                        <span className='currentPrice'>&#8361; {numberComma(currentPrice)}</span>
                        <span>/1박</span>
                    </div>
                </div>
                <div className='info-bottom'>
                    <div className='total-charge'>총 요금: &#8361; {numberComma(currentPrice * 10)}</div>
                    <button className='reserve-btn'>예 약</button>
                </div>
            </RoomTextInfoWrap>
        </RoomCardWrap>
    )
}

export default RoomCard