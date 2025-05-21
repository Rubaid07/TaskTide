import React from 'react';
import Hero from './Hero';
import FeaturedTask from './FeaturedTask';
import TopCategories from './HowItWork';

const Home = () => {
    return (
        <div className='md:my-10 my-5'>
            <Hero></Hero>
            <FeaturedTask></FeaturedTask>
            <TopCategories></TopCategories>
        </div>
    );
};

export default Home;