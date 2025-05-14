import React from 'react'
import './Home.css'
import Heading from '../../Components/Heading/Heading'
import Header from '../../Components/Header/Header'
import Container from '../../Components/Container/Container'
import Servicess from '../../Components/Servicess/Servicess'
import Values from '../../Components/Values/Values'
import Testimonials from '../../Components/Testimonials/Testimonials'
import SModels from '../../Components/SModels/SModels'
import Blogs from '../../Components/Blogs/Blogs'
import Footer from '../../Components/Footer/Footer'
import Consultation from '../../Components/Consultation/Consultation'

const Home = () => {
  return (
    <>
     
     <Container/>
     <Servicess/>
     <Values/>
     <Consultation/>
     <Testimonials/>
     <SModels/>
     <Blogs/>
     

    </>
  )
}

export default Home