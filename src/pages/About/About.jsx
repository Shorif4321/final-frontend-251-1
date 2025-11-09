import React from 'react';
import Reviews from '../Home/Reviews/Reviews';
import SpecialTreatment from '../Home/SpecialTreatment/SpecialTreatment';
import Experts from './Experts/Experts';

const About = () => {
    return (
        <div className='mt-10'>
            <Experts></Experts>
            <SpecialTreatment/>
            <Reviews></Reviews>
        </div>
    );
};

export default About;