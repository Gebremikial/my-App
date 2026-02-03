import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [error, setError] = useState('');
  const maxAttempts = 4;
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (attempts >= maxAttempts) {
      setError("Account locked. Please contact support.");
      return;
    }

    // CHECK if input matches stored data
    if (email === storedEmail && password === storedPassword) {
      // Direct redirect without notification alert
      navigate('/welcome'); 
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      if (newAttempts >= maxAttempts) {
        setError("Too many attempts. Account locked.");
      } else {
        setError(`Incorrect email or password. ${maxAttempts - newAttempts} attempts remaining.`);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center transition-colors">
      <div className="max-w-md w-full bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-lg border dark:border-zinc-800">
        <h2 className="text-2xl font-bold text-center mb-6 dark:text-white">Welcome Back</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="email" placeholder="Email" required 
            className="w-full p-3 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" placeholder="Password" required 
            className={`w-full p-3 border rounded-lg dark:bg-zinc-800 dark:text-white ${error ? 'border-red-500' : 'dark:border-zinc-700'}`}
            onChange={(e) => setPassword(e.target.value)}
            disabled={attempts >= maxAttempts}
          />
          {error && <p className="text-red-500 text-sm italic">{error}</p>}
          <button 
            type="submit" 
            className={`w-full p-3 rounded-lg font-semibold text-white transition ${attempts >= maxAttempts ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'}`}
            disabled={attempts >= maxAttempts}
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600 dark:text-zinc-400">
          Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;