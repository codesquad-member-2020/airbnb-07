import React, { useEffect, memo } from 'react'
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
    }
    .reservation-card-container {
        .hotel-container {
        width: 300px;
        padding: 20px;
            img {
                width: 100%;
                height: auto;
                border-radius: 5px;
                box-shadow: ${props => props.theme.boxShadow};
            }
            .hotel-name-title {
                margin-top: 10px;
            }
        }
        .date-info {
            display: flex;
            flex-direction: column;
            .date-arrow {
                margin: 12.5px 0;
                transform: rotate(90deg);
            }
        }
        .reservation-cancel-btn {
            width: 45%;
            height: 35px;
            color: #fff;
            border: none;
            outline: none;
            background-color: ${props => props.theme.brandColor};
            border-radius: 5px;
            font-size: 15px;
            font-weight: 600;
            font-family: 'Noto Sans KR', sans-serif;
            box-shadow: ${props => props.theme.boxShadow};
            cursor: pointer;
        }
        .cancel-btn-container {
            width: 100px;
        }
    }
`;

const ReservationList = () => {
    const dispatch = useDispatch();
    const { loading, reservationData, error } = useSelector(({ reservation }) => reservation);

    useEffect(() => {
        dispatch(getReservationInfoData());
    }, [dispatch]);

    if (loading) return <LoadingSpiner />;

    return (
        <ReservationListWrap>
            <h2 className='reservation-title'>마이페이지</h2>
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
                    {error ?
                        <tr>{error}</tr> :
                        reservationData.allData.reverse().map((reservationInfo, index) => {
                            return (
                                <ReservationCard
                                    key={reservationInfo.reservation.id}
                                    {...{ reservationInfo, index }}
                                />)
                        })}
                </tbody>
            </table>
            <PageTop />
        </ReservationListWrap>
    )
}

export default memo(ReservationList)
