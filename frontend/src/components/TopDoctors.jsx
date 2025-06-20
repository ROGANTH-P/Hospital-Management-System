import React, { useContext } from "react";
//import { doctors } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
const TopDoctors = () => {

  const navigate = useNavigate();
  const {doctors} = useContext(AppContext)
  return (
    <div className="flex flex-col items-center gap-4 my-16 mx-5 md:mx-10 lg:mx-14 text-gray-700">
      <h1 className="text-3xl text-center font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 font-normal text-center">Simply browse through our extensive list of trusted doctors.</p>
      {/* {specialityData.map((item, index) => ( */}
       <div className="w-full flex justify-center">
      <div className=" gap-5 grid responsive-grid gap-y-6 px-3 pt-5 sm:px-0 cursor-pointer ">
        {doctors.slice(0, 10).map((item, index) => (
          <div  onClick={()=> navigate(`/appoinment/${item._id}`)}  className="border overflow-hidden cursor-pointer border-blue-200 rounded-xl hover:translate-y-[-10px] transition-all duration-500" key={index}>
            <img className="bg-blue-50" src={item.image} />
            <div className="p-4  text-center">
              <div className="flex items-center justify-center gap-2  text-green-500">
                <p className="w-2  h-2  rounded-full bg-green-500"></p> <p className="">Available</p>
              </div>
              <p className="text-lg text-gray-700 font-medium ">{item.name}</p>
              <p className="text-sm text-gray-700 font-normal">{item.speciality}</p>
            </div>
           
          </div>
        ))}
      </div></div>

      <button onClick={()=>(navigate('/doctors'), scrollTO(0,0))} className="bg-blue-50 text-gray-600 px-10 py-3 mt-8 rounded-full cursor-pointer">more</button>
    </div>
  );
};

export default TopDoctors;
