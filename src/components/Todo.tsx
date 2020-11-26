import React from 'react';

interface ITodo {
  name: string;
  count: number;
}

export const Todo: React.FC<ITodo> = ({ count, name }) => {
  return (
    <div>
      <div>Name : {name}</div>
      <div>Count : {count}</div>
    </div>
  );
};
