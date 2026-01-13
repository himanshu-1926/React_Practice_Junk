import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    // 'flex' makes them side-by-side, 'items-center' centers them vertically
    <nav className='bg-blue-300 flex items-center justify-between px-10 py-4'>
      
      {/* Brand Name */}
      <h1 className='font-semibold text-4xl'>Hmnsh</h1>

      {/* Navigation Links */}
      <div className='flex gap-10'>
        <Link className='text-blue-600 underline' to='/'>Home</Link>
        <Link className='text-blue-600 underline' to='/About'>About</Link>
        <Link className='text-blue-600 underline' to='/Contact'>Contact</Link>
      </div>

    </nav>
  )
}

export default NavBar
  