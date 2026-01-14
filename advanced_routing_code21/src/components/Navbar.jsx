import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-[#1a4a5a] text-white flex items-center justify-between px-12 py-5'>
      <h1 className='text-2xl font-bold tracking-tight'>Navbar</h1>
      <div className='flex gap-8'>
        <Link className='font-semibold hover:text-gray-300 transition-colors' to='/'>Home</Link>
        <Link className='font-semibold hover:text-gray-300 transition-colors' to='/About'>About</Link>
        <Link className='font-semibold hover:text-gray-300 transition-colors' to='/Contact'>Contact</Link>
        <Link className='font-semibold hover:text-gray-300 transition-colors' to='/Courses'>Courses</Link>

      </div>
    </div>
  )
}

export default Navbar
