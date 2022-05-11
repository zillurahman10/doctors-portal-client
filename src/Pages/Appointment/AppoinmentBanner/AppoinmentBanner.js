import React, { useState } from 'react';
import banner from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppoinmentBanner = ({ date, setDate }) => {

    return (
        <>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='px-12'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        ></DayPicker>
                        <p className='text-center'>{format(date, 'PP')}</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AppoinmentBanner;