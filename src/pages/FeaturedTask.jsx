import React, { useEffect, useState } from 'react';
import Loading from '../component/Loading';
import TaskCard from './TaskCard';
import useAxiosSecure from '../hooks/useAxiosSecure';

const FeaturedTask = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/tasks/featured')
            .then(res => {
                setTasks(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching featured tasks:", err);
                setLoading(false);
            });
    }, []);


    if (loading) return <Loading></Loading>;

    return (
        <div className="w-11/12 md:w-10/12 mx-auto my-10">
            <h2 className="text-3xl font-bold text-center mb-12 text text-gray-600/90">
                Featured Tasks
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tasks.map(task => (
                    <TaskCard key={task._id} task={task} />
                ))}
            </div>

        </div>
    );
};

export default FeaturedTask;
