import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate()
  return (
    <div className=" mt-16 mb-5 bottom-0">
      <div className="flex flex-col lg:flex-row   border-b  border-b-gray-500 w-full  ">
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          <img className="w-44" src={assets.logo} />
          <p className="font-normal text-gray-600 w-full items-start leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 lg:gap-44  mb-5 mt-10 lg:mt-0">
          <div className="flex flex-col pl-0 lg:pl-64  pt-0 pb-0 gap-6">
            <h1 className=" font-medium text-gray-700">COMPANY</h1>
            <div className="flex flex-col gap-2 font-light text-gray-700">
              <h1 className="cursor-pointer" onClick={() =>{navigate('/'), scrollTo(0,0)}}>Home</h1>
              <h1>Contact us</h1>
              <h1>About us</h1>
              <h1>Privacy policy</h1>
            </div>
          </div>
          <div className="flex flex-col lg:ml-5  pt-0 pb-0 gap-6">
            <h1 className="font-medium text-gray-700">GET IN TOUCH</h1>
            <div className="font-light flex flex-col gap-2 text-gray-700">
              <h1>+91 9876543210</h1>
              <h1>XYZ@gamil.com</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center pt-5 font-light text-gray-700">Copyright © 2025 ROGANTH - All Right Reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;
