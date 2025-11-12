import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you use React Router

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-center px-4">
      
      {/* Large Error Code */}
      <h1 className="text-9xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-widest select-none">
        404
      </h1>
      
      {/* Background Text for visual depth */}
      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300 px-2 text-sm rounded rotate-12 absolute shadow-lg">
        Page Not Found
      </div>
      
      {/* Main Message */}
      <p className="mt-8 text-xl font-medium text-gray-700 dark:text-gray-400">
        Oops! The page you're looking for doesn't exist.
      </p>
      
      {/* Call to Action (CTA) */}
      <Link
        to="#hero" // Link back to the home page
        className="mt-6 inline-block px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow transition duration-200 ease-in-out transform hover:scale-105"
      >
        Go Home
      </Link>
      
    </div>
  );
};