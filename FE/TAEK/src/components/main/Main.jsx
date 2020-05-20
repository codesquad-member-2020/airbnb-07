import React, { useState } from 'react'
import moment from "moment";
import Header from './Header';
import DatePicker from './DatePicker';

const Main = () => {
    const [date, setDate] = useState(moment());

    return (
        <>
            <Header />
            <DatePicker />
        </>
    )
}

export default Main
