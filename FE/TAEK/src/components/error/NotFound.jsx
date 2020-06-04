import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import useSetTimeout from 'hooks/useSetTimeout';
import styled from 'styled-components';
import bonobono from 'public/images/bonobono.jpg';

const NotFoundWrap = styled.div`
    width : 100%;
    height : 100vh;
`;

const Background = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
    width : 100%;
    height : 100%;
    filter: blur(5px);
    -webkit-filter: blur(5px);
`;

const NotFoundInner = styled.div`
    width : 100%;
    height : 100%;
    background-color : #00000099;
    display : flex;
    align-items : center;
    justify-content : center;
`;

const Title = styled.div`
    font-size : 55px;
    font-weight : 600;
    margin-bottom : 80px;
    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);   
    -webkit-background-clip: text;
    color: transparent;
`;

const NotFound = () => {
    const [wait, setWait] = useState(true);

    const timeoutCallback = () => setWait(false);
    useSetTimeout(timeoutCallback, 4000);

    return (
        <NotFoundWrap>
            <NotFoundInner>
                {wait ? <Title>존재하지 않는 페이지 입니다. 로그인 페이지로 이동 합니다.</Title> : <Redirect to='/' />}
            </NotFoundInner>
            <Background src={bonobono} alt='bonobono' />
        </NotFoundWrap>
    )
}

export default NotFound
