import React, { useState } from 'react'
import styled from 'styled-components';
import 'rheostat/css/rheostat.css';
import 'react-dates/lib/css/_datepicker.css';
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import cssInterface from 'react-with-styles-interface-css';
import RheostatDefaultTheme from 'rheostat/lib/themes/DefaultTheme';
import ReactDatesDefaultTheme from 'react-dates/lib/theme/DefaultTheme';
import Rheostat from "rheostat";

ThemedStyleSheet.registerInterface(cssInterface);
ThemedStyleSheet.registerTheme({
    ...RheostatDefaultTheme,
    ...ReactDatesDefaultTheme,
});

const RheostatWrap = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    width: 80%;
    transform: translate(-50%, -50%);
    .DefaultProgressBar_progressBar {
        background-color: #a2a2a2;
    }
    .DefaultProgressBar_background__horizontal {
        height: 2px;
        top: 1px;
    }
    .DefaultHandle_handle {
        border-radius: 50%;
    }
    .DefaultHandle_handle__horizontal {
        margin-left: -12px;
        top: -7px;
    }
    .DefaultBackground {
        height: 1px;
        border: none;
        border-bottom: 2px solid #d8d8d8;
    }
    .DefaultBackground_background__horizontal {
        height: 1px;
        top: 0px;
        left: 0px;
    }
`;

function PitComponent({ style, children }) {
    return (
        <div
            style={{
                ...style,
                background: "#a2a2a2",
                width: 7,
                height: children / 10000,
                bottom: 2,
            }}
        />
    );
}

const ChargeRange = () => {
    const [min, setMin] = useState(12000);
    const [max, setMax] = useState(1000000);

    const handleChange = e => {

    };

    const handleValuesUpdated = ({ values }) => {
        setMin(values[0]);
        setMax(values[1]);
    };

    return (
        <RheostatWrap>
            <Rheostat
                min={12000}
                max={1000000}
                values={[12000, 1000000]}
                pitComponent={PitComponent}
                pitPoints={[
                    50000, 80000, 300000, 560000, 700000, 900000
                ]}
                onChange={handleChange}
                onValuesUpdated={handleValuesUpdated}
            />
            min: {min}, max: {max === 1000000 ? '1000000+' : max}
        </RheostatWrap>
    )
}

export default ChargeRange
