import React from 'react';
import { FaCalendarAlt, FaTag, FaUserAlt } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router';

const TaskCard = ({ task }) => {
  const { title, category, deadline, budget, name, _id, photo } = task;

  const isExpired = new Date(deadline) < new Date();

  return (
    <div className="bg-base-100 border border-base-300 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300">

      <h3 className="text-lg font-semibold mb-2 text">{title}</h3>

       <div className="flex justify-between items-center mb-5">
        <span className="text-xs bg-blue-200 text-blue-500 px-2 py-1 rounded-full flex gap-1 items-center font-medium">
                  <FaTag className="text-blue-500" />
                  {category}</span>
        <span className="text-sm font-bold">${budget}</span>
      </div>

      <div className='flex justify-between items-center'>
        <p className="text-sm text flex items-center gap-2">
        <FaCalendarAlt className="inline-block text" />
        <span className="font-medium">
          Deadline:</span>{' '}
        {new Date(deadline).toLocaleDateString()}
      </p>
      {isExpired && (
        <span className="text-xs bg-red-100 text-red-500 px-2 py-1 rounded-full font-semibold">
          Expired
        </span>
      )}
      </div>

      <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-700">
        <p className="text-sm font-medium flex justify-center gap-3 items-center text">
          {
            photo ? (
              <img className='h-10 rounded-full' src={photo} alt="" />
            ) : (
              <FaUserAlt className='h-10 rounded-full' />
            )
          }

          {name}</p>
        <Link to={`/task/${_id}`} className="text-sm text-[#4ba5dc] hover:underline flex items-center gap-2 font-medium">
        View Details <FaArrowRightLong />
      </Link>
      </div>
    </div>
  );
};

export default TaskCard;
