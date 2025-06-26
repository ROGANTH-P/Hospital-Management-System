import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    phone: "+1 123 456 7890",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "20 July, 2024",
  });
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="max-w-lg">
      <div>
        <img className="rounded" src={assets.profile_pic} />
        <div className="text-3xl font-medium my-4 text-gray-700">
          {isEdit ? (
            <input
              className={`border border-gray-100 rounded max-w-72`}
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          ) : (
            <p>{userData.name}</p>
          )}
        </div>
        <hr className=" w-80 md:w-96 border border-gray-300 my-2" />
        <div className="flex flex-col gap-2">
          <p className="text-gray-500 underline text-sm font-light">
            CONTACT INFORMATION
          </p>
          <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 text-sm ">
            <p className="text-gray-700 font-medium ">Email id: </p>
            <p className="text-blue-500">{userData.email}</p>

            <p className="text-gray-700 font-medium ">Phone :</p>
            {isEdit ? (
              <input
                className="bg-gray-100 rounded-sm text-gray-600 max-w-47"
                type="text"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            ) : (
              <p className="text-blue-500">{userData.phone}</p>
            )}

            <p className="text-gray-700 font-medium">Address:</p>
            <div>
              {isEdit ? (
                <p className="">
                  <input
                    className="border border-gray-300 rounded-sm mb-2 text-gray-600"
                    type="text"
                    value={userData.address.line1}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: {
                          ...prev.address,
                          line1: e.target.value,
                        },
                      }))
                    }
                  />
                  <br />
                  <input
                    className="border border-gray-300 rounded-sm text-gray-600 "
                    type="text"
                    value={userData.address.line2}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: {
                          ...prev.address,
                          line2: e.target.value,
                        },
                      }))
                    }
                  />
                </p>
              ) : (
                <p className="flex flex-col gap2 text-gray-500">
                  {userData.address.line1} <br />
                  {userData.address.line2}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-7 text-sm text-gray-600">
          <p className="underline font-light mb-1">BASIC INFORMATION</p>
          <div className="grid grid-cols-[1fr_3fr] gap-y-2.5">
            <p className="text-gray-700  ">Gender:</p>
            {isEdit ? (
              <select
                className="bg-gray-100 rounded-sm max-w-28"
                value={userData.gender}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}

            <p className="text-gray-700 ">Birthday:</p>
            {isEdit ? (
              <input
                className="bg-gray-100 rounded-sm max-w-28 "
                type="date"
                value={userData.dob}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
              />
            ) : (
              <p>{userData.dob}</p>
            )}
          </div>
        </div>
      </div>
      <div className="text-sm mt-6">
        
        {isEdit ?
        <button
          className="cursor-pointer border  border-primary hover:bg-primary hover:text-white transition-all duration-500 rounded-full py-1 px-3 mt-5 "
          onClick={(e) => setIsEdit(false)}
        >
          Save Information
        </button> :<button
            className="cursor-pointer border border-primary hover:bg-primary hover:text-white transition-all duration-500 rounded-full py-1 px-3 "
            onClick={(e) => setIsEdit(true)}
          >
            Edit
          </button>}
      </div>
    </div>
  );
};

export default MyProfile;
