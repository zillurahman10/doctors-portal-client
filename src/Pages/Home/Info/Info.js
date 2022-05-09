import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center'>

            <InfoCard img={clock} title={'Opening Hours'} text={'Lorem Ipsum is simply dummy text'} bgClass=''></InfoCard>

            <InfoCard img={marker} title={'Visit our location'} text={'Brooklyn, NY 10036, United States'} bgClass='bg-accent'></InfoCard>

            <InfoCard img={phone} title={'Contact us now'} text={'+000 123 456789'} bgClass=''></InfoCard>
        </div>
    );
};

export default Info;