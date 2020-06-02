import React from 'react'
import { useSelector } from 'react-redux';

const ChargeGraph = ({ style, children }) => {
    const { min, max } = useSelector(({ charge }) => charge);
    const { roomsData } = useSelector(({ rooms }) => rooms);
    const background = children >= min && children <= max ? '#a2a2a2' : '#d8d8d8';

    const prices = roomsData.prices;
    const [priceData] = prices.filter(data => children === data.price);

    return (
        <div
            style={{
                ...style,
                background: background,
                width: 10,
                height: priceData.total / 2,
                bottom: 2,
            }}
        />
    )
}

export default ChargeGraph
