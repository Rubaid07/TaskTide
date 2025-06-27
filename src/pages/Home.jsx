// src/pages/Home.jsx
import React from 'react';
import Hero from './Hero';
import FeaturedTask from './FeaturedTask';
import Platform from './Platform';
import HowItWorks from './HowItWork';
import PlatformStats from './PlatformStats';

const Home = () => {
    return (
        <div className='md:my-10 my-5 space-y-16'>
            <Hero></Hero>
            <FeaturedTask></FeaturedTask>
            <HowItWorks></HowItWorks>
            <PlatformStats></PlatformStats>
            <Platform></Platform>
        </div>
    );
};

export default Home;