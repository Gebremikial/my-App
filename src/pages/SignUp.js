import React from 'react';

const Signup = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Account</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
        <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition">Sign Up</button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log in</a></p>
    </div>
  </div>
);

export default Signup;