import React from 'react'
import { useSelector } from 'react-redux';

import { prices } from 'mock/mockData';

const ChargeGraph = ({ style, children }) => {
    const { min, max } = useSelector(({ charge }) => charge);
    const background = children >= min && children <= max ? '#a2a2a2' : '#d8d8d8';

    const [priceData] = prices.filter(data => children === data.price);

    return (
        <div
            style={{
                ...style,
                background: background,
                width: 7,
                height: priceData.total,
                bottom: 2,
            }}
        />
    )
}

export default ChargeGraph
