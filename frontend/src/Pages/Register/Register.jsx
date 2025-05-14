import React, { useState } from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
const Register = () => {
    const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    referralCode: generateReferralCode(),
    referredBy: '',
  });

  function generateReferralCode() {
    // 6-character random alphanumeric code
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  }
  const navigate=useNavigate();

  const [err, setErr]=useState(null)

  const handleChange=e=>{
    setFormData(prev=>({...prev, [e.target.name]:e.target.value}))
  }

    const handleSubmit= async e=>{
    e.preventDefault();
    try{
       await axios.post("http://localhost:5000/api/auth/register", formData)
       navigate("/Login")
    }catch(err){
       setErr(err.response.data)
    } 
  }

  return (
    <div className='auth'>
    <h1>Register</h1>
    <form>
        <input required type="text" placeholder="username" name="username" onChange={handleChange}/>
         <input required type="email" placeholder='email'  name="email" onChange={handleChange}/>
        <input required type="password" placeholder="password"  name="password" onChange={handleChange}/>
       {/* <select
        name="role"
        value={formData.role}
        onChange={handleChange}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>*/}
        <input type="text" placeholder="ReferredBy Id" name="referred_by" onChange={handleChange}/>
        <button onClick={(e) => handleSubmit(e)}>Register</button>
              <input  type="text" value={formData.referralCode} disabled/>
       
        {err && <p>{err}</p>}
         <small>Your Referral Code (share this with others)</small>
        <span>Have an Account? <Link to='/Login'>Login</Link></span>

    </form>

</div>
  )
}

export default Register