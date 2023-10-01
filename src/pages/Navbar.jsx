import React from 'react'

const Navbar = () => {
  return (
    <div>
    <nav className="shadow-lg rounded-lg p-8 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="font-bold text-4xl text-gray-800 pl-8">Admin Portal</h1>
      </div>
      <div className="flex space-x-6">
        <a href="/" className="text-gray-700 hover:text-gray-900 text-lg font-semibold pr-4">Donate</a>
        <a href="/" className="text-gray-700 hover:text-gray-900 text-lg font-semibold">Shop</a>
      </div>
    </nav>
  </div>
  
  )
}

export default Navbar