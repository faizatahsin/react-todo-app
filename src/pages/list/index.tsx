import React from 'react';
import { ITodo } from '../../types';
import { TodoItem } from './TodoItem';

interface props {
  todos: ITodo[];
}

const ListTodo: React.FC<props> = ({ todos }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">List of Todo</h1>

      <button className="bg-gray-900 text-white font-semibold px-5 py-2 mb-5 rounded-md focus:outline-none">
        Create Todo
      </button>

      <div className="flex flex-col space-y-6">
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <TodoItem key={index} name={todo.name} count={todo.count} status={todo.status} desc={todo.desc} />
          ))
        ) : (
          <p>No todos found!!</p>
        )}
      </div>
    </div>
  );
};

export default ListTodo;
