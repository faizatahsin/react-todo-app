import React from 'react';

interface ITodo {
  name: string;
  count: number;
}

export const Todo: React.FC<ITodo> = (props) => {
  return (
    <div>
      <div>Name : {props.name}</div>
      <div>Count : {props.count}</div>
    </div>
  );
};
