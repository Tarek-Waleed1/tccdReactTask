// src/components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="flex justify-around mb-4 text-sm sm:text-base">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? 'text-blue-500 border-b-2 border-blue-500 pb-1'
            : 'text-gray-500 hover:text-blue-500'
        }
      >
        All Tasks
      </NavLink>
      <NavLink
        to="/completed"
        className={({ isActive }) =>
          isActive
            ? 'text-blue-500 border-b-2 border-blue-500 pb-1'
            : 'text-gray-500 hover:text-blue-500'
        }
      >
        Completed Tasks
      </NavLink>
    </nav>
  );
};

export default Header;
