import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ReservationCard from './ReservationCard';
import LoadingSpiner from '@/components/common/LoadingSpiner';
import PageTop from '@/components/common/PageTop';
import { getReservationInfoData } from 'store/modules/reservation/reservationAction';

const ReservationListWrap = styled.div`
    padding: 40px 15%;
    table > thead > tr > th {
        padding: 15px;
    }
    table > tbody > tr > td {
        text-align: center;
        vertical-align: middle;
    }
    table > tbody > tr {
        border-bottom: 0.5px solid #ecf0f1;
        :last-child {
            border-bottom: none;
        }
    }
    thead {
        border-bottom: 0.5px solid #ecf0f1;
        font-weight: 600;
    }
    .reservation-title {
        font-size: 20px;
        font-weight: 600;
        color: #000;
        margin-bottom: 40px;
    }
    .table-container {
        box-shadow: ${props => props.theme.modalShadow};
        border-radius: 5px;
        margin-top: 35px;
        width: 100%;
        opacity: 0;
        animation-name: reservationTable;
        animation-duration: .6s;
        animation-timing-function: ease-in-out;
        animation-fill-mode: both;
        @keyframes reservationTable{
            to { opacity: 1 }
        }
    }
`;

const ReservationList = () => {
    const dispatch = useDispatch();
    const { token } = useSelector(({ login }) => login);
    const { loading, reservationData, error } = useSelector(({ reservation }) => reservation);

    useEffect(() => {
        dispatch(getReservationInfoData({ token }));
    }, [dispatch]);

    if (loading) return <LoadingSpiner />;

    return (
        <ReservationListWrap>
            <h2 className='reservation-title'>마이페이지</h2>
            {error ?
                <span>{error}</span> :
                <table className='table-container'>
                    <thead>
                        <tr>
                            <th width='5%'></th>
                            <th width='30%'>숙박 정보</th>
                            <th width='20%'>날짜</th>
                            <th width='11%'>인원</th>
                            <th width='14%'>금액</th>
                            <th width='20%'>예약 취소</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservationData.allData.map((reservationInfo, index) => {
                            return (
                                <ReservationCard
                                    key={reservationInfo.reservation.id}
                                    {...{ reservationInfo, index }}
                                />)
                        })}
                    </tbody>
                </table>
            }
            <PageTop />
        </ReservationListWrap>
    )
}

export default ReservationList
