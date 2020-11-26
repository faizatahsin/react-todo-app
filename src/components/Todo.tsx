import React from 'react';

interface ITodo {
  name: string;
  count: number | string;
  status: boolean;
  desc?: string;
}

export const Todo: React.FC<ITodo> = ({ count, name, status, desc }) => {
  return (
    <div className="m-5 text-white font-semibold bg-rose-200 p-5 rounded-md">
      <div className="flex justify-between mb-2">
        <h1 className="px-5 py-2 bg-rose-500 rounded-md">Name</h1>
        <h1 className="px-5 py-2 bg-rose-500 rounded-md capitalize">{name}</h1>
      </div>
      <div className="flex justify-between mb-2">
        <h1 className="px-5 py-2 bg-rose-500 rounded-md">Count</h1>
        <h1 className="px-5 py-2 bg-rose-500 rounded-md">{count}</h1>
      </div>
      <div className="flex justify-between mb-2">
        <h1 className="px-5 py-2 bg-rose-500 rounded-md">Status</h1>
        <h1 className="px-5 py-2 bg-rose-500 rounded-md">{status ? <h1>Completed</h1> : <h1>Uncompleted</h1>}</h1>
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
