import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='sm:flex justify-center md:flex justify-center lg:flex justify-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

            <InfoCard img={clock} title={'Opening Hours'} text={'Lorem Ipsum is simply dummy'} bgClass='bg-gradient-to-r from-secondary to-primary'></InfoCard>

            <InfoCard img={marker} title={'Visit our location'} text={'Brooklyn, NY 10036, United States'} bgClass='bg-accent'></InfoCard>

            <InfoCard img={phone} title={'Contact us now'} text={'+000 123 456789'} bgClass='bg-gradient-to-r from-secondary to-primary'></InfoCard>
        </div>
    );
};

export default Info;