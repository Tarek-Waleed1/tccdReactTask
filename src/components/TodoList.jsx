// src/components/TodoList.jsx
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = ({ filter }) => {
  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filteredTodos =
    filter === 'completed'
      ? todos.filter((todo) => todo.completed)
      : todos;

  return (
    <div>
      {filteredTodos.length ? (
        filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <p className="text-center text-gray-500">No tasks found.</p>
      )}
    </div>
  );
};

export default TodoList;
