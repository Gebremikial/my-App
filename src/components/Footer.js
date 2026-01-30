import React from 'react';

export default function Footer() {

  const productLinks = ['Features', 'Pricing', 'Guides'];
  const companyLinks = ['Scrum Poker', 'Articles', 'Contact'];

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
          
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2">
            
              <div className="w-8 h-8 bg-zinc-950 rounded-lg"></div>
              <span className="text-xl font-bold tracking-tighter text-zinc-950">
                MYAPP
              </span>
            </div>
            <p className="mt-4 text-zinc-500 text-sm leading-relaxed max-w-xs">
              Building the future of web interfaces with precision and speed.
            </p>
          </div>

          <div>
            <h3 className="text-zinc-950 font-semibold text-sm">Product</h3>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-zinc-500 hover:text-zinc-950 text-sm transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-zinc-950 font-semibold text-sm">Company</h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-zinc-500 hover:text-zinc-950 text-sm transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="text-zinc-950 font-semibold text-sm">Subscribe</h3>
            <p className="mt-2 text-zinc-500 text-sm">Get the latest updates.</p>
            <form className="mt-4 flex max-w-sm">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="w-full px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-l-lg focus:outline-none focus:border-zinc-400 text-sm transition-all"
              />
              <button className="bg-zinc-950 text-white px-4 py-2 rounded-r-lg text-sm font-medium hover:bg-zinc-800 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-xs">
            © {new Date().getFullYear()} MYAPP. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
             <div className="w-5 h-5 bg-zinc-200 rounded-full hover:bg-zinc-400 cursor-pointer transition"></div>
             <div className="w-5 h-5 bg-zinc-200 rounded-full hover:bg-zinc-400 cursor-pointer transition"></div>
             <div className="w-5 h-5 bg-zinc-200 rounded-full hover:bg-zinc-400 cursor-pointer transition"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}