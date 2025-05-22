// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
          TrackIt
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-lg">
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400">Home</Link>
          <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400">About</Link>
          <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400">Contact</Link>
          
   
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4 text-lg">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-700 dark:text-gray-300">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block text-gray-700 dark:text-gray-300">About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-gray-700 dark:text-gray-300">Contact</Link>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
