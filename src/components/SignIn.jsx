import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import axios from 'axios';
import api from '../provider/AuthProvider';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); 

    try {
      const response = await api.post('/api/login/', {
        username,
        password,
      });
      console.log('Response:', response.data);
      if (response.data.access) {
        localStorage.setItem('token', response.data.access);;
        localStorage.setItem("user", response.data.user.username)
      }
      navigate("/vault")
      
    } catch (error) {
      setError('Login failed. Please check your credentials.');
      console.log('Error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Sign In</h2>

        {error && <p className="text-center text-red-500">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              placeholder="yourusername"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <input type="checkbox" id="remember-me" className="text-blue-600 rounded border-gray-300 focus:ring focus:ring-blue-200" />
            <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">Remember me</label>
          </div>
          <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">Forgot password?</Link>
        </div>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account? 
          <Link to="/signup" className="text-blue-600 hover:underline ml-1">Get started</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
