import React from 'react'
import './Values.css'
import { assets } from '../../assets/assets'

const Values = () => {
  return (
    <div className='values'>
      <h2 className='values-heading'>Monitrix's Core Values</h2>
      <p className='values-para'>We are driven by our commitment to the financial well-being of our clients, and we strive to make a positive and lasting impact on the businesses we serve.Our vision is to be a leading chartered accountant firm globally, renowned for our innovation, excellence, and unwavering commitment to client success. We aspire to continuously expand our knowledge base, embrace cutting-edge technologies, and foster a culture of continuous improvement.</p>
      <div className="values-container">
        <img className= "values-image" src={assets.values} alt="values"/>
        <div className="values-item-container">
          <div className="values-items">
            <h4>Branding & Visibility</h4>
            <p>Our strategic approach ensures long-term brand growth and customer loyalty.</p>
          </div>
          <div className="values-items">
            <h4>Manage Projects</h4>
            <p>Our expertise drives timely delivery and optimal results.</p>
          </div>
          <div className="values-items">
          <h4>Tech based Solution</h4>
          <p>Our solutions drive digital transformation for business growth.</p>
          </div>
          <div className="values-items">
          <h4>Ensuring regulatory adherence.</h4>
          <p>Our expertise minimizes risks and legal challenges.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Values