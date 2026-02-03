import React from 'react';
import { Link } from 'react-router-dom'; // Used for page-to-page navigation
import ThemeToggle from './ThemeToggle';

export default function Navbar({ darkMode, setDarkMode }) {
  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: '1on1', href: '#1on1' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Articles', href: '#articles' },
    { name: 'Guides', href: '#guides' },
    { name: 'Scrum Poker', href: '#scrum-poker' },
  ];

  return (
    /* ADDED: dark:bg-zinc-900 and dark:border-zinc-800 to handle the theme switch */
    <nav className="bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 shadow-sm sticky top-0 z-50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex-shrink-0">
            {/* CHANGED: text-zinc-950 to dark:text-white so the logo is visible in dark mode */}
            <Link to="/" className="text-2xl font-bold tracking-tighter text-zinc-950 dark:text-white">
              MY APP
            </Link>
          </div>

          {/* Navigation Links (Center) */}
          <div className="hidden lg:flex space-x-6 items-center">
            {navLinks.map((link) => (
              /* NOTE: I use <a> here because these are anchor links (#) for the same page */
              <a 
                key={link.name}
                href={link.href} 
                className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white font-medium text-sm transition duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons (Right) */}
          <div className="flex items-center space-x-3">
            {/* UPDATED: ThemeToggle now receives the state props from App.js */}
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            
            {/* CHANGED: Verified these point to "/login" and "/signup" as defined in App.js */}
            <Link 
              to="/login" 
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white px-3 py-2 text-sm font-medium transition duration-300"
            >
              Log In
            </Link>
            
            <Link 
              to="/signup" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition duration-300 shadow-md inline-block"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}