import React from 'react'
import styled from 'styled-components';
import RoomCard from './RoomCard';

const RoomListWrap = styled.div`
    margin-top : 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 340px;
    grid-gap: 35px;

    @media ( max-width: 1680px ) { grid-template-columns: repeat(3, 1fr); }
    @media ( max-width: 1180px ) { grid-template-columns: repeat(2, 1fr); }
    @media ( max-width: 680px ) { grid-template-columns: repeat(1, 1fr); }
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