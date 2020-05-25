import React from 'react'
import styled from 'styled-components';
import RoomCard from './RoomCard';

const RoomListWrap = styled.div`
    margin-top : 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: 340px;
    grid-gap: 35px;
`;

const RoomList = ({ allData }) => {
    const roomList = allData.map(roomData => {
        return (
            <RoomCard key={roomData.id} {...{ roomData }} />
        )
    });

    return (
        <RoomListWrap>
            {roomList}
        </RoomListWrap>
    )
}

export default RoomList
