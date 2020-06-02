import React from 'react'
import styled from 'styled-components';
import RoomCard from './RoomCard';
import Pagenation from './Pagenation';
import { MAIN } from 'constants/constant';

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

const RoomList = ({ allData, currentPage }) => {
    const maximum = MAIN.ROOMS.MAXIMUM_VIEW_ITEM_COUNT;
    const pageItems = [...allData].splice(((currentPage - 1) * maximum), maximum);
    const roomList = pageItems.map(roomData => <RoomCard key={roomData.id} {...{ roomData }} />);

    return (
        <>
            <Pagenation />
            <RoomListWrap>
                {roomList}
            </RoomListWrap>
            <Pagenation />
        </>
    )
}

export default RoomList
