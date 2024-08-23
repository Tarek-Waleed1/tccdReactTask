// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
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
