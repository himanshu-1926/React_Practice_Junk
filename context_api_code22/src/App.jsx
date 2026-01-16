import React from 'react'
import Navbar from './Components/Navbar'
import { useState } from 'react'
import ContextTheme from './Context/ContextTheme'
const App = () => {
  const [theme, settheme]=useState('light')
  return (
    <div>
    
      {/* <Navbar theme={theme}/> */}

  
      <Navbar theme={theme}>
<h2>This is nav bar</h2>
<h3>navbar ki ____ 5 bar</h3>
    </Navbar>

    </div>
  )
}

export default App
