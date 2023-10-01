import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
    <nav className="shadow-lg rounded-lg p-8 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="font-bold text-4xl text-gray-800 pl-8">Admin Portal</h1>
      </div>
      <div className="flex space-x-6">
        <Link to="/donate" className="text-gray-700 hover:text-gray-900 text-lg font-semibold pr-4">Donate</Link>
        <Link to="/shop" className="text-gray-700 hover:text-gray-900 text-lg font-semibold">Shop</Link>
      </div>
    </nav>
  </div>
  
  )
}

export default Navbar