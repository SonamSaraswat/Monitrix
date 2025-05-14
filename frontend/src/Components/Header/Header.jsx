import React, {useState, useEffect} from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import profileIcon from '../../assets/profile_icon.png'


const Header = () => {

   const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (loggedIn && userData) {
      setIsLoggedIn(true);
      setUsername(userData.username);
    }
  }, []);

  const handleProfileClick = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    navigate('/Dashboard', { state: { user: userData } });
  };


  return (
    <div className='header'>

     <Link to='/'><img src={assets.logo} alt='' className='logo'></img></Link>

     <ul className="header-items">
     <Link to='/'><li className="items">HOME</li></Link>
     <Link to='/About'><li className="items">ABOUT US</li></Link>
     <Link to='/Servicess'><li className="items">SERVICES</li></Link>
     <a href='#contact-us' className="items">CONTACT US</a>
     <Link to='/Refer'><li className="items">REFER TO EARN</li></Link>
     </ul>


      {!isLoggedIn ? (

     <Link to='/Register'><button className='sign-in'>Sign In</button></Link>
      
      ) : (
        <div className="profile-container" onClick={handleProfileClick} style={{ cursor: "pointer" }}>
          <img
            src={profileIcon}
            alt="Profile Icon"
            className="profile-icon"
            style={{ width: '35px', height: '35px', borderRadius: '50%' }}
          />
        </div>
      )}
    </div>
  )
}

export default Header