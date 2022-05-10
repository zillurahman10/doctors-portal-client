import React from 'react';
import HomeReview from './HomeReview';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'

const HomeReviews = () => {
    return (
        <div className='py-28 px-12'>
            <h3 className='text-primary'>Testimonial</h3>
            <h2 className='text-3xl pb-28'>What Our Patients Says</h2>
            <div className='sm:flex justify-center md:flex justify-center lg:flex justify-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <HomeReview img={people1}></HomeReview>
                <HomeReview img={people2}></HomeReview>
                <HomeReview img={people3}></HomeReview>
            </div>
        </div>
    );
};

export default HomeReviews;