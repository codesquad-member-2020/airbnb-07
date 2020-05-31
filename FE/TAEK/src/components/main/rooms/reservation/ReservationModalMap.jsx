import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";

const ReservationModalMapWrap = styled.div`
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: 475px;
    width: 400px;
    height: 500px;
    z-index: 10;
`;

const CitiInfo = styled.div`
  height: 40px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
`;

const ReservationModalMap = ({ roomData }) => {
    const { hotelName, latitude, longitude } = roomData;

    const cities = [
        {
            name: hotelName,
            latitude: latitude,
            longitude: longitude,
            color: '#000',
        },
    ];

    const bounds = [[latitude, longitude]];

    return (
        <ReservationModalMapWrap>
            <Map
                bounds={bounds}
                boundsOptions={{
                    padding: [40, 40]
                }}
                style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: '5px',
                }}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {cities.map(city => (
                    <Marker
                        key={city.name}
                        position={[city.latitude, city.longitude]}
                        onClick={() => console.log("onClick")}
                    >
                        <Popup closeButton={false}>
                            <CitiInfo color={city.color}>{city.name}</CitiInfo>
                        </Popup>
                    </Marker>
                ))}
            </Map>
        </ReservationModalMapWrap>
    )
}

export default ReservationModalMap

