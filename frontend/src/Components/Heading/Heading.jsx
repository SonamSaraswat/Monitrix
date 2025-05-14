import React from 'react'
import './Heading.css'
import { useNavigate } from 'react-router-dom';

const Heading = () => {

    const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Appointment'); 
  };
  return (
    <div>
        <div className="heading">
            <div className="left">
                <p className="para-left">India’s Largest Financial Services Platform for Your Business</p>
            </div>
            
                <button className="right" onClick={handleClick}>BOOK  APPOINTMENT</button>
            
        </div>
    </div>
  )
}

export default Heading