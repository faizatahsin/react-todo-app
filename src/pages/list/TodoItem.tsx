import React from 'react';
import { ITodo } from '../../types';

export const TodoItem: React.FC<ITodo> = ({ count, name, status, desc }) => {
  return (
    <div className="text-white font-semibold bg-rose-200 p-5 rounded-md">
      <h1 className="text-gray-900 text-lg mb-2">{name}</h1>
      <div className="flex justify-between mb-2">
        <h1 className="px-5 py-2 bg-rose-500 rounded-md">Count</h1>
        <h1 className="px-5 py-2 bg-rose-500 rounded-md">{count}</h1>
      </div>
      <div className="flex justify-between mb-2">
        <h1 className="px-5 py-2 bg-rose-500 rounded-md">Status</h1>
        <h1 className="px-5 py-2 bg-rose-500 rounded-md">{status ? <h1>Completed</h1> : <h1>Pending</h1>}</h1>
      </div>
      {desc && (
        <div className="">
          <h1 className="text-gray-800">Description</h1>
          <p className="text-gray-500">{desc}</p>
        </div>
      )}
    </div>
  );
};
