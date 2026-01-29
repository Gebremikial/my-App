import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-white-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* At the left Brand Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold tracking-tighter text-zinc-950 cursor-pointer">
              MY APP
            </span>
          </div>

          {/* I put Navigation Links in the center */}
          <div className="hidden md:flex space-x-8 items-center">
            <a 
              href="#features" 
              className="text-zinc-500 hover:text-zinc-950 font-medium transition duration-300"
            >
              Features
            </a>
            <a 
              href="#1on1" 
              className="text-zinc-500 hover:text-zinc-950 font-medium transition duration-300"
            >
              1on1
            </a>
            <a 
              href="#pricing" 
              className="text-zinc-500 hover:text-zinc-950 font-medium transition duration-300"
            >
              Pricing
            </a>
            <a 
              href="#articles" 
              className="text-zinc-500 hover:text-zinc-950 font-medium transition duration-300"
            >
              Articles
            </a>
            <a 
              href="#guides" 
              className="text-zinc-500 hover:text-zinc-950 font-medium transition duration-300"
            >
              Guides
            </a>
            <a 
              href="#scrum-poker" 
              className="text-zinc-500 hover:text-zinc-950 font-medium transition duration-300"
            >
              Scrum Poker
            </a>
          </div>

          {/* at the right Side I put Action Buttons */}
          <div className="flex items-center space-x-4">
            <button 
              className="text-zinc-500 hover:text-zinc-950 px-3 py-2 text-sm font-medium transition duration-300"
            >
              Log In
            </button>
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition duration-300 shadow-md"
            >
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}