// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTodos } from './redux/todoslice';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    dispatch(setTodos(storedTodos));
  }, [dispatch]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <Header />
          <TodoInput />
          <Routes>
            <Route path="/" element={<TodoList filter="all" />} />
            <Route path="/completed" element={<TodoList filter="completed" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
