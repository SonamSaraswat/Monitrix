import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='contact-us'>
      <div className="footer-contents">
        <div className="about">
          <h1>Monitrix</h1>
          <p>At Monitrix Corporate Services Private Limited , we are the architects of financial success. <br/>With a team of dedicated and experienced Chartered Accountants (CAs), we have been at the forefront of providing exceptional financial and corporate solutions.Excellence in Every Financial Calculation Crafting Your Financial Success Story</p>
          <button>Refer to Earn</button>
        </div>
        <div className="useful-links">
          <h1>Useful Links</h1>
        <a href='https://www.gst.gov.in/'><img src={assets.link}/> Govt GST portal</a>
          <a href="https://www.incometax.gov.in/iec/foportal/"><img src={assets.link}/> Income Tax Portal</a>
          <a href="https://www.mca.gov.in/content/mca/global/en/home.html"><img src={assets.link}/> MCA</a>
        </div>
        <div className="connect">
          <h1>Connect With us</h1>
          <p><img src={assets.house}/> Office Address<br />
            259 1st Floor,Green Square Market,Hisar-125001</p>
          <p> <img src={assets.clock}/> Working Hours<br />
            8:00am – 9:00pm ( Mon – Sat ) <br/> Sun & Holiday Closed</p>

          <p>Contact Us<br />
           <img src={assets.phone}/> +91-1662-355590 <br/> <img src={assets.phone}/> +91 881800 88600<br/>
            <img src={assets.mail}/> info@mymonitrix.com</p>
        </div>
      </div>
      <p>Copyright 2025 © Monitrix Corporate Services Private Limited , All Rights Reserved | </p>

    </div>
  )
}

export default Footer