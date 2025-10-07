import React from 'react';
import Banner from './Banner/Banner';
import MeetRelive from './MeetRelive/MeetRelive';
import SpecialTreatment from './SpecialTreatment/SpecialTreatment';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MeetRelive></MeetRelive>
            <SpecialTreatment/>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;