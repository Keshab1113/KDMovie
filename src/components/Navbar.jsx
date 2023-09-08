import React from 'react'

function Navbar() {
  return (
        <nav className=' bg-black h-16'>
            <ul className='flex'>
                <li className=' text-blue-100 mx-2 cursor-pointer'>Home</li>
                <li className=' text-blue-100 mx-2 cursor-pointer'>About</li>
                <li className=' text-blue-100 mx-2 cursor-pointer'>Contact</li>
            </ul>
        </nav>
  )
}

export default Navbar