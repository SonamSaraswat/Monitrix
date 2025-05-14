import React, {useState, useContext} from 'react'
import { assets } from '../../assets/assets'
import './SModels.css'
import {models} from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'


const SModels = () => {

  const navigate = useNavigate();

  // Function to handle navigation based on id
  const handleClick = (item) => {
    if  (item.id === 1) {
      navigate('/Solar', { state: item });
    } else if (item.id === 2) {
      navigate('/Society', { state: item });
    }
    else if (item.id=== 3) {
      navigate('/Itr', { state: item });
    } 
    else if (item.id === 4) {
      navigate('/Gst', { state: item });
    } 
    else if (item.id === 5) {
      navigate('/Nsic', { state: item });
    } 
  };
  
  
  return (
    <div className='s-models'>
      <div className="models-heading">
        <h1>Have a look on our Services and Pricing!!</h1>
        <p> It’s a gift for all startups for decreasing business maintenance cost, because we provide a low cost record maintenance and as monitoring your business for better utilization of your sources. We deliver it through our expertise.Your HRD, financial , administration and banking etc document, all of these we prepare for you.</p>

      </div>
      <div className="models-container">
        
          {models.map((item,id)=>{
            return(
              <div className="models-item" key={id}>
                <img src={item.img}/>
                <div className="models-content">
                <p className='models-title'>{item.title}</p>
                <br/>
                <p className='models-price'>{item.price}</p>
                 </div>
                 <button className='explore' onClick={() => handleClick(item)}>Explore More</button>
                 </div>

            )
          })}

      </div>
    </div>
  )
}

export default SModels