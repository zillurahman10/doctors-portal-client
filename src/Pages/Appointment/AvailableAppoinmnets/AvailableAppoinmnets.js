import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import Service from './Service';

const AvailableAppoinmnets = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <p className='text-center text-secondary'>Available Appointments on {format(date, 'PP')}</p>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment &&
                <BookingModal
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>}
        </div>
    );
};

export default AvailableAppoinmnets;