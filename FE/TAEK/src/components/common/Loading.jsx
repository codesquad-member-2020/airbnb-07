import React from 'react'
import styled from 'styled-components';
import spiner from 'public/images/earth.svg';

const LoadingWrap = styled.div`
    .loading-spiner {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const Loading = () => {
    return (
        <LoadingWrap>
            <img className='loading-spiner' src={spiner} alt="loading-spiner" />
        </LoadingWrap>
    )
}

export default Loading
