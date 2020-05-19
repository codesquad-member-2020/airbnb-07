import React from 'react'
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
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    border-radius: 8px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
`;

const Login = () => {
    return (
        <LoginWrap>
            <LogoWrap>
                <ReactLogo />
                <AndLogo />
                <AirbnbLogo />
            </LogoWrap>
            <LoginBtn>로그인</LoginBtn>
        </LoginWrap>
    )
}

export default Login
