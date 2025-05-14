import React from 'react'
import { assets } from '../../assets/assets'
import './Blogs.css'
import { Link, useNavigate } from 'react-router-dom'
import b1 from '../../assets/b1.jpg'
import b2 from '../../assets/b2.jpeg'
import b3 from '../../assets/b3.jpeg'

const Blogs = () => {

      const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Blog'); 
  };

   const blogs=[
    {
      id:1,
      img: b1,
      title: "Company Policy"

    },
    { 
      id:2,
      img: b2,
      title: "Insurance Policy"

    },
    {
      id:3,
      img: b3,
      title: "Customer-Service Policy"

    }
   ]
  return (
    <div className='blogs'>
      <div className="blog-header">
        <h1>Read Our Latest Blogs</h1>
        <p>Explore Our Blogs for Finances, Trends and More!</p>
      </div>
      {/*
      <div className="blog-container">
        <div className="blogs-item">
          <img src={assets.b1} />
          <p>Company Policy </p>
          <button>Read more</button>
        </div>
        <div className="blogs-item">
          <img src={assets.b2} />
          <p>Insurance </p>
          <button>Read more</button>
        </div>
        <div className="blogs-item">
          <img src={assets.b3} />
          <p>Customer-Service Policy</p>
          <button>Read more</button>
        </div>
      </div>
      -*/}
       <div className="blog-container" >
      {blogs.map((item, index)=>{
        return(
        <div className="blogs-item" key={item.id}>
          <img src={item.img} />
          <p>{item.title}</p>
          <Link to={`Blog/${item.id}`}><button>Read more</button></Link>
        </div>
        )
      })}
       </div>

      <button className='blog-button' onClick={handleClick}>View More</button>


    </div>
  )
}

export default Blogs