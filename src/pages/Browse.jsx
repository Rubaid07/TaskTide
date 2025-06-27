// src/pages/Browse.jsx
import React, { useEffect, useState } from 'react';
import TaskCard from './TaskCard';
import Loading from '../component/Loading';
import { Typewriter } from 'react-simple-typewriter';

const Browse = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectCategory, setSelectCategory] = useState('')

  useEffect(() => {
    fetch('https://task-marketplace-server-olive.vercel.app/tasks')
      .then(res => res.json())
      .then(data => {
        setTasks(data)
        setLoading(false);
      });
  }, []);
  if (loading) return <Loading></Loading>;

  const filterTask = selectCategory === 'All' || !selectCategory
    ? tasks
    : tasks.filter(task => task.category === selectCategory);

  return (
    <div className="md:w-10/12 mx-auto my-12 px-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <h2 className="md:text-3xl text-2xl font-bold text">
          <Typewriter
            words={['Browse All Tasks', 'Find Your Next Opportunity', 'Start Bidding Today']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <div className="flex items-center space-x-2">
          <label className="font-semibold text-gray-400 whitespace-nowrap">Filter by Category:</label>
          <select
            value={selectCategory}
            onChange={(e) => setSelectCategory(e.target.value)}
            className="select select-sm  w-full"
          >
            <option value="All">All</option>
            <option value="Web Development">Web Development</option>
            <option value="Design">Design</option>
            <option value="Writing">Writing</option>
            <option value="Data Entry">Data Entry</option>
            <option value="Marketing">Marketing</option>
            <option value="Customer Service">Customer Service</option>
          </select>
        </div>
      </div>
      <p className="text-center text-gray-400 mb-8">
        Explore a wide range of freelance tasks across different categories. Pick a project that fits your skills and start bidding now!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterTask.map(task => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Browse;
