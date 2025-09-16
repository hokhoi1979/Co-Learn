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
    <>
      <div className="w-full h-auto p-5 bg-gradient-to-b from-[#F0F6F6] to-[#DBFBFD]">
        <h1 className="text-2xl font-bold">Welcome back! Miss Ha </h1>
        <p className="text-gray-400">
          Manage your classes and track your teaching progress
        </p>

        <Earning />

        <div className="px-15 py-10">
          {!profile ? (
            <>
              <div className="flex flex-col items-center justify-center h-96 bg-gray-50 rounded-2xl shadow-inner p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#545252"
                    d="M13.5 0h-12C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h12c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5M13 14H2V2h11zM4 9h7v1H4zm0 2h7v1H4zm1-6.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 5 4.5M7.5 6h-2C4.675 6 4 6.45 4 7v1h5V7c0-.55-.675-1-1.5-1"
                  />
                </svg>

                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                  No Teacher Information
                </h2>
                <p className="text-gray-500 mb-6 text-center">
                  You haven’t updated your teaching profile yet.
                </p>

                <Button
                  onClick={() => setOpenProfile(true)}
                  type="secondary"
                  className="!bg-[#3fcba8] !text-white shadow-md hover:!bg-[#17ae88] "
                >
                  + Update Now
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col items-center text-center">
                <h3 className="mt-4 text-4xl font-bold text-gray-800">
                  {profile.fullName}
                </h3>
                <p className="text-gray-500">Teacher Profile</p>

                <div className="mt-6 w-full">
                  <div className="bg-white rounded-xl p-6 shadow-md space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                      <div className="flex items-center gap-3">
                        <Mail className="text-[#3fcba8]" size={20} />
                        <span>Email: {profile.email}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Lock className="text-[#3fcba8]" size={20} />
                        <span>Age: {profile.age}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="text-[#3fcba8]" size={20} />
                        <span>Date of Birth: {profile.born}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="text-[#3fcba8]" size={20} />
                        <span>Phone: {profile.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="text-[#3fcba8]" size={20} />
                        <span>Experience: {profile.experience} years</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="text-[#3fcba8]" size={20} />
                        <span>Gender: {profile.gender}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="text-[#3fcba8]" size={20} />
                        <span>Languages: {profile.languages?.join(", ")}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-gray-700 pt-4 border-t">
                      <Info className="text-[#3fcba8] mt-1" size={20} />
                      <span>Description:{profile.description}</span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => setOpenProfile(true)}
                  className="mt-6 !bg-[#3fcba8] !text-white shadow-md hover:!bg-[#17ae88]"
                >
                  Edit Profile
                </Button>
              </div>
            </>
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
    </>
  );
}

export default TeacherProfile;
