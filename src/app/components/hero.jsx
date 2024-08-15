import React from 'react';
import p from '../../../public/images/profile1.png';
import p2 from '../../../public/images/profile2.png';
import rec from '../../../public/images/Rectangle.png';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className='w-full py-16 flex flex-col-reverse lg:flex-row px-5 md:px-10 xl:px-24'>
      <div className='w-full mt-10 lg:w-1/2 text-black flex flex-col items-center lg:items-start text-center lg:text-left'>
        <div className='text-xl md:text-2xl font-semibold'>Hi I am</div>
        <div className='text-[#FD6F00] text-2xl md:text-3xl font-semibold'>Muhammad Umair</div>
        <div className='text-5xl md:text-6xl lg:text-8xl font-[700] w-full'>
          <div className='text-center lg:text-left'>UI & UX</div>
          <div className='lg:ml-44'>Designer</div>
        </div>
        <div className='text-base md:text-xl mt-6 md:mt-10'>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
        </div>
        <div>
          <button className='w-[150px] md:w-[188px] h-[42px] md:h-[52px] bg-[#FD6F00] text-lg md:text-xl text-white mt-5'>
            Hire me
          </button>
        </div>
      </div>
      <div className='w-full lg:w-1/2 flex flex-col gap-10 justify-center items-center lg:items-end xl:items-center relative md:mt-28 lg:mt-0'>
        <div className='shadow-inner  md:w-[500px] md:h-[500px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden'>
          <Image 
            src={p} 
            alt="Profile 1" 
            width={320}  
            height={80} 
            className='w-full md:w-[80%] lg:w-[320px] absolute -top-[80px] -right-[5px] md:-top-32 md:right-14 lg:top-2 xl:-top-1 lg:-right-4 xl:right-[165px]'
          />
          <Image 
            src={rec} 
            alt="Rectangle" 
            width={200}  
            height={80} 
            className='absolute md:w-[50%] lg:w-[200px] -top-5 md:-top-10 lg:top-14 xl:top-11 left-16 md:left-[180px] lg:left-[210px] xl:left-[230px]'
          />
          <Image 
            src={p2} 
            alt="Profile 2" 
            height={75} 
            className='w-[300px] md:w-[500px] lg:w-[378px]'
          />
        </div>
        <div className='w-full flex justify-center'>
          <ul className='flex gap-5 lg:ml-40 xl:ml-0 items-center'>
            <li><FaFacebook className='text-lg md:text-2xl'/></li>
            <li><FaTwitter className='text-lg md:text-2xl'/></li>
            <li><FaInstagram className='text-lg md:text-2xl'/></li>
            <li><FaLinkedin className='text-lg md:text-2xl'/></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
