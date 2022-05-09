import React from 'react';

const InfoCard = ({ img, title, text, bgClass }) => {
    return (
        <div>
            <div class={`card lg:card-side bg-base-100 shadow-xl bg-accent ${bgClass}`}>
                <figure className='pl-5'>
                    <img src={img} alt="Album" />
                </figure>
                <div class="card-body text-white">
                    <h2 class="card-title">{title}</h2>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;