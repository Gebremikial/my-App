import React from 'react';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-zinc-200 
                 hover:ring-2 ring-blue-500 transition-all duration-300 flex items-center justify-center"
      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {/* If it's dark, show Sun. If it's light, show Moon. */}
      {darkMode ? (
        <span className="text-xl">☀️</span>
      ) : (
        <span className="text-xl">🌙</span>
      )}
    </button>
  );
};

export default ThemeToggle;