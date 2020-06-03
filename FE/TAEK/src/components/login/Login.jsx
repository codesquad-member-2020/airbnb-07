import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import reactLogo from 'public/images/react-logo.png';
import andLogo from 'public/images/and-logo.png';
import airbnbLogo from 'public/images/airbnb-logo.svg';

import { setCookie } from 'utils/util';
import { COMMON } from 'constants/constant';

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
    animation-timing-function: linear;
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
    const testLoginClick = () => setCookie(COMMON.TOKEN_KEY, 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyRW1haWwiOiJcImd1c3duczE2NTlAZ21haWwuY29tXCIifQ.Vv1Wok3UbMpF4ghbB2i6aGdh53HoazhVznmKAQnuijs', 14);

    return (
        <LoginWrap>
            <LogoWrap>
                <ReactLogo src={reactLogo} alt='react-logo' />
                <AndLogo src={andLogo} alt='and-logo' />
                <AirbnbLogo src={airbnbLogo} alt='airbnb-logo' />
            </LogoWrap>
            <LoginBtn onClick={testLoginClick}>
                <Link to='/'>Git Login</Link>
            </LoginBtn>
            {/* <LoginBtn>
                <a href={process.env.OAUTH_URL}>Git Login</a>
            </LoginBtn> */}
        </LoginWrap>
    )
}

export default Login
