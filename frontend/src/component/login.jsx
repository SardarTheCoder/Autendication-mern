import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const confirmEmail = async () => {
      const token = searchParams.get('token');
      console.log('Token from URL:', token); // Log the token
  
      if (token) {
        try {
          const response = await axios.get(`http://localhost:5000/api/auth/confirm-email?token=${token}`);
          console.log(response.data.message); // Optionally display this message
        } catch (error) {
          console.error('Error confirming email:', error.response?.data?.message || error.message);
        }
      }
    };
  
    confirmEmail();
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    console.log('Form Data:', formData); // Log formData to verify its structure

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", formData);
      setSuccessMessage(response.data.message);
      console.log(response.data.message);

      // Store token in localStorage
      localStorage.setItem('authToken', response.data.token);

      // Fetch the user's role
      const roleResponse = await axios.get("http://localhost:5000/api/auth/role", {
        params: { email: formData.email },
        headers: {
          'Authorization': `Bearer ${response.data.token}`, // Add token here
        },
      });

      const { role } = roleResponse.data;

      // Redirect based on role
      if (role === 'admin') {
        navigate('/admin-dashboard');
      } else if (role === 'user') {
        navigate('/user-dashboard');
      } else {
        setError('Invalid role. Please contact support.');
      }
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-white to-purple-500">
      <div className="bg-gray-200 rounded-lg p-20 w-full max-w-md shadow-2xl shadow-purple-800">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-600 text-center mb-4">{error}</p>}
          {successMessage && <p className="text-green-600 text-center mb-4">{successMessage}</p>}

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;