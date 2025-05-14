
import React, {useState} from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
   const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    console.log("User from localStorage:", storedUser);
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome to your Dashboard</h2>
      {user ? (
        <div className="user-info">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Referral Code:</strong> {user.referral_code } </p>
          <p><strong>Referred By:</strong> {user.referred_by }</p>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      ) : (
        <p>No user data found. Please login again.</p>
      )}
    </div>
  );
};

export default Dashboard;
