import React from "react";
import pic from "../../../public/images/test.png";
import pic2 from "../../../public/images/test2.png";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="py-12 bg-white w-full px-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold">Testimonials</h2>
        <p className="mt-4 text-base md:text-lg text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus <br className="hidden md:block" />
          netus in. Aliquet donec morbi convallis pretium.
        </p>
      </div>

      <div className="mt-10 w-full mx-auto">
        <div className="w-full relative flex justify-center items-center">
          <div className="flex items-center xl:space-x-10">
            <div className="opacity-30 transform scale-75 hidden xl:block">
              <div className="text-left flex items-center gap-10">
                <div className="flex flex-col items-center">
                  <p className="text-gray-600 text-justify">
                    Lorem ipsum dolor sit amet <br /> consectetur. Lorem ipsum dolor sit met consectetur.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#f8f8f8] w-full xl:w-4/5 p-6 rounded-lg">
              <div className="text-left gap-10 flex flex-col md:flex-row items-center">
                <Image
                  className="w-40 h-40 rounded-full mx-auto"
                  src={pic}
                  alt="Person 2"
                />
                <div className="flex flex-col items-start relative">
                  <span className="absolute -left-3 -top-2 text-orange-600 text-xl font-semibold">“</span>
                  <p className="text-gray-600 text-justify">
                    Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.
                  </p>
                  <span className="absolute bottom-11 right-28 text-orange-600 text-xl font-semibold">”</span>
                  <p className="mt-4 font-bold text-gray-900">Name</p>
                  <p className="text-gray-600 text-sm">CEO</p>
                </div>
              </div>
            </div>

            <div className="opacity-30 transform scale-75 hidden xl:block">
              <div className="text-left flex items-center gap-10">
                <Image
                  className="w-40 h-40 rounded-full mx-auto"
                  src={pic2}
                  alt="Person 3"
                />
                <div className="flex flex-col items-start">
                  <span className="text-orange-600 text-xl font-semibold">“</span>
                  <p className="text-gray-600 text-left">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <p className="mt-4 font-bold text-gray-900">Name</p>
                  <p className="text-gray-600">CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-2">
          <span className="w-10 h-4 bg-gray-300 rounded-full"></span>
          <span className="w-10 h-4 bg-orange-500 rounded-full"></span>
          <span className="w-10 h-4 bg-gray-300 rounded-full"></span>
          <span className="w-10 h-4 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
