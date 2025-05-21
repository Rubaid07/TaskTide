import React from 'react';
import Hero from './Hero';
import FeaturedTask from './FeaturedTask';

import Platform from './Platform';
import HowItWorks from './HowItWork';

const Home = () => {
    return (
        <div className='md:my-10 my-5'>
            <Hero></Hero>
            <FeaturedTask></FeaturedTask>
            <HowItWorks></HowItWorks>
            <Platform></Platform>
        </div>
    );
};

export default Home;