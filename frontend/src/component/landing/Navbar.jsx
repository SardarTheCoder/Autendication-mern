import React from "react";

const Navbar = () => {
  return (
    <header className="bg-black text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo and Website Name */}
        <div className="flex items-center space-x-3">
          <img
            src="https://i.pinimg.com/736x/f2/5f/1d/f25f1d802c087c8703328fc77034e373.jpg"
            alt="DriveSpark Logo"
            className="w-10 h-10 object-cover rounded-full"
          />
          <h1 className="text-2xl font-bold">DriveSpark</h1>
        </div>

        {/* Navigation */}
        <nav>
          <a
            href="/login"
            className="px-4 py-2 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white rounded-md shadow-md hover:shadow-lg transition-all duration-300 glow hover:bg-gradient-to-r hover:from-black hover:to-gray-500 "
          >
            Login
          </a>
          <a
            href="/register"
            className="ml-4 px-4 py-2 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white rounded-md shadow-md hover:shadow-lg transition-all duration-300 glow  hover:bg-gradient-to-r hover:from-black hover:to-gray-500"
          >
            Register
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
