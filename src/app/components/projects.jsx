import React from "react";
import w1 from "../../../public/images/Web Designs1.1.png";
import w2 from "../../../public/images/Web Designs1.2.png";
import w3 from "../../../public/images/Web Designs2.1.png";
import w4 from "../../../public/images/Web Designs2.2.png";
import w5 from "../../../public/images/Web Designs3.1.png";
import w6 from "../../../public/images/Web Designs3.2.png";
import Image from "next/image";
const Projects = () => {
  return (
    <section className="w-full py-16 flex flex-col items-center gap-10 px-5 lg:px-24">
      <div className="text-4xl md:text-5xl lg:text-6xl font-semibold">
        My Projects
      </div>
      <div className="text-center md:text-lg">
        Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris
        est risus lectus. Phasellus consequat urna tellus
      </div>
      <div className="flex justify-center items-center w-full ">
        <ul className="flex gap-5 overflow-x-auto scrollbar-hide whitespace-nowrap md:gap-10 lg:text-xl">
          <li className="bg-[#F8F8F8] py-1 px-2 rounded-lg border border-[#b7b6b6] hover:bg-[#FD6F00] hover:text-white transition-colors cursor-pointer">
            All
          </li>
          <li className="bg-[#F8F8F8] py-1 px-2 rounded-lg border border-[#b7b6b6] hover:bg-[#FD6F00] hover:text-white transition-colors cursor-pointer">
            UI/UX
          </li>
          <li className="bg-[#FD6F00] py-1 px-2 rounded-lg border border-[#b7b6b6] text-white cursor-pointer">
            Web Design
          </li>
          <li className="bg-[#F8F8F8] py-1 px-2 rounded-lg border border-[#b7b6b6] hover:bg-[#FD6F00] hover:text-white transition-colors cursor-pointer">
            App Design
          </li>
          <li className="bg-[#F8F8F8] py-1 px-2 rounded-lg border border-[#b7b6b6] hover:bg-[#FD6F00] hover:text-white transition-colors cursor-pointer">
            Graphic Design
          </li>
        </ul>
      </div>

      <div className="w-full flex flex-col md:flex-row md:gap-5 lg:gap-10 justify-center items-center gap-5">
        <div className="w-4/5 md:w-1/3 xl:w-1/4 flex flex-col gap-2">
          <div className="bg-[#FFEBDB] rounded-lg border-none outline-none h-72 relative">
            <Image
              src={w1}
              width="160"
              className="absolute z-10 left-6 bottom-0"
              alt="project1"
            />
            <Image src={w2} width="160" className="absolute right-5" alt="project1"/>
          </div>
          <div className=" text-[#FD6F00]">Web Design</div>
          <div className="text-xl font-[700]">
            AirCalling Landing Page Design{" "}
          </div>
        </div>
        <div className="w-4/5 md:w-1/3 xl:w-1/4 flex flex-col gap-2">
          <div className="bg-[#FFEBDB] rounded-lg border-none outline-none h-72 relative">
            <Image
              src={w3}
              width="160"
              className="absolute z-10 left-6 bottom-0"
              alt="project2"
            />
            <Image src={w4} width="160" className="absolute right-5" alt="project2"/>
          </div>
          <div className=" text-[#FD6F00]">Web Design</div>
          <div className="text-xl font-[700]">
            Business Landing Page Design{" "}
          </div>
        </div>
        <div className="w-4/5 md:w-1/3 xl:w-1/4 flex flex-col gap-2">
          <div className="bg-[#FFEBDB] rounded-lg border-none outline-none h-72 relative">
            <Image
              src={w5}
              width="160"
              className="absolute z-10 left-6 bottom-0"
              alt="project3"
            />
            <Image src={w6} width="160" className="absolute right-5" alt="project3"/>
          </div>
          <div className=" text-[#FD6F00]">Web Design</div>
          <div className="text-xl font-[700]">Ecom Web Page Design </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
