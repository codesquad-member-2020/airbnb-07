import React, { useEffect } from 'react'
import styled from 'styled-components';
import RoomList from './RoomList';
import Loading from '@/components/common/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getRooms } from 'store/modules/rooms/roomsAction';

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
                    <RoomsTitle>{roomsData.allData.length}개 이상의 숙소</RoomsTitle>
                    <RoomList allData={roomsData.allData} />
                </>}
        </RoomsWrap>
    )
}

export default Rooms
