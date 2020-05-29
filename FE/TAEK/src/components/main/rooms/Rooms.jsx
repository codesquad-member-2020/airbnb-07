import React, { useEffect } from 'react'
import styled from 'styled-components';
import RoomList from './RoomList';
import Loading from '@/components/common/Loading';
import PageTop from '@/components/common/PageTop';
import { useDispatch, useSelector } from 'react-redux';
import { getRooms } from 'store/modules/rooms/roomsAction';
import ReservationModal from './reservation/ReservationModal';

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
    const { loading, roomsData, error } = useSelector(({ rooms }) => rooms);
    const { isOpen, roomData } = useSelector(({ reservation }) => reservation);

    useEffect(() => {
        dispatch(getRooms());
    }, [dispatch]);

    if (loading) return <Loading />;

    return (
        <RoomsWrap>
            {error ?
                <>
                    {error}
                </> :
                <>
                    {isOpen && <ReservationModal {...{ roomData }} />}
                    <RoomsTitle>{roomsData.allData.length}개 이상의 숙소</RoomsTitle>
                    <RoomList allData={roomsData.allData} />
                    <PageTop />
                </>}
        </RoomsWrap>
    )
}

export default Rooms
