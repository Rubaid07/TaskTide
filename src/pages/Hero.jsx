import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Hero = () => {
    const slider = [
        {
            id: 1,
            title: "Hire Skilled Freelancers",
            description: "Connect with experienced and talented freelancers across various fields like web development, design, marketing, and more. Get your tasks completed quickly, efficiently, and at a price that fits your budget.",
            image: "https://i.postimg.cc/wBZ7YF26/team-1.jpg"
        },
        {
            id: 2,
            title: "Post Your Task for Free",
            description: "Easily create and post your task without any cost. Let professional freelancers bid on your project, review their profiles, and choose the best one for your needs — all in just a few clicks.",
            image: "https://i.postimg.cc/vmccKCWq/team-2.jpg"
        },
        {
            id: 3,
            title: "Trusted by Thousands",
            description: "Our platform is trusted by thousands of users worldwide. We ensure secure transactions, verified freelancers, and a supportive community to help you achieve your goals effortlessly.",
            image: "https://i.postimg.cc/0ytzc9JK/workplace.jpg"
        }
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <div className="relative w-full h-[550px] md:h-[600px] overflow-hidden rounded-2xl">
            <Slider  {...settings} className="hero-slider">
                {slider.map(slide => (
                    <div key={slide.id}>
                        <div
                            className="relative w-full h-[550px] md:h-[600px] bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${slide.image})`
                            }}
                        >
                            <div className="absolute inset-0 bg-black/60"></div>

                            <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full px-4">
                                <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                                <p className="text-lg text-gray-300 mb-6 max-w-3xl">{slide.description}</p>
                            </div>
                        </div>
                    </div>

                ))}
            </Slider>
        </div>
    );
};

export default Hero;