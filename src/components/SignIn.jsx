import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Sign In</h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input type="checkbox" id="remember-me" className="text-blue-600 rounded border-gray-300 focus:ring focus:ring-blue-200" />
            <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">Remember me</label>
          </div>
          <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">Forgot password?</Link>
        </div>

        <p className="text-sm text-center text-gray-600">
          Don't have an account? 
          <Link to="/signup" className="text-blue-600 hover:underline"> Get started</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
