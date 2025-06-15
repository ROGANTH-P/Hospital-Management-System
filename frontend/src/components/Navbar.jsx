import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [token, settoken] = useState(true);
  return (
    <div className="flex   mt-0 items-center mb-5  justify-between text-sm py-4 border-b border-b-gray-500">
      <img onClick={() => (navigate('/'))}
        className="w-44 cursor-pointer mx-auto md:mx-0"
        src={assets.logo}
        alt=""
      />
      <ul className="hidden md:flex items-start  gap-5 font-medium">
        <NavLink to={"/"}>
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 hidden m-auto" />
        </NavLink>

        <NavLink to={"/doctors"}>
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>

        <NavLink to={"/about"}>
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/contact"}>
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center cursor-pointer gap-2 group relative">
            <img className="rounded-full w-8" src={assets.profile_pic} />
            <img className="w-2.5" src={assets.dropdown_icon} />
            <div className="absolute top-0 right-0 text-base font-medium text-gray-700 pt-10 hidden group-hover:block">
              <div className="min-w-48 flex flex-col rounded bg-stone-200 p-4 gap-4 ">
                <p onClick={() => navigate('/myprofile')} className="hover:text-black">My Profile</p>
                <p onClick={() => navigate('/myappoinment')} className="hover:text-black">My Appoinments</p>
                <p onClick={() => settoken(false)} className="hover:text-black">Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary cursor-pointer text-white rounded-full font-light py-3 px-8 hidden md:block"
          >
            Create account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
