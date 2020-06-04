import React from 'react'
import styled from 'styled-components';
import spiner from 'public/images/earth.svg';

const LoadingSpinerWrap = styled.div`
    .loading-spiner {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
    }
`;

const LoadingSpiner = () => {
    return (
        <LoadingSpinerWrap>
            <img className='loading-spiner' src={spiner} alt="loading-spiner" />
        </LoadingSpinerWrap>
    )
}

export default LoadingSpiner
