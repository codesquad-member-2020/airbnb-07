import React, { useEffect } from 'react'
import styled from 'styled-components';
import RoomList from './RoomList';
import Loading from '@/components/common/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getRooms } from 'store/modules/rooms/roomsAction';

const RoomsWrap = styled.div`
    margin-top: 60px;
    .loading-spiner {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const RoomsTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: #000;
`;

const Rooms = () => {
    const dispatch = useDispatch();
    const { roomsData, loading } = useSelector(({ rooms }) => rooms);

    useEffect(() => {
        dispatch(getRooms());
    }, [dispatch]);

    return (
        <RoomsWrap>
            {loading ?
                <Loading /> :
                <>
                    <RoomsTitle>{roomsData.allData.length}개 이상의 숙소</RoomsTitle>
                    <RoomList allData={roomsData.allData} />
                </>}
        </RoomsWrap>
    )
}

export default Rooms
