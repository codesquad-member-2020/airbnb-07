import React, { useState, useEffect, useRef } from 'react'
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundWrap = styled.div`
    width : 100%;
    height : 100vh;
`;

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
    width : 100%;
    height : 100%;
    background : url('../public/images/bonobono.jpg') no-repeat;
    background-size : 100% 100%;
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
    const timeoutId = useRef();
    timeoutId.current = setTimeout(() => setWait(false), 4000);

    useEffect(() => {
        return () => clearTimeout(timeoutId.current);
    })

    return (
        <NotFoundWrap>
            <NotFoundInner>
                {wait ? <Title>존재하지 않는 페이지 입니다. 메인 페이지로 이동 합니다.</Title> : <Redirect to='/' />}
            </NotFoundInner>
            <Background />
        </NotFoundWrap>
    )
}

export default NotFound
