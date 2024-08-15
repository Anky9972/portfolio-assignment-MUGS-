import React from "react";
import p from "../../../public/images/aboutpic.png";
import rec from '../../../public/images/Rectangle.png';
import Image from "next/image";

const About = () => {
  return (
    <section className="w-full py-16 flex flex-col lg:flex-row lg:gap-5 xl:gap-0 justify-around items-center px-5 md:px-10 xl:px-24">
      <div className="w-full lg:w-1/2 xl:w-1/3 flex flex-col gap-5 justify-center items-center relative mb-10 lg:mb-0">
        <div className="shadow-inner w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[380px] lg:h-[380px] xl:w-[300px] xl:h-[300px] rounded-full border-2 overflow-hidden">
          <Image
            src={p}
            alt="Profile Picture"
            width={312}
            height={80}
            className="absolute -top-16 md:-top-20 right-[10px] md:right-32 md:w-[60%] lg:w-full lg:-top-28 xl:w-[75%] lg:right-0 xl:right-[55px] xl:-top-20"
            style={{ clipPath: 'circle(50% at center)' }}
          />
          <Image 
            src={rec} 
            alt="Rectangle" 
            width={200}  
            height={80} 
            className='absolute -top-6 left-[70px] md:w-[250px] xl:w-[200px] md:left-52 lg:-top-12 lg:left-24 xl:left-28 xl:-top-9'
          />
        </div>
      </div>
      <div className="lg:w-1/2 xl:w-1/3 flex flex-col justify-start gap-5">
        <div className="w-full flex justify-center lg:justify-start">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">About Me</h1>
        </div>
        <div>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
        </div>
        <div>
          <ul className="flex flex-col gap-5">
            <li>
              <span className="font-semibold">UX</span>
              <span>
                <input type="range" />
              </span>
            </li>
            <li>
              <span className="font-semibold"> Website Design</span>
              <span>
                <input type="range" max={2}/>
              </span>
            </li>
            <li>
              <span className="font-semibold">App Design</span>
              <span>
                <input type="range" />
              </span>
            </li>
            <li>
              <span className="font-semibold">Graphic Design</span>
              <span>
                <input type="range" />
              </span>
            </li>
            
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
