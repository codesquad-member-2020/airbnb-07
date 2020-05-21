import React from 'react'
import styled from 'styled-components';
import MainHeader from './MainHeader';
import DatePicker from './DatePicker';
import PersonFilter from './PersonFilter';
import ChargeFilter from './ChargeFilter';

const MainContentsWrap = styled.div`
    padding: 30px 10%;
`;

const MainContentsTitleWrap = styled.div`
    display: flex;
    position: relative;
    height: 39.98px;
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        border-bottom: 0.5px solid #bdc3c7;
        top: calc(100% + 15px);
        left: 0;
    }
    & > * {
       margin-right: 20px;
    }
`;

const Main = () => {
    return (
        <>
            <MainHeader />
            <MainContentsWrap>
                <MainContentsTitleWrap>
                    <DatePicker />
                    <PersonFilter />
                    <ChargeFilter />
                </MainContentsTitleWrap>
            </MainContentsWrap>
        </>
    )
}

export default Main
