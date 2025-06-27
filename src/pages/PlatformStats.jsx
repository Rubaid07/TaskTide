import React from 'react';
import CountUp from 'react-countup';

const PlatformStats = () => {
    return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-center mb-3 text text-gray-600/90">
          TaskTide At a Glance 🌊
        </h2>
        <p className="text-base-content/70 mb-10">
          Empowering thousands of users...
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-semibold text-xl">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text">
              <CountUp end={12} enableScrollSpy='true'></CountUp>K+
            </span>
            <p className='text-base-content/70'>Tasks Posted</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text"><CountUp end={8} enableScrollSpy='true'></CountUp>K+</span>
            <p className='text-base-content/70'>Successful Bids</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text"><CountUp end={5} enableScrollSpy='true'></CountUp>K+</span>
            <p className='text-base-content/70'>Active Users</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text"><CountUp end={95} enableScrollSpy='true'></CountUp>%</span>
            <p className='text-base-content/70'>Positive Feedback</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformStats;