import React from 'react'
import './Consultation.css'
import { assets } from '../../assets/assets'
const Consultation = () => {
  return (
    <div className='consultation'>
      <div className="cons-container">
      <p className='cons-para-heading'>“You don’t need to worry – Monitrix is here for you, buddy!”</p>
      <p className='cons-para'> Need Help ? Call Now :</p> 
      <span className='cons-span'><img src={assets.phone}/> +91-1662-355590</span>
      <span className='cons-span'><img src={assets.phone}/> +91 881800 88600</span>
      <p className='cons-para-last'>OR Write to info@mymonitrix.com</p>
      </div>

    </div>
  )
}

export default Consultation