import React from 'react';
import { FaUsers, FaShieldAlt, FaClock, FaThumbsUp } from 'react-icons/fa';

const highlights = [
  {
    title: 'Trusted by Thousands',
    description: 'Over 10,000 users rely on TaskTide to get work done quickly and securely.',
    icon: <FaUsers className="text-2xl text-sky-500" />,
  },
  {
    title: 'Secure Payments',
    description: 'Your transactions are always safe with end-to-end encrypted payment gateways.',
    icon: <FaShieldAlt className="text-2xl text-sky-500" />,
  },
  {
    title: 'Fast Turnaround',
    description: 'Post tasks and get responses from freelancers within minutes.',
    icon: <FaClock className="text-2xl text-sky-500" />,
  },
  {
    title: 'High Satisfaction',
    description: 'Most users rate their experience 4.8 out of 5. We care about your success.',
    icon: <FaThumbsUp className="text-2xl text-sky-500" />,
  },
];

const Platform = () => {
  return (
    <section className="my-16 px-4 md:px-10">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-sky-300 to-indigo-700 bg-clip-text text-transparent">Why Choose TaskTide?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, i) => (
          <div
            key={i}
            className="bg-base-200  p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <div className="mb-3">{item.icon}</div>
            <h3 className="font-semibold text-lg text-sky-400 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Platform;
