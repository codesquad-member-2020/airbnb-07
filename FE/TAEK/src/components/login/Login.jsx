import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import reactLogo from 'public/images/react-logo.png';
import andLogo from 'public/images/and-logo.png';
import airbnbLogo from 'public/images/airbnb-logo.svg';

const LoginWrap = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const LogoWrap = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 130px;
`;

const ReactLogo = styled.img`
    width: 200px;
    height: 200px;
    animation-name: bingle;
    animation-duration: 6s;
    animation-timing-function:linear;
    animation-iteration-count: infinite;
    @keyframes bingle{
        to { transform: rotate3d(0,0,1,360deg) }
    }
`;

const AndLogo = styled.img`
    position: relative;
    margin: 0 45px;
    top: 30px;
    width: 85px;
    height: 85px;
`;

const AirbnbLogo = styled.img`
    width: 200px;
    height: 200px;
`;

const LoginBtn = styled.div`
    width: 100px;
    height: 50px;
    background-color: ${props => props.theme.reactColor};
    font-size: 18px;
    font-weight: 600;
    border-radius: 8px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.subColor};
    }
    a {
        text-decoration: none;
        color: #fff;
    }
`;

const Login = () => {
    return (
        <LoginWrap>
            <LogoWrap>
                <ReactLogo src={reactLogo} alt='react-logo' />
                <AndLogo src={andLogo} alt='and-logo' />
                <AirbnbLogo src={airbnbLogo} alt='airbnb-logo' />
            </LogoWrap>
            <LoginBtn>
                <Link to='/main'>로그인</Link>
                {/* <a href='https://github.com/login/oauth/authorize?client_id=c2e25fe082feb25b3a02&redirect_uri=http://15.164.35.235/api/github/oauth/callback2&scope=user'>로그인</a> */}
            </LoginBtn>
        </LoginWrap>
    )
}

export default Login
