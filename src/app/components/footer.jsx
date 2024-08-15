import React from 'react'
import Image from 'next/image';
import logo from '../../../public/images/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='bg-[#F8F8F8] w-full flex flex-col items-center gap-8'>
      <div>
        <Image 
          src={logo} 
          alt="Logo" 
          width={279}  
          height={67} 
          className='mt-10'
        />
      </div>
      <nav>
        <ul className='flex flex-wrap gap-6 justify-center items-center text-lg font-normal text-black'>
          <li className='hover:text-[#FD6F00] transition-colors cursor-pointer'>Home</li>
          <li className='hover:text-[#FD6F00] transition-colors cursor-pointer'>About me</li>
          <li className='hover:text-[#FD6F00] transition-colors cursor-pointer'>Services</li>
          <li className='hover:text-[#FD6F00] transition-colors cursor-pointer'>Projects</li>
          <li className='hover:text-[#FD6F00] transition-colors cursor-pointer'>Testimonials</li>
          <li className='hover:text-[#FD6F00] transition-colors cursor-pointer'>Contact</li>
        </ul>
      </nav>
      <div>
        <ul className='flex gap-5'>
          <li><FaFacebook className='text-xl hover:text-[#FD6F00] transition-colors' aria-label="Facebook"/></li>
          <li><FaTwitter className='text-xl hover:text-[#FD6F00] transition-colors' aria-label="Twitter"/></li>
          <li><FaInstagram className='text-xl hover:text-[#FD6F00] transition-colors' aria-label="Instagram"/></li>
          <li><FaLinkedin className='text-xl hover:text-[#FD6F00] transition-colors' aria-label="LinkedIn"/></li>
        </ul>
      </div>
      <div className='w-full bg-[#545454] flex justify-center items-center text-sm text-white py-4'>
        © 2023 <span className='text-[#FD6F00] mx-1'>Mumair</span> All Rights Reserved, Inc.
      </div>
    </footer>
  )
}

export default Footer
