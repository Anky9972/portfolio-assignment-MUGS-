import React from 'react';
import v1 from '../../../public/images/Vector1.png';
import v2 from '../../../public/images/Vector2.png';
import v3 from '../../../public/images/Vector3.png';
import v4 from '../../../public/images/Vector4.png';
import Image from 'next/image';

const Services = () => {
  return (
    <section className='flex flex-col items-center gap-10 px-5 lg:px-0  xl:px-24'>
      <div className='text-4xl md:text-5xl lg:text-6xl font-semibold'>
        Services
      </div>
      <div className='text-center text-base md:text-lg'>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus <br className='hidden md:block' />
        netus in. Aliquet donec morbi convallis pretium.
      </div>
      <div className='w-full flex flex-col md:flex-row justify-center gap-5'>
        <div className='w-full md:w-1/4 lg:w-1/5 bg-slate-100 px-3 py-5 rounded-xl flex flex-col gap-3 '>
          <div>
            <Image src={v1} width={40} height={50} alt="UI/UX Design" />
          </div>
          <div className='text-2xl md:text-3xl font-semibold'>UI/UX</div>
          <div className='text-sm md:text-base text-justify'>
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.
          </div>
        </div>
        <div className='w-full md:w-1/4 lg:w-1/5 bg-slate-100 px-3 py-5 rounded-xl flex flex-col gap-3'>
          <div>
            <Image src={v2} width={40} height={50} alt="Web Design" />
          </div>
          <div className='text-2xl md:text-3xl font-semibold'>Web Design</div>
          <div className='text-sm md:text-base text-justify'>
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.
          </div>
        </div>
        <div className='w-full md:w-1/4 lg:w-1/5 bg-slate-100 px-3 py-5 rounded-xl flex flex-col gap-3 '>
          <div>
            <Image src={v3} width={25} height={40} alt="App Design" />
          </div>
          <div className='text-2xl md:text-3xl font-semibold'>App Design</div>
          <div className='text-sm md:text-base text-justify'>
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.
          </div>
        </div>
        <div className='w-full md:w-1/4 lg:w-1/5 bg-slate-100 px-3 py-5 rounded-xl flex flex-col gap-3'>
          <div>
            <Image src={v4} width={40} height={50} alt="Graphic Design" />
          </div>
          <div className='text-2xl md:text-3xl font-semibold'>Graphic Design</div>
          <div className='text-sm md:text-base text-justify'>
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
