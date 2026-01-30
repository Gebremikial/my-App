import React, { useState } from 'react';
import { Search } from 'lucide-react'; // Optional: Install lucide-react for the icon

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <div className="relative w-full max-w-md mx-auto mt-10">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="w-5 h-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm"
        placeholder="Search projects, files..."
        value={query}
        onChange={handleInputChange}
      />
      <button 
        className="text-white absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 transition-colors"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;