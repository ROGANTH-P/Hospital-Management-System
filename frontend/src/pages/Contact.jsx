import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <p className="text-gray-700 text-2xl text-center m-10">
        CONTACT <span className="font-semibold">US</span>{" "}
      </p>
      <div className="flex justify-center text-gray-700">
        <div className="flex flex-col md:flex-row gap-10">
          <img className="w-full md:max-w-[450px] max-h-[400px] rounded-sm" src={assets.contact_image} />
          <div className="flex flex-col gap-5 ">
            <b>Our OFFICE</b>
            <p className="text-sm font-light">54709 Willms Station<br/> Suite 350, Washington, USA</p>
            <p className="text-sm font-light">Tel: (415) 555‑0132<br/>Email: greatstackdev@gmail.com</p>
            
            <b>Careers at PRESCRIPTO</b>
            <p className="text-sm font-light"> Learn more about our teams and job openings.</p>
            <div >
            <button className="border border-gray-300 py-2 px-3 font-light hover:bg-black cursor-pointer hover:rounded-xl hover:text-white transition-all duration-500">Explore Jobs</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
