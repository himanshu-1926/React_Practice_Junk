import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Mens from './pages/Mens'

import UnknownPage from './pages/unknownPage'
import Contact from './pages/Contact'


import { Route, Routes } from 'react-router-dom'
import Womens from './pages/Womens'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'

const App = () => {
  return (
    <div className='bg-black text-white h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />


        <Route path='/About' element={<About />} />
        <Route path='/About/Mens' element={<Mens />} />
        <Route path='/About/Womens' element={<Womens />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Courses' element={<Courses/>}/>
        <Route path='/Courses/:id' element={<CourseDetail/>}/>


    {/* <Route path='/About' element={<About />} />
        <Route path='/About/Mens' element={<Mens />} />
        <Route path='/About/Womens' element={<Womens />} >
    </Route> */}

        <Route path='*' element={<UnknownPage />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App
