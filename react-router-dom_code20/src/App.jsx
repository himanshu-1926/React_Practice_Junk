import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import NavBar from './components/NavBar'
const App = () => {
  return (
    <div className='bg-amber-100 h-screen'>
      <NavBar/>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/About'element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>

      </Routes>
    </div>
  )
}

export default App
