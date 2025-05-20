import React from 'react';
import { Link } from 'react-router';
import tasktideLogo from '../assets/TaskTide.png'; 

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-base-200 rounded-lg shadow-xl">

        <div className="mb-8">
          <img className="mx-auto h-20" src={tasktideLogo} alt="TaskTide Logo" />
        </div>

        <h1 className="text-8xl font-extrabold text-sky-500 mb-4 animate-bounce">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-bold text-base-content">
          Oops! Page Not Found.
        </h2>
        <p className="text-gray-600 mb-6">The page you are looking for doesn't exist or has been moved.</p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/" className="btn btn-lg bg-sky-500 hover:bg-sky-600 text-white">
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;