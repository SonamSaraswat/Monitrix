import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import profileIcon from '../../assets/profile_icon.png'

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    referred_by: ""
  })
  const navigate = useNavigate();


  const [err, setError] = useState(null)
  const [success, setSuccess] = useState("");

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", inputs);

      console.log("Login successful:", res.data);
      setSuccess("Login successful!");
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userData', JSON.stringify(res.data.user));
      console.log(res.data);
      if (res.data.user.role === 'admin') {
        navigate('/Admin');
      } else {
        navigate('/');
      }

      window.location.reload();

      // Optionally store token or redirect
      // localStorage.setItem("token", res.data.token);
      // navigate("/dashboard");

    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      setError(err.response?.data || "Something went wrong.");
    }

  }
  const handleProfileClick = () => {
    navigate('/dashboard', { state: { user: userInfo } });
  };

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" name="username" onChange={handleChange} />
        <input type="password" placeholder="password" name="password" onChange={handleChange} />
        <input type="text" placeholder="ReferredBy Id" name="referred_by" onChange={handleChange} />
        <button type="submit">Login</button>
        {err && <p>{err}</p>}
        <span>Do not have an Account? <Link to='/register'>Register</Link></span>

      </form>
    </div>
  );
};
export default Login