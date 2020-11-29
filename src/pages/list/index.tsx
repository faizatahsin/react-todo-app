import React from 'react';
import { TodoItem } from './TodoItem';

const ListTodo = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">List of Todo</h1>
      <div className="flex flex-col space-y-6">
        <TodoItem name="faiza tahsin" count={30} status={false} desc="Nothing special !!💖" />
        <TodoItem name="arif" count="30" status={true} />
        <TodoItem name="faiza tahsin" count={30} status={false} desc="Nothing special !!💖" />
      </div>
    </div>
  );
};

export default ListTodo;
