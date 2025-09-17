import React, { useState } from "react";
import Earning from "../ComponentTeacher/Earning";
import { Button } from "antd";
import CarouselTeacher from "../ComponentTeacher/CarouselTeacher";
import ModalProfile from "../ComponentTeacher/ModalProfile";
import { Mail, Phone, Users, Calendar, Lock, Globe, Info } from "lucide-react";

function TeacherProfile() {
  const [profile, setProfile] = useState(null);
  const [openProfile, setOpenProfile] = useState(null);

  const handleSubmitTeacher = (values) => {
    setProfile(values);
  };

  const handleTeacherOk = () => {
    setOpenProfile(false);
  };

  return (
    <div className="w-full min-h-screen p-5 bg-gradient-to-b from-[#F0F6F6] to-[#DBFBFD]">
      <h1 className="text-2xl font-bold">Welcome back! Miss Ha </h1>
      <p className="text-gray-500 mb-6">
        Manage your classes and track your teaching progress
      </p>

      <Earning />

      <div className="py-10">
        {!profile ? (
          <div className="flex flex-col items-center justify-center h-96 bg-white rounded-2xl shadow-md p-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 16 16"
            >
              <path
                fill="#9ca3af"
                d="M13.5 0h-12C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h12c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5M13 14H2V2h11zM4 9h7v1H4zm0 2h7v1H4zm1-6.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 5 4.5M7.5 6h-2C4.675 6 4 6.45 4 7v1h5V7c0-.55-.675-1-1.5-1"
              />
            </svg>

            <h2 className="text-xl font-semibold text-gray-700 mt-4">
              No Teacher Information
            </h2>
            <p className="text-gray-500 mb-6 text-center">
              You haven’t updated your teaching profile yet.
            </p>

            <Button
              onClick={() => setOpenProfile(true)}
              type="primary"
              className="!bg-[#3fcba8] !text-white shadow-md hover:!bg-[#17ae88] px-6 py-2 rounded-lg"
            >
              + Update Now
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center w-[70%] justify-center m-auto">
            {profile.photo && (
              <img
                src={profile.photo}
                alt="Teacher Avatar"
                className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md -mb-12 z-10"
              />
            )}

            <div className="bg-white rounded-2xl shadow-lg p-8 w-full  md:w-3/4 lg:w-2/3 mt-20">
              <h3 className="text-3xl font-bold text-gray-800 text-center">
                {profile.fullName}
              </h3>
              <p className="text-gray-500 mb-8 text-center">Teacher Profile</p>

              <div className="flex py-2 px-10 justify-between text-gray-700 text-center">
                <div className="">
                  <div className="flex items-center gap-3 py-2">
                    <Mail className="text-[#3fcba8]" size={20} />
                    <span>{profile.email}</span>
                  </div>
                  <div className="flex items-center gap-3 py-2">
                    <Lock className="text-[#3fcba8]" size={20} />
                    <span>Age: {profile.age}</span>
                  </div>
                  <div className="flex items-center gap-3 py-2">
                    <Calendar className="text-[#3fcba8]" size={20} />
                    <span>Birthday: {profile.born}</span>
                  </div>
                  <div className="flex items-center gap-3 py-2">
                    <Phone className="text-[#3fcba8]" size={20} />
                    <span>{profile.phone}</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 py-2">
                    <Users className="text-[#3fcba8]" size={20} />
                    <span>Experience: {profile.experience} years</span>
                  </div>
                  <div className="flex items-center gap-3 py-2">
                    <Users className="text-[#3fcba8]" size={20} />
                    <span>Gender: {profile.gender}</span>
                  </div>
                  <div className="flex items-center gap-3 py-2 md:col-span-2">
                    <Globe className="text-[#3fcba8]" size={20} />
                    <span>Languages: {profile.languages?.join(", ")}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t pt-6 space-y-6 text-gray-700">
                <div className="flex py-2 px-10 justify-between gap-4">
                  {profile.degree && (
                    <div className="flex items-center gap-3">
                      <Info className="text-[#3fcba8]" size={20} />
                      <a
                        href={profile.degree}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        View Certificate
                      </a>
                    </div>
                  )}
                  {profile.cv && (
                    <div className="flex items-center gap-3">
                      <Info className="text-[#3fcba8]" size={20} />
                      <a
                        href={profile.cv}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        View CV
                      </a>
                    </div>
                  )}
                </div>

                <div className="flex  px-10 justify-between items-start gap-3">
                  <div className="flex gap-2">
                    <Info className="text-[#3fcba8] mt-1" size={20} />
                    <span className="leading-relaxed">
                      Description:{profile.description}
                    </span>
                  </div>
                  <div></div>
                </div>
              </div>

              <div className="flex justify-center mt-10">
                <Button
                  onClick={() => setOpenProfile(true)}
                  className="!bg-[#3fcba8] !text-white shadow-md hover:!bg-[#17ae88] px-8 py-2 rounded-lg font-medium"
                >
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <CarouselTeacher />

      <ModalProfile
        isModalOpen={openProfile}
        handleCancel={() => setOpenProfile(false)}
        onSubmitData={handleSubmitTeacher}
        handleOk={handleTeacherOk}
        initialState={profile}
      />
    </div>
  );
}

export default TeacherProfile;
