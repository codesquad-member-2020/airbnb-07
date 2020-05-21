import React from 'react'
import styled from 'styled-components';
import MainHeader from './MainHeader';
import DatePicker from './DatePicker';

const MainContentsWrap = styled.div`
    padding: 30px 30px;
`;

const MainContentsTitleWrap = styled.div`
    display: flex;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        border: 0.5px solid #bdc3c7;
        top: calc(100% + 15px);
        left: 0;
    }
`;

const Main = () => {
    return (
        <>
            <MainHeader />
            <MainContentsWrap>
                <MainContentsTitleWrap>
                    <DatePicker />
                </MainContentsTitleWrap>
            </MainContentsWrap>
        </>
    )
}

export default Main
