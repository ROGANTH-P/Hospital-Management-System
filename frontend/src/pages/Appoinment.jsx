import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appoinment = () => {
  const navigate = useNavigate();
  const { docId } = useParams();

  const { doctors, curSymbol } = useContext(AppContext);

  const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  // console.log("rohajj");

  // console.log(doctors._id);
  console.log(docId);

  const [docInfo, setDocInfo] = useState(null);

  const [docSlots, setDocSlots] = useState([]);
  const [slotindex, setSlotindex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  const getAvailabeSlots = async () => {
    setDocSlots([]);

    let today = new Date();

    // console.log(today);
    for (let i = 0; i < 7; i++) {
      let currentdate = new Date(today);
      //console.log(currentdate);
      currentdate.setDate(today.getDate() + i);
      console.log(currentdate);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);
      // console.log(endTime);
      //  console.log(today.getDate() , currentdate.getDate());

      if (today.getDate() === currentdate.getDate()) {
        console.log(today.getDate(), currentdate.getDate());
        //  console.log(currentdate.getHours() , currentdate.getMinutes());
        currentdate.setHours(
          currentdate.getHours() > 10 ? currentdate.getHours() + 1 : 10
        );
        currentdate.setMinutes(currentdate.getMinutes() > 30 ? 30 : 0);
        //   console.log(currentdate.getHours() , currentdate.getMinutes());
      } else {
        currentdate.setHours(10);
        currentdate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentdate < endTime) {
        let formattime = currentdate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        timeSlots[formattime];

        timeSlots.push({
          datetime: new Date(currentdate),
          time: formattime,
        });

        currentdate.setMinutes(currentdate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
      // console.log(timeSlots);
    }
  };
  const [fliterDoc, setfilterDoc] = useState([]);
  // console.log(docInfo.speciality);

  const applyFilter = () => {
    if (docInfo && docInfo.speciality) {
      setfilterDoc(
        doctors.filter((doc) => doc.speciality === docInfo.speciality && doc._id !== docInfo._id)
      );
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    // if (docInfo && doctors.length > 0) {
    applyFilter();
    // }
  }, [docInfo, doctors]);
  useEffect(() => {
    getAvailabeSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);
  return (
    docInfo && (
      <div className="w-full">
        <div className="flex flex-col lg:flex-row gap-5 px-3 ">
          <div className="">
            <img
              className="bg-primary rounded-xl w-full sm:max-w-72 "
              src={docInfo.image}
            />
          </div>
          <div className="flex-1  flex-col border text-gray-700 border-gray-500 rounded-xl py-8  px-5">
            <p className="flex gap-3 text-3xl font-medium">
              {docInfo.name} <img src={assets.verified_icon} />
            </p>
            <div className="flex flex-col py-3 md:flex-row text-gray-600 gap-1">
              <div className="flex flex-row">
                <p> {docInfo.degree} - </p>
                <p> {docInfo.speciality}</p>
              </div>
              <p className="flex w-20 md:w-auto justify-center text-sm  ml-1 rounded-full py-1 px-3 border border-gray-500">
                {docInfo.experience}
              </p>
            </div>
            <p className="flex gap-2 font-medium text-gray-700">
              About <img src={assets.info_icon} />
            </p>
            <p className="text-gray-600 py-2">{docInfo.about}</p>
            <div className="flex">
              <p className="text-gray-600">Appoinment fee:</p>
              <p className="text-gray-700 font-medium">
                {curSymbol}
                {docInfo.fees}
              </p>
            </div>
          </div>
        </div>

        <div className="ml-2 lg:ml-76 lg:pl-4  mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div className="flex gap-3 lg:gap-14 overflow-x-scroll w-full items-center mt-4">
            {docSlots.length &&
              docSlots.map((item, index) => (
                <div>
                  <div
                    onClick={() => {
                      setSlotindex(index);
                      setSlotTime("");
                    }}
                    className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                      slotindex === index
                        ? "bg-primary text-white"
                        : "border border-gray-300"
                    }`}
                    key={index}
                  >
                    <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                    <p>{item[0] && item[0].datetime.getDate()}</p>
                  </div>
                  <div key={index}>
                    <p>{item.time}</p>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex items-center w-full overflow-x-scroll gap-5 mt-10">
            {docSlots.length &&
              docSlots[slotindex].map((item, index) => (
                <p
                  onClick={() => {
                    setSlotTime(item.time);
                  }}
                  className={`flex-shrink-0  rounded-full px-5 py-2 text-sm font-light ${
                    item.time === slotTime
                      ? "bg-primary text-white font-medium"
                      : "border border-gray-300"
                  }`}
                  key={index}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <div
            onClick={() => navigate("/myappoinment")}
            className="flex cursor-pointer rounded-full text-center text-white bg-primary py-2 px-7 mt-8  w-fit"
          >
            Book an Appoinment
          </div>
        </div>
        <RelatedDoctors docId ={docInfo._id} speciality ={docInfo.speciality}/>
        {/* <div className="flex flex-col text-center text-gray-700 mt-24 gap-5">
          <p className=" text-2xl font-medium">Related Doctors</p>
          <p className="">
            Simply browse through our extensive list of trusted doctors.
          </p>
          <div className="w-full flex justify-center">
            <div className="grid gap-5 m-3 mt-0 responsive-grid">
              {fliterDoc.map((item, index) => (
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
        </div> */}
      </div>
    )
  );
};

export default Appoinment;
