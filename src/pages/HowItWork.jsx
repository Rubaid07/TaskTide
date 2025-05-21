import React from 'react';
import {
  FaClipboardList,
  FaGavel,
  FaHandshake,
  FaCheckCircle,
  FaChartLine,
  FaComments
} from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaClipboardList className="text-4xl text-sky-500 mb-3" />,
      title: 'Post Your Task',
      description: 'Create a task with title, deadline, and budget in minutes.',
    },
    {
      icon: <FaGavel className="text-4xl text-sky-500 mb-3" />,
      title: 'Receive Bids',
      description: 'Freelancers bid based on skill and your task requirements.',
    },
    {
      icon: <FaHandshake className="text-4xl text-sky-500 mb-3" />,
      title: 'Hire the Best',
      description: 'Choose the right freelancer after comparing offers.',
    },
    {
      icon: <FaCheckCircle className="text-4xl text-sky-500 mb-3" />,
      title: 'Get it Done',
      description: 'Track progress and receive your work on time.',
    },
    {
      icon: <FaComments className="text-4xl text-sky-500 mb-3" />,
      title: 'Chat & Collaborate',
      description: 'Use built-in messaging to communicate and share files.',
    },
    {
      icon: <FaChartLine className="text-4xl text-sky-500 mb-3" />,
      title: 'Review & Grow',
      description: 'Leave feedback and improve your freelancer network.',
    },
  ];

  return (
    <section className="my-20 px-4 md:px-10">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-sky-300 to-indigo-700 bg-clip-text text-transparent">
  How It Works
</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((card, index) => (
          <div
            key={index}
            className="bg-base-100 border border-gray-200 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition"
          >
            {card.icon}
            <h3 className="text-lg font-semibold text-sky-500 mb-2">{card.title}</h3>
            <p className="text-sm text-gray-400">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
