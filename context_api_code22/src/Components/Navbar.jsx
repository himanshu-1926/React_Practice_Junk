import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import {ThemeDataContext} from '../Context/ContextTheme'

const Navbar = (props) => {
    // console.log(props)
    // console.log()
    const data=useContext(ThemeDataContext)
  return (
    <div className='nav'>
        <h2>{data}</h2>
        {/* {props.children[0]}
        {props.children[1]} */}
    


        <Nav2 theme={props.theme}/>
      
    </div>
  )
}

export default Navbar
