import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Assuming token is stored in localStorage after login
    const token = localStorage.getItem('authToken');

    if (token) {
      // Fetch the user's role
      fetch('http://localhost:5000/api/auth/role', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Add token here
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Unauthorized or something went wrong');
          }
          return response.json();
        })
        .then(data => {
          const { role } = data;
          // Redirect based on role
          if (role === 'admin') {
            // Fetch admin dashboard data
            fetch('http://localhost:5000/api/auth/admin-dashboard', {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${token}`, // Add token here
              },
            })
              .then(response => {
                if (!response.ok) {
                  throw new Error('Unauthorized or something went wrong');
                }
                return response.json();
              })
              .then(data => {
                setUserData(data); // Set the user data (for example: welcome message)
              })
              .catch(error => {
                setError(error.message); // Catch any error and display
              });
          } else if (role === 'user') {
            navigate('/user-dashboard');
          } else {
            setError('Invalid role. Please contact support.');
          }
        })
        .catch(error => {
          setError(error.message); // Catch any error and display
        });
    } else {
      setError('No token found');
    }
  }, [navigate]); // Empty dependency array means this will run once after the component mounts

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome to the Admin Dashboard</h1>
      <p>{userData.message}</p>
      <p>Name: {userData.user.name}</p>
      <p>Email: {userData.user.email}</p>
      {/* Display any other user data if needed */}
    </div>
  );
};

export default AdminDashboard;