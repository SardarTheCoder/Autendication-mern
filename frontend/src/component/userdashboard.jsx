import React, { useEffect, useState } from 'react';

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

 

  return (
    <div>
      <h1>Welcome</h1>
      <p>Email</p>
      <p>Role</p>
    </div>
  );
};

export default UserDashboard;
