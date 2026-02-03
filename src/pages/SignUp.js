import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    
    // SAVE credentials
    localStorage.setItem('userEmail', formData.email);
    localStorage.setItem('userPassword', formData.password);
    localStorage.setItem('userName', formData.name);

    // Direct login transition to the welcome page
    navigate('/welcome'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center transition-colors">
      <div className="max-w-md w-full bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-lg border dark:border-zinc-800">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">Create Account</h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          <input 
            type="text" placeholder="Full Name" required 
            className="w-full p-3 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input 
            type="email" placeholder="Email" required 
            className="w-full p-3 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <input 
            type="password" placeholder="Password" required 
            className="w-full p-3 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600 dark:text-zinc-400">
          Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;