// src/components/TodoItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../redux/todoslice';
import { FiTrash2 } from 'react-icons/fi';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleComplete(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className="flex items-center justify-between bg-gray-100 p-3 mb-2 rounded hover:bg-gray-200 transition-colors">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="mr-3 h-5 w-5 text-blue-500"
        />
        <span
          className={`${
            todo.completed ? 'line-through text-gray-500' : 'text-gray-700'
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={handleDelete}
        className="text-red-500 hover:text-red-600 focus:outline-none"
      >
        <FiTrash2 size={20} />
      </button>
    </div>
  );
};

export default TodoItem;
