import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="m-5">
      <p className="text-2xl text-gray-700 font-light text-center mt-8 mb-8">
        ABOUT <span className="font-semibold">US</span>
      </p>
      <div className="flex flex-col xl:flex-row  gap-12 ">
        <div className="flex justify-center">
          <img className="w-full md:max-w-[500px]" src={assets.about_image} />
        </div>
        <div className="flex flex-col font-light text-gray-700 gap-5 mt-0 justify-center  lg:mr-40">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <p className="font-medium my-3  ">Our Vision</p>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
      <p className="font-light text-2xl text-gray-700 mt-16 mb-10">
        WHY <span className="font-semibold"> CHOOSE US</span>
      </p>
      <div className="flex flex-col md:flex-row text-gray-700">
        <div className="border border-gray-300 cursor-pointer flex flex-col gap-5 text-[15px] px-10 md:px-16 py-8 md:py-14 hover:bg-primary hover:text-white transition-all duration-300">
          <b>Efficiency:</b>
          <p className="font-light">
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border border-gray-300 cursor-pointer flex flex-col gap-5 text-[15px] px-10 md:px-16 py-8 md:py-14 hover:bg-primary hover:text-white transition-all duration-300">
          <b>Convenience:</b>
          <p className="font-light">
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="border border-gray-300 cursor-pointer flex flex-col gap-5 text-[15px] px-10 md:px-16 py-8 md:py-14 hover:bg-primary hover:text-white transition-all duration-300">
          <b>Personalization:</b>
          <p className="font-light">
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
