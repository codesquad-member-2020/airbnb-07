import React from 'react'
import styled from 'styled-components';
import MainHeader from './header/MainHeader';
import FilterButtons from './filterButtons/FilterButtons';

const MainContentsWrap = styled.div`
    padding: 30px 10%;
`;

const Main = () => {
    return (
        <>
            <MainHeader />
            <MainContentsWrap>
                <FilterButtons />
            </MainContentsWrap>
        </>
    )
}

export default Main
