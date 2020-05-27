import React from 'react'
import spiner from 'public/images/earth.svg';

const Loading = () => {
    return (
        <>
            <img className='loading-spiner' src={spiner} alt="loading-spiner" />
        </>
    )
}

export default Loading
