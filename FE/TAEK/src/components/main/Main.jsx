import React from 'react'
import styled from 'styled-components';
import MainHeader from './header/MainHeader';
import FilterButtons from './filterButtons/FilterButtons';
import Rooms from './rooms/Rooms';

const MainContentsWrap = styled.div`
    padding: 30px 15%;
    color: #484848;
`;

const Main = () => {
    return (
        <>
            <MainHeader />
            <MainContentsWrap>
                <FilterButtons />
                <Rooms />
            </MainContentsWrap>
        </>
    )
}

export default Main
