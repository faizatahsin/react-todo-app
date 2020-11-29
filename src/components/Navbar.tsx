import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <Link className="font-bold" to="/">
        Todo
      </Link>
      <div className="flex space-x-10">
        <Link
          className="text-xl font-semibold bg-gray-800 py-1 px-5 rounded-md hover:bg-gray-700 border border-gray-500"
          to="/create"
        >
          Create
        </Link>
        <Link
          className="font-semibold bg-gray-800 py-1 px-5 rounded-md hover:bg-gray-700 border border-gray-500"
          to="/list"
        >
          List
        </Link>
      </div>
    </header>
  );
};
