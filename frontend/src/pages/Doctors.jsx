import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
//import { doctors } from "../assets/assets";
import { specialityData } from "../assets/assets";
const Doctors = () => {
  const { speciality } = useParams();
  const {specialityyData} = useParams();
  const [fliterDoc, setfilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);

  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);
  /*
  Another possible way to filter the doctors data  
   const applyFilter = speciality
     ? doctors.filter((doc) => doc.speciality === speciality)
     : doctors;
*/
  const applyFilter = () => {
    if (speciality) {
      setfilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setfilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);
  // console.log(speciality);

  return (
    <div>
      <p className="font-medium text-gray-700">Browse through the doctors specialist.</p>
      <div cl className="flex flex-col md:flex-row gap-10  mt-5">
        <div className="  flex-col gap-2 inline-flex cursor-pointer">
          <>
          {/*
            **Another method get the specialist name**

          {specialityData.map((item, index) => (
            <Link
              onClick={() => {
                scrollTo(0, 0);
                 setActiveIndex(index);
              }}
              key={index}
              to={`/doctors/${item.speciality}`}
            >
              <p className= {`font-light px-2 py-1 text-gray-700  border rounded-md  border-gray-300 ${
              specialityyData === item.speciality ? "bg-indigo-100 text-black font-normal" : ""
            }`}>
                {item.speciality}
              </p>
            </Link>
          ))} */}</>

          <p
            onClick={() =>
              speciality === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician")
            }
            className={` font-light px-2 py-1 text-gray-700 border rounded-md  border-gray-300 ${speciality === 'General physician' ? 'bg-indigo-100 text-black font-normal' : ''}  `}
          >
            General physician
          </p>
          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
            className={` font-light px-2 py-1 text-gray-700 border rounded-md  border-gray-300 ${speciality === 'Gynecologist' ? 'bg-indigo-100 text-black font-normal' : ''}  `}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
            className={` font-light px-2 py-1 text-gray-700 border rounded-md  border-gray-300 ${speciality === 'Dermatologist' ? 'bg-indigo-100 text-black font-normal' : ''}  `}
          >
            Dermatologist
          </p>
          <p
            onClick={ () =>
              
              speciality === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
                
            }
            className={` font-light px-2 py-1 text-gray-700 border rounded-md  border-gray-300 ${speciality === 'Pediatricians' ? 'bg-indigo-100 text-black font-normal' : ''}  `}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
            className={` font-light px-2 py-1 text-gray-700 border rounded-md  border-gray-300 ${speciality === 'Neurologist' ? 'bg-indigo-100 text-black font-normal' : ''}  `}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist")
            }
            className={` font-light px-2 py-1 text-gray-700 border rounded-md  border-gray-300 ${speciality === 'Gastroenterologist' ? 'bg-indigo-100 text-black font-normal' : ''}  `}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="gap-5 m-3 mt-0 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {fliterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appoinments/${item._id}`)}
              className="items-center border border-blue-200 rounded-xl hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <img className="bg-blue-50" src={item.image} />
              <div className="p-4  text-center">
                <div className="flex items-center justify-center gap-2  text-green-500">
                  <p className="w-2   h-2  rounded-full bg-green-500"></p>{" "}
                  <p className="">Available</p>
                </div>
                <p className="text-lg text-gray-700 font-medium ">
                  {item.name}
                </p>
                <p className="text-sm text-gray-700 font-normal">
                  {item.speciality}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
