import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';

function NavbarProducts() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Function to toggle menu state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <nav className={` bg-white shadow-md mt-4 mx-auto w-fit ${menuOpen ? 'rounded-lg' : 'rounded-full'} px-4 border border-gray-200 border-solid`}>
      <div className="flex justify-between items-center gap-8">
        {/* Logo Section */}
        <div
          className="flex items-center py-3 px-2 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <img src={Logo} width={150} alt="Logo" />
        </div>

        {/* Primary Nav Links - Hidden on Mobile */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => navigate('/iphone')}
            className="text-gray-500 py-1 px-3 hover:bg-black hover:rounded-lg hover:text-white transition-all ease-linear duration-300"
          >
            iPhone
          </button>
          <button
            onClick={() => navigate('/airpod')}
            className="text-gray-500 py-1 px-3 hover:bg-black hover:rounded-lg hover:text-white transition-all ease-linear duration-300"
          >
            Airpod
          </button>
          <button
            onClick={() => navigate('/macbook')}
            className="text-gray-500 py-1 px-3 hover:bg-black hover:rounded-lg hover:text-white transition-all ease-linear duration-300"
          >
            Macbook
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="text-gray-500 py-1 px-3 hover:bg-black hover:rounded-lg hover:text-white transition-all ease-linear duration-300"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button onClick={toggleMenu} className="mobile-menu-button focus:outline-none">
            <svg
              className={`w-6 h-6 text-gray-700 transition-transform duration-300 ${menuOpen ? 'rotate-180' : 'rotate-0'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Menu - Toggled based on `menuOpen` */}
      <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} flex flex-col`}>
        <button
          onClick={() => navigate('/iphone')}
          className="text-gray-500 py-1 px-3 hover:bg-black hover:rounded-lg hover:text-white transition-all ease-linear duration-300"
        >
          iPhone
        </button>
        <button
          onClick={() => navigate('/airpod')}
          className="text-gray-500 py-1 px-3 hover:bg-black hover:rounded-lg hover:text-white transition-all ease-linear duration-300"
        >
          Airpod
        </button>
        <button
          onClick={() => navigate('/macbook')}
          className="text-gray-500 py-1 px-3 hover:bg-black hover:rounded-lg hover:text-white transition-all ease-linear duration-300"
        >
          Macbook
        </button>
        <button
          onClick={() => navigate('/contact')}
          className="text-gray-500 py-1 px-3 hover:bg-black hover:rounded-lg hover:text-white transition-all ease-linear duration-300"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}

export default NavbarProducts;
