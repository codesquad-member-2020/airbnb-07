import React from 'react'
import { useSelector } from 'react-redux';

const ChargeGraph = ({ style, children }) => {
    const { min, max } = useSelector(({ charge }) => charge);
    const background = children >= min && children <= max ? '#a2a2a2' : '#d8d8d8';

    return (
        <div
            style={{
                ...style,
                background: background,
                width: 7,
                height: children / 10000,
                bottom: 2,
            }}
        />
    )
}

export default ChargeGraph
