import React from 'react';

const InfoCard = ({ img, title, text, bgClass }) => {
    return (
        <div style={{ width: '400px' }}>
            <div className={`card lg:card-side bg-base-100 shadow-xl bg-accent ${bgClass}`}>
                <figure className='pt-8 pl-5'>
                    <img src={img} alt="Album" />
                </figure>
                <div className="card-body text-white">
                    <h2 className="card-title">{title}</h2>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;