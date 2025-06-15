import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-10 m-auto md:py-[10vw] md:mb-[-30px] ">
        <p className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold text-white leading-tight md:leading-tight lg:leading-tight">
          Book Appoinment <br /> With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img className="w-28" src={assets.group_profiles} />
          <p>
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block"/> schedule your appointment hassle-free.
          </p>
        </div>
        <a className=" flex items-center gap-2 bg-white text-gray-700 px-8 py-3 rounded-full text-sm hover:scale-105 duration-300 transition-all"
         href="#speciality">
          <button >Book appoinments</button>
          <img className="w-3" src={assets.arrow_icon} />
        </a>
      </div>
      <div className="md:w-1/2 relative">
        <img className="w-11/12 md:absolute bottom-0 h-auto rounded-lg" src={assets.header_img} />
      </div>
    </div>
  );
};

export default Header;
