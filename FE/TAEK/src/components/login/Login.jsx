import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const ReactLogo = styled.div`
    width: 200px;
    height: 200px;
    background: url('../public/images/react-logo.png') no-repeat;
    background-size: 100% 100%;
    animation-name: bingle;
    animation-duration: 6s;
    animation-timing-function:linear;
    animation-iteration-count: infinite;
    @keyframes bingle{
        to { transform: rotate3d(0,0,1,360deg) }
    }
`;

const AndLogo = styled.div`
    position: relative;
    margin: 0 45px;
    top: 30px;
    width: 85px;
    height: 85px;
    background: url('../public/images/and-logo.png') no-repeat;
    background-size: 100% 100%;
`;

const AirbnbLogo = styled.div`
    width: 200px;
    height: 200px;
    background: url('../public/images/airbnb-logo.svg') no-repeat;
    background-size: 100% 100%;
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
    & a {
        text-decoration: none;
        color: #fff;
    }
`;

const Login = () => {
    return (
        <LoginWrap>
            <LogoWrap>
                <ReactLogo />
                <AndLogo />
                <AirbnbLogo />
            </LogoWrap>
            <LoginBtn>
                <Link to='/main'>로그인</Link>
                {/* <a href='https://github.com/login/oauth/authorize?client_id=c2e25fe082feb25b3a02&redirect_uri=http://15.164.35.235/api/github/oauth/callback2&scope=user'>로그인</a> */}
            </LoginBtn>
        </LoginWrap>
    )
}

export default Login
