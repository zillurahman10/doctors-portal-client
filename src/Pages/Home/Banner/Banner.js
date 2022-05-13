import React from 'react';
import bannerImage from '../../../assets/images/chair.png'
import PrimaryButton from '../../../Shared/PrimayrButton/PrimaryButton';

const Banner = () => {
    return (
        <div className=''>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div data-aos="fade-left">
                        <img data-aos="fade-left" src={bannerImage} className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div data-aos="fade-right">
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;