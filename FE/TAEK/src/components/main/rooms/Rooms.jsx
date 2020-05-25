import React from 'react'
import styled from 'styled-components';
import RoomList from './RoomList';

import { roomsData } from 'mock/mockData';

const RoomsWrap = styled.div`
    margin-top: 60px;
`;

const RoomsTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: #000;
`;

const Rooms = () => {
    const { allData } = roomsData;

    return (
        <RoomsWrap>
            <RoomsTitle>{allData.length}개 이상의 숙소</RoomsTitle>
            <RoomList {...{ allData }} />
        </RoomsWrap>
    )
}

export default Rooms
