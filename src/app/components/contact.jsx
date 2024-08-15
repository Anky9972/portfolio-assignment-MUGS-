import React from 'react'

const Contact = () => {
  return (
    <section className='px-5 lg:px-24 py-16 flex flex-col gap-10'>
      <div className='flex flex-col gap-5 text-center'>
        <div className='text-4xl md:text-5xl lg:text-6xl font-semibold'>Let&apos;s Design Together</div>
        <div className='text-base md:text-lg tracking-wider text-gray-600'>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh  <br className="hidden md:block" /> 
          netus in. Aliquet donec morbi convallis pretium.
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-5 md:gap-10 w-full'>
        <input 
          type="email" 
          placeholder='Enter Your Email' 
          className='border border-gray-300 w-full px-5 py-3 rounded-xl text-lg focus:outline-none focus:border-orange-500' 
          aria-label="Enter your email address"
        />
        <button 
          className='w-full md:w-[188px] h-[52px] bg-[#FD6F00] text-xl rounded-xl text-white hover:bg-orange-600 transition-colors' 
          aria-label="Contact Me"
        >
          Contact Me
        </button>
      </div>
    </section>
  )
}

export default Contact
