import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";

const ReservationModalMapWrap = styled.div`
    position: relative;
    width: 370px;
    height: 500px;
    z-index: 10;
    .leaflet-control-attribution {
        display: none;
    }
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
                    boxShadow: '0 2px 6px #0000000d, 0 0 0 1px #00000012',
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

