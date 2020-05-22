import React from 'react'
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

const ChargeRange = () => {
    return (
        <div>
            <Rheostat
                min={1}
                max={100}
                values={[1, 100]}
            />
        </div>
    )
}

export default ChargeRange
