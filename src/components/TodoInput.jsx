// src/components/TodoInput.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoslice';
import { v4 as uuidv4 } from 'uuid';

const TodoInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(
        addTodo({
          id: uuidv4(),
          text,
          completed: false,
        })
      );
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        className="flex-grow border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:border-blue-500"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Add
      </button>
    </form>
  );
};

export default TodoInput;
