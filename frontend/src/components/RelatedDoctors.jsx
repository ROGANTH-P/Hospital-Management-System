import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const RelatedDoctors = ({ speciality, docId }) => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [filterdoc, setfilterDoc] = useState([]);

  const applyFilt = () => {
    if (doctors.length > 0 && speciality) {
      const docdata = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setfilterDoc(docdata);
    }
  };

  useEffect(() => {
    applyFilt();
  }, [doctors, docId, speciality]);
  return (
     <div className="flex flex-col text-center justify-center text-gray-700 mt-24 gap-5">
          <p className=" text-2xl font-medium">Related Doctors</p>
          <p className="">
            Simply browse through our extensive list of trusted doctors.
          </p>
          <div className="w-full flex justify-center">
            <div className="grid gap-5 m-3 mt-0 responsive-grid">
              {filterdoc.map((item, index) => (
                <div
                  onClick={() => navigate(`/appoinment/${item._id}` ,scrollTo(0,0))}
                  key={index}
                  className="border overflow-hidden cursor-pointer border-blue-200 rounded-xl hover:translate-y-[-10px] transition-all duration-500"
                >
                  <img className="bg-blue-50" src={item.image} />
                  <div className="p-4 text-center"> 
                    <div className="flex items-center justify-center gap-2 text-green-500">
                      <p className="w-2 h-2 rounded-full bg-green-500"></p>
                      <p>Available</p>
                    </div>
                    <p className="text-lg text-gray-700 font-medium">
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
          <div className="flex justify-center">
          <button onClick={()=>(navigate('/doctors'), scrollTO(0,0))} className="w-fit bg-blue-50 a text-gray-600 px-10 py-3 mt-8 rounded-full cursor-pointer">more</button>
          </div>
    </div>
  );
};

export default RelatedDoctors;
