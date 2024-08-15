'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='w-full flex justify-between items-center py-4 lg:py-0 lg:p-4'>
      <div className='mb-4 sm:mb-0'>
        <Image 
          src={logo} 
          alt="Logo" 
          width={279}  
          height={67}
          className='w-44 md:w-[279px]' 
        />
      </div>

      {/* Hamburger Icon */}
      <div className='block xl:hidden'>
        <button onClick={toggleMenu} className='text-2xl'>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu */}
      <div className={`w-full md:absolute xl:relative xl:top-0 md:top-40 md:py-10 xl:py-0 md:text-xl md:z-10 bg-white md:left-0  flex flex-col lg:flex-row gap-4 lg:gap-10 justify-center items-center text-base lg:text-xl font-normal text-black ${isOpen ? 'block' : 'hidden'} xl:flex`}>
        <ul className='flex flex-col xl:flex-row gap-4 xl:gap-10 justify-center items-center'>
          <li>Home</li>
          <li>About me</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Testimonials</li>
          <li>Contact</li>
          <li>
            <button className='w-full sm:w-[188px] h-[40px] sm:h-[52px] bg-[#FD6F00] text-white'>
              Download CV
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
