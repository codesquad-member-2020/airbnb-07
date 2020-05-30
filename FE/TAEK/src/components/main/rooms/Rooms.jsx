import React, { useEffect } from 'react'
import styled from 'styled-components';
import RoomList from './RoomList';
import LoadingSpiner from '@/components/common/LoadingSpiner';
import PageTop from '@/components/common/PageTop';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomsData } from 'store/modules/rooms/roomsAction';
import ReservationModal from './reservation/ReservationModal';
import { MAIN } from 'constants/constant';
import { numberComma } from 'utils/util';

const RoomsWrap = styled.div`
    margin-top: 60px;
`;

const RoomsTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: #000;
`;

const Rooms = () => {
    const dispatch = useDispatch();
    const charge = useSelector(({ charge }) => charge);
    const { loading, filterRoomsData, error } = useSelector(({ rooms }) => rooms);
    const { isOpen, roomData } = useSelector(({ reservation }) => reservation);

    useEffect(() => {
        dispatch(getRoomsData(charge.min, charge.max));
    }, [dispatch]);

    if (loading) return <LoadingSpiner />;

    return (
        <RoomsWrap>
            {error ?
                <>
                    <span>{error}</span>
                </> :
                <>
                    {isOpen && <ReservationModal {...{ roomData }} />}
                    <RoomsTitle>
                        {filterRoomsData.allData.length ?
                            `검색 결과 약 ${numberComma(filterRoomsData.allData.length)}개` :
                            `${MAIN.ROOMS.NOT_RESULT}`}
                    </RoomsTitle>
                    <RoomList allData={filterRoomsData.allData} />
                    <PageTop />
                </>}
        </RoomsWrap>
    )
}

export default Rooms
