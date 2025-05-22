import React, { useEffect, useState } from 'react';
import TaskCard from './TaskCard';
import Loading from '../component/Loading';
import { Typewriter } from 'react-simple-typewriter';

const Browse = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('http://localhost:3000/tasks')
      .then(res => res.json())
      .then(data => {
        setTasks(data)
        setLoading(false);
      });
  }, []);
  if (loading) return <Loading></Loading>;

  return (
    <div className="md:w-10/12 mx-auto my-12 px-4">
      <h2 className="md:text-3xl text-2xl font-bold w-max mb-8 bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
  <Typewriter
    words={['Browse All Tasks', 'Find Your Next Opportunity ', 'Start Bidding Today! ']}
    loop={0}
    cursor
    cursorStyle="_"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1500}
  />
</h2>
<p className="text-center text-gray-400 mb-8">
  Explore a wide range of freelance tasks across different categories. Pick a project that fits your skills and start bidding now!
</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map(task => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Browse;
