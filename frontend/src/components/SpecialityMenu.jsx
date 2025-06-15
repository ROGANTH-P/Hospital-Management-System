import React from "react";
import { assets } from "../assets/assets";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";
const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      className="py-16 flex flex-col items-center justify-center gap-4 text-center text-gray-700">
      <p className="text-3xl font-medium">Find by Speciality </p>
      <p className="">
        Simply browse through our extensive list of trusted doctors, schedule
        <br /> your appointment hassle-free.
      </p>

      <div className="flex sm:justify-center gap-4 w-full pt-5 overflow-scroll">
        {specialityData.map((item, index) => (
          <Link onClick={() => scrollTo(0,0)} className="flex flex-col items-center flex-shrink-0 cursor-pointer hover:translate-x-[-10px] transition-all duration-500" key={index} to={`/doctors/${item.speciality}`}>
            <img className="w-16 sm:w-24 mb-2" src={item.image} />
            <p className="">{item.speciality}</p>
          </Link> 
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
