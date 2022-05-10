import React from 'react';
import Banner from '../Banner/Banner';
import HomeReviews from '../HomeReviews/HomeReviews';
import Info from '../Info/Info';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppoinment></MakeAppoinment>
            <HomeReviews></HomeReviews>
        </div>
    );
};

export default Home;