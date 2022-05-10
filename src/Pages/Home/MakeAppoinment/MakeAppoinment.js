import React from 'react';
import appoinment from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor.png'
import PrimaryButton from '../../../Shared/PrimayrButton/PrimaryButton';

const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${appoinment})`,
            backgroundSize: 'cover',
            height: '600px'
        }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block' style={{
                position: 'relative',
                bottom: '80px',
            }}>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary'>Appoinment</h3>
                <h2 className='text-3xl text-white'>Make an Appoinment Today</h2>
                <p className=' text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis accusamus tempore hic aspernatur modi sapiente? Deleniti doloribus aspernatur eaque atque pariatur cupiditate, aliquid velit, quibusdam accusamus ut asperiores nihil alias nobis reiciendis beatae temporibus quaerat, fugit aperiam culpa! Assumenda, omnis.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppoinment;