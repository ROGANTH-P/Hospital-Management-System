import React from 'react'
import './index.css';

import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Contact from './pages/Contact'
import MyAppointments from './pages/MyAppointments'
import About from './pages/About'
import MyProfile from './pages/MyProfile'
import Appoinment from './pages/Appoinment'
import Navbar from './components/Navbar'
import SpecialityMenu from './components/SpecialityMenu';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className='mx-7 sm:mx[10%]'>
      <Navbar/> 
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/doctors' element={<Doctors/>}/>
      <Route path='/doctors/:speciality' element={<Doctors/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/myappoinment' element={<MyAppointments/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/myprofile' element={<MyProfile/>}/>
      <Route path='/appoinment/:docId' element={<Appoinment/>}/>
      <Route path='#speciality' element = {<SpecialityMenu/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App