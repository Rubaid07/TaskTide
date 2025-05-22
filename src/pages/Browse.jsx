import React, { useEffect, useState } from 'react';
import TaskCard from './TaskCard';
import Loading from '../component/Loading';

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
    <div className="w-11/12 md:w-10/12 mx-auto my-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
        Browse All Tasks
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map(task => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Browse;
