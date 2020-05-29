import React from 'react'
import { useSelector } from 'react-redux';
import { MAIN } from 'constants/constant';

const ReservationChargeInfo = ({ currentPrice, numberComma, dayCounter }) => {
    const { checkInDateInfo, checkOutDateInfo } = useSelector(({ date }) => date);
    const { totalCount } = useSelector(({ person }) => person);

    const dayCount = dayCounter(checkInDateInfo, checkOutDateInfo);
    const totalRoomCharge = currentPrice * dayCount * totalCount;
    const cleanUpCost = MAIN.RESERVATION.CLEAN_UP_COST;
    const serviceCost = MAIN.RESERVATION.SERVICE_COST;
    const tax = Math.floor(totalRoomCharge * MAIN.RESERVATION.TAX_RATE);
    const totalCharge = totalRoomCharge + cleanUpCost + serviceCost + tax;

    return (
        <>
            <div className='charge-info-wrap'>
                <div className='charge-info-item'>
                    <span>숙박비 ({dayCount}박 x {totalCount}인)</span>
                    <span>&#8361; {numberComma(totalRoomCharge)}</span>
                </div>
                <div className='charge-info-item'>
                    <span>청소비</span>
                    <span>&#8361; {numberComma(cleanUpCost)}</span>
                </div>
                <div className='charge-info-item'>
                    <span>서비스 수수료</span>
                    <span>&#8361; {numberComma(serviceCost)}</span>
                </div>
                <div className='charge-info-item'>
                    <span>숙박세와 수수료</span>
                    <span>&#8361; {numberComma(tax)}</span>
                </div>
                <div className='charge-info-item'>
                    <span>합계</span>
                    <span>&#8361; {numberComma(totalCharge)}</span>
                </div>
            </div>
        </>
    )
}

export default ReservationChargeInfo
