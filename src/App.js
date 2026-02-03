import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import InfoCard from './components/InfoCard';
import ContentOne from './components/ContentOne';
import ContentTwo from './components/ContentTwo';
import ContentThree from './components/ContentThree';

function App() {
  const items = ['React', 'Tailwind', 'Render', 'JavaScript', 'Deployment', 'GitHub'];
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  // --- THEME STATE ---
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const results = items.filter(item =>
      item.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredItems(results);
  };

  return (
    <Router>
      {/* Global Wrapper for Dark Mode Background */}
      <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 transition-colors duration-500 flex flex-col">
        
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          
          {/* 1. NEW WELCOME ROUTE */}
          <Route path="/welcome" element={
            <div className="flex-grow flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-black text-blue-600 dark:text-blue-400 animate-bounce">
                Welcome to Poker Play.
              </h1>
            </div>
          } />

          <Route path="/" element={
            <>
              <div className="bg-white dark:bg-zinc-900 border-b dark:border-zinc-800 py-4 px-4">
                <div className="max-w-7xl mx-auto flex justify-center">
                  <div className="w-full max-w-2xl">
                    <SearchBar onSearch={handleSearch} />
                  </div>
                </div>
              </div>

              <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                  
                  {searchTerm !== '' && (
                    <div className="mb-10 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h2 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-300">Search Results:</h2>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {filteredItems.map((item, index) => (
                          <li key={index} className="bg-white dark:bg-zinc-800 p-3 shadow rounded-md border-l-4 border-blue-500 font-medium">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">
                      Explore Our Features
                    </h2>
                    <InfoCard />
                  </div>

                  <div className="space-y-20">
                    <ContentOne />
                    <ContentTwo />
                    <ContentThree />
                  </div>
                </div>
              </main>
            </>
          } />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;