import React from 'react';

const HomeReview = ({ img }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                </div>
                <div className="avatar pl-8 pb-8">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} />
                    </div>
                    <h3 className='flex items-center pl-8 font-bold'>Lorem, ipsum.</h3>
                </div>
            </div>
        </div>
    );
};

export default HomeReview;