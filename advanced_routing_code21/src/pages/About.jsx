import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div >
 <div className='flex justify-center gap-10 py-4'>
  <Link className='text-xl font-semibold' to='/About/Mens'>Men</Link>
  
  <Link className='text-xl font-semibold' to='/About/Womens'>Womens</Link>
</div >
<h1 className='text-6xl font-bold text-red-600 flex items-center justify-center min-h-screen' >Product Page</h1>

    </div>
   
  )
}

export default About
