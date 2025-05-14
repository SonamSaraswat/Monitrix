import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Refer from './Pages/Refer/Refer'
import Servicess from './Components/Servicess/Servicess'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Heading from './Components/Heading/Heading'
import Header from './Components/Header/Header'
import Appointment from './Pages/Appointment/Appointment'
import Blog from './Pages/Blog/Blog'
import Cart from './Pages/Cart/Cart'
import Society from './Pages/Prices/Society'
import Solar from './Pages/Prices/Solar'
import Gst from './Pages/Prices/Gst'
import Itr from './Pages/Prices/Itr'
import Nsic from './Pages/Prices/Nsic'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import Dashboard from './Pages/Dashboard/Dashboard'
import Admin from './Pages/Admin/Admin'
import ContentViewer from './Pages/ContentViewer/ContentViewer'

function App() {
  

  return (
    <>
    <Heading/>
    <Header/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/Refer" element={<Refer/>}/>
      <Route path ="/Servicess" element={<Servicess/>}/>
      <Route path ="/About" element={<About/>}/>
      <Route path ="/Contact" element={<Contact/>}/>
      <Route path="/Appointment" element={<Appointment />} ></Route>
      <Route path='/Blog' element={<Blog/>}/>
      <Route path ='/Cart' element={<Cart/>}/>
      <Route path='/Society' element={<Society/>}/>
      <Route path='/Solar' element={<Solar/>}/>
      <Route path='/Itr' element={<Itr/>}/>
      <Route path='/Gst' element={<Gst/>}/>
      <Route path='/Nsic' element={<Nsic/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path ='/Login' element={<Login/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path="/Admin" element={<Admin/>} />
       <Route path="/:level/:slug" element={<ContentViewer/>} />
        <Route path="/admin/:level/:slug" element={
          ({ params }) => <AdminContentEditor level={params.level} slug={params.slug} />
        } />
    </Routes>
    <Footer/>
   
    </>
  )
}

export default App
