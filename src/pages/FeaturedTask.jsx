import React, { useEffect, useState } from 'react';
import Loading from '../component/Loading';
import TaskCard from './TaskCard';

const Featured = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://task-marketplace-server-olive.vercel.app/tasks/featured')
            .then(res => res.json())
            .then(data => {
                setTasks(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <Loading></Loading>;

    return (
        <div className="w-11/12 md:w-10/12 mx-auto my-10">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-sky-300 to-indigo-700 bg-clip-text text-transparent">Featured Tasks</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tasks.map(task => (
                    <TaskCard key={task._id} task={task} />
                ))}
            </div>

        </div>
    );
};

export default Featured;
