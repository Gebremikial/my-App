import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/LogIn';
import Signup from './pages/SignUp';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContentOne from './components/ContentOne';
import ContentTwo from './components/ContentTwo';
import ContentThree from './components/ContentThree';

function App() {
  const items = ['React', 'Tailwind', 'Render', 'JavaScript', 'Deployment', 'GitHub'];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const results = items.filter(item =>
      item.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredItems(results);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />

        <Routes>
          {/* LOGIN PAGE */}
          <Route path="/login" element={<Login />} />

          {/* SIGNUP PAGE */}
          <Route path="/signup" element={<Signup />} />

          {/* MAIN HOME PAGE */}
          <Route 
            path="/" 
            element={
              <>
                <div className="bg-white shadow-sm py-4">
                  <SearchBar onSearch={handleSearch} />
                </div>

                <main className="flex-grow">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    
                    {/* Search Results logic */}
                    {searchTerm !== '' && (
                      <div className="mb-10 p-6 bg-blue-50 rounded-lg border border-blue-200">
                        <h2 className="text-xl font-semibold mb-4 text-blue-800">Search Results:</h2>
                        {filteredItems.length > 0 ? (
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {filteredItems.map((item, index) => (
                              <li key={index} className="bg-white p-3 shadow rounded-md border-l-4 border-blue-500">
                                {item}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-500">No matches found for "{searchTerm}"</p>
                        )}
                      </div>
                    )}

                    {/* Content Sections */}
                    <div className="space-y-12">
                      <ContentOne />
                      <ContentTwo />
                      <ContentThree />
                    </div>
                  </div>
                </main>
              </>
            } 
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;