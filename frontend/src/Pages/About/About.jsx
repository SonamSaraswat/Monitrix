import React from 'react'
import { assets } from '../../assets/assets'
import './about.css'
const About = () => {
  return (
    <div className="about-container">
    <div className='about-sir'>
      <div className="about-header">
        <img src={assets.sir}/>
        <p>Managing Director & Founder<br/>Monitrix Corporate Services Pvt. Ltd.</p>
      </div>
      <div className="about-content">
        <h1>Sunder Pal</h1>
        <p>With over a decade of expertise in taxation, compliance, and business consulting,<br/> Sunder Pal is the visionary behind Monitrix Corporate Services Pvt. Ltd. His deep<br/> understanding of GST, ITR filing, company registration, and corporate compliance<br/> has helped thousands of businesses streamline their financial operations<br/> and stay compliant with regulatory requirements.<br/>As the Managing Director, he has built Monitrix into a trusted name<br/> in the industry, offering cost-effective and reliable tax solutions<br/> to startups, MSMEs, and established enterprises. Under his leadership, Monitrix is now <br/>expanding its reach, introducing affordable online tax courses to make taxation easier<br/> for business owners.His vision is to simplify complex tax laws and make compliance accessible to all.</p>
      </div>
    </div>
    <div className="about-service">
      <h1>WE</h1>
      <ul>
        <li> Empower businesses with hassle-free tax solutions</li>
        <li> Ensure 100% compliance while maximizing financial efficiency</li>
        <li>Educate entrepreneurs on smart tax-saving strategies</li>
      </ul>
      <p>Under his leadership, Monitrix is now expanding its reach, introducing affordable online tax courses to make taxation easier for business owners. His vision is to simplify complex tax laws and make compliance accessible to all</p>
      <p className='about-p'><img src={assets.mail}/> Need expert tax guidance? Get in touch with Monitrix today!</p>
    </div>
    <div className="team">
    <h1>Our Expert Team</h1>
    <div className="members">
      <div className="item">
        <h2>Mukta Balan</h2>
        <p>Specializes in regulatory compliance, taxation, and corporate governance. She helps businesses navigate legal complexities with expert guidance.</p>
      </div>
      <div className="item">
        <h2>Vaibhav Verma</h2>
        <p>Specializes in accounting and bookkeeping for businesses of all sizes. With precision and expertise, he ensures accurate financial records, compliance, and seamless account management</p>
      </div>
      <div className="item">
        <h2>Khushi Singal</h2>
        <p>Khushi excels in business analysis and setting up new ventures. With strategic insights and market expertise, she helps businesses establish a strong foundation for success.</p>
      </div>
      <div className="item">
        <h2>Muskaan</h2>
        <p>Muskaan, specializes in marketing strategies and business planning. She drives business growth with innovative solutions and data-driven insights.</p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default About