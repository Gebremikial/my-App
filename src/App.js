import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContentOne from './components/ContentOne';
import ContentTwo from './components/ContentTwo';
import ContentThree from './components/ContentThree'; 

function App() {
  return (
    
    <div className="flex flex-col min-h-screen">
      
      <Navbar />
      <main className="flex-grow">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    
          <div className="space-y-6">
            <ContentOne />
            <ContentTwo />
            <ContentThree />
          </div>

        </div>
      </main>

      <Footer />
      
    </div>
  );
}

export default App;