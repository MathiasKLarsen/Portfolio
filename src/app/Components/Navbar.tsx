import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-black shadow-md px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold text-purple-600">Portfolio</div>

      {/* Navigation Links */}
      <ul className="hidden sm:flex sm:items-center sm:gap-6 absolute sm:static top-16 left-0 w-full sm:w-auto bg-black sm:bg-transparent px-6 sm:px-0 z-10">
        <li><a href="#" className="block py-2 sm:py-0 text-purple-600 hover:text-purple-300">Home</a></li>
        <li><a href="#" className="block py-2 sm:py-0 text-purple-600 hover:text-purple-300">About</a></li>
        <li><a href="#" className="block py-2 sm:py-0 text-purple-600 hover:text-purple-300">Projects</a></li>
        <li><a href="#" className="block py-2 sm:py-0 text-purple-600 hover:text-purple-300">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
