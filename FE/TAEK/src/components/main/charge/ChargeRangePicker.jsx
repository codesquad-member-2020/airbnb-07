import React from 'react'
import { useDispatch } from 'react-redux';
import { minCharge, maxCharge } from 'store/modules/charge/chargeAction';
import styled from 'styled-components';
import 'rheostat/css/rheostat.css';
import 'react-dates/lib/css/_datepicker.css';
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import cssInterface from 'react-with-styles-interface-css';
import RheostatDefaultTheme from 'rheostat/lib/themes/DefaultTheme';
import ReactDatesDefaultTheme from 'react-dates/lib/theme/DefaultTheme';
import Rheostat from "rheostat";
import { MAIN } from 'constants/constant';
import ChargeGraph from './ChargeGraph';

ThemedStyleSheet.registerInterface(cssInterface);
ThemedStyleSheet.registerTheme({
    ...RheostatDefaultTheme,
    ...ReactDatesDefaultTheme,
});

const RheostatWrap = styled.div`
    width: 100%;
    .DefaultProgressBar_progressBar {
        background-color: #a2a2a2;
    }
    .DefaultProgressBar_background__horizontal {
        height: 2px;
        top: 1px;
    }
    .DefaultHandle_handle {
        border-radius: 50%;
        cursor: pointer;
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

const ChargeRangePicker = () => {
    const dispatch = useDispatch();
    const handleValuesUpdated = ({ values }) => {
        const [updateMin, updateMax] = values;
        dispatch(minCharge(updateMin));
        dispatch(maxCharge(updateMax));
    };

    return (
        <RheostatWrap>
            <Rheostat
                min={MAIN.CHARGE.MIN_CHARGE}
                max={MAIN.CHARGE.MAX_CHARGE}
                values={[MAIN.CHARGE.MIN_CHARGE, MAIN.CHARGE.MAX_CHARGE]}
                pitComponent={ChargeGraph}
                pitPoints={[
                    // 임시 가격 데이터
                    50000, 200000, 300000, 500000, 700000, 900000
                ]}
                onValuesUpdated={handleValuesUpdated}
            />
        </RheostatWrap>
    )
}

export default ChargeRangePicker
