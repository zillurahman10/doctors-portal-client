import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div className='drop-shadow-md'>
            <div className="card w-96 bg-base-100">
                <div className="card-body">
                    <h2 className="card-title flex justify-center">{name}</h2>
                    <p className='text-center'>{
                        slots.length
                            ?
                            <span>{slots[0]}</span>
                            :
                            <span className='text-red-500'>No Slot Available</span>
                    }</p>
                    <p className='text-center'>{slots.length} spaces available</p>
                    <div className="card-actions justify-center">
                        <label
                            disabled={slots.length === 0} className="" style={{
                                width: '190px'
                            }} onClick={() => setTreatment(service)}
                            for="booking-modal" class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary my-2">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;