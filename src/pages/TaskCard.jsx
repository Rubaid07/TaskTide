import React from 'react';
import { FaCalendarAlt, FaTag, FaUserAlt } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router';

const TaskCard = ({ task }) => {
  const { title, category, deadline, budget, name, _id, photo } = task;

  return (
    <div className="bg-base-100 border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300">
        
      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      <div className="flex justify-between items-center mb-3">
        <span className="text-xs bg-blue-200 text-blue-500 px-2 py-1 rounded-full flex gap-1 items-center font-medium">
          <FaTag className="text-blue-500" />
          {category}</span>
        <span className="text-sm font-bold text-green-600">${budget}</span>
      </div>

      <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
          <FaCalendarAlt className="inline-block text-gray-500" />
        <span className="font-medium">
           Deadline:</span>{' '}
        {new Date(deadline).toLocaleDateString()}
      </p>

      <div className="flex justify-between items-center mt-4 pt-3 border-t">
        <p className="text-sm font-medium flex justify-center gap-3 items-center">
          {
            photo? (
              <img className='h-10 rounded-full' src={photo} alt="" />
            ) : (
              <FaUserAlt className='h-10 rounded-full' />
            )
          }
          
           {name}</p>
        <Link
          to={`/task/${_id}`}
          className="text-sm text-sky-600 hover:underline flex items-center gap-2 font-medium"
        >
          View Details <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
};

export default TaskCard;
