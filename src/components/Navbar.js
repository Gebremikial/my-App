import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: '1on1', href: '#1on1' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Articles', href: '#articles' },
    { name: 'Guides', href: '#guides' },
    { name: 'Scrum Poker', href: '#scrum-poker' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-zinc-950">
              MY APP
            </Link>
          </div>

          {/* Navigation Links (Center) */}
          <div className="hidden lg:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-zinc-500 hover:text-zinc-950 font-medium text-sm transition duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons (Right) */}
          <div className="flex items-center space-x-3">
            <Link 
              to="/login" 
              className="text-zinc-500 hover:text-zinc-950 px-3 py-2 text-sm font-medium transition duration-300"
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