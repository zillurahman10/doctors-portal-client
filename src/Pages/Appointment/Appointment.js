import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import AppoinmentBanner from './AppoinmentBanner/AppoinmentBanner';
import AvailableAppoinmnets from './AvailableAppoinmnets/AvailableAppoinmnets';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
            <AvailableAppoinmnets date={date} setDate={setDate}></AvailableAppoinmnets>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;