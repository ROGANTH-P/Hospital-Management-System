import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="flex px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-32  bg-primary rounded-lg ">
      <div className="py-12 flex flex-col mx-auto items-start   gap-5">
        <div className="">
          <p className="text-4xl text-white font-bold text-start ">
            Book Appoinment
          </p>
          <p className="text-4xl text-white font-bold text-start py-5">
          
            with 100+ Trusted Doctors
          </p>
        </div>
        <button
          onClick={() => navigate("/login")}
          className="py-2 px-6  font-light rounded-full bg-gray-50 cursor-pointer"
        >
          Create account
        </button>
      </div>
      <div className="hidden md:block md:w-1/2 lg-[370px] relative">
        <img
          className="w-full h-80 absolute left-0 bottom-0 max-w-md"
          src={assets.appointment_img}
        />
      </div>
    </div>
  );
};

export default Banner;
