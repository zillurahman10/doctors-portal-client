import React from 'react';
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service'

const Services = () => {
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Servies</h3>
                <h2 className='text-4xl font-bold uppercase'>Services We Provide</h2>
            </div>
            <div className='sm:flex justify-center md:flex justify-center lg:flex justify-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <Service img={cavity} title='Cavity Filling'></Service>
                <Service img={fluoride} title='Fluoride Treatment'></Service>
                <Service img={whitening} title='Teeth Whitening'></Service>
            </div>
        </div>
    );
};

export default Services;