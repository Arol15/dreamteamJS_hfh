import React from 'react'

const Navbar = () => {
  return (
    <div>
     
       <nav className="shadow-lg rounded-lg p-4 ">
      <div className="">
         <h1 className="font-bold text-4xl flex justify-end items-center mt-8 text-gray-800">Admin Portal</h1>
        <div>
          <a href="/" className="text-gray-700 hover:text-gray-900 text-lg font-semibold flex justify-center items-center">Shop</a>
          <a href="/" className="text-gray-700 hover:text-gray-900 text-lg font-semibold">Donate</a>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar