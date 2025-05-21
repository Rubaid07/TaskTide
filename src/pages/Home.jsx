import React from 'react';
import Hero from './Hero';
import FeaturedTask from './FeaturedTask';

const Home = () => {
    return (
        <div className='md:my-10 my-5'>
            <Hero></Hero>
            <FeaturedTask></FeaturedTask>
        </div>
    );
};

export default Home;