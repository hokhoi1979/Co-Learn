import React, { useState } from "react";
import Summary from "../ComponentParent/Summary";
import { Button, Calendar, Card, Checkbox, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import { User, Mail, Phone, Lock, Users } from "lucide-react";
import ModalProfileParent from "../ComponentParent/ModalProfileParent";
import ModalProfileChildren from "../ComponentParent/ModalProfileChildren";
import CarouselTeacher from "../../Teacher/ComponentTeacher/CarouselTeacher";

function ParentProfile() {
  const [profileParent, setProfileParent] = useState(null);
  const [profileChildren, setProfileChildren] = useState(null);

  const [openProfileParent, setOpenProfileParent] = useState(false);
  const [openProfileChildren, setOpenProfileChildren] = useState(false);

  const handleParentOk = () => {
    setOpenProfileParent(false);
  };

  const handleSubmitParent = (values) => {
    setProfileParent(values);
  };

  const handleChildrenOk = () => {
    setOpenProfileChildren(false);
  };

  const handleSubmitChildren = (values) => {
    setProfileChildren(values);
  };
  return (
    <div className="w-full min-h-screen p-6 bg-gradient-to-b from-[#F0F6F6] to-[#DBFBFD]">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome Parent!</h1>
        <p className="text-gray-500">
          Manage and update your children’s learning process
        </p>
      </div>

      <Summary />

      <div className="mt-8 w-[90%] mx-auto ">
        <div className="flex gap-3 mb-10">
          <div className="bg-white w-[50%] rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Profile Parent
            </h2>
            {!profileParent ? (
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
                      stroke-width="0.5"
                      stroke="white"
                    />
                  </svg>

                  <h2 className="text-xl font-semibold text-gray-700 mb-2">
                    No Information of Parent
                  </h2>
                  <p className="text-gray-500 mb-6 text-center">
                    You have not updated your information. <br />
                  </p>

                  <Button
                    onClick={() => setOpenProfileParent(true)}
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
                  <h3 className="mt-4 text-2xl font-bold text-gray-800">
                    {profileParent.parent}
                  </h3>
                  <p className="text-gray-500">
                    Parent of {profileParent.children}
                  </p>

                  <div className="mt-6 w-full">
                    <div className="bg-gray-50 rounded-xl p-4 shadow-inner space-y-3">
                      <div className="flex items-center gap-3 text-gray-700">
                        <Mail className="text-[#3fcba8]" size={20} />
                        <span>Email: {profileParent.email}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Phone className="text-[#3fcba8]" size={20} />
                        <span>Phone:{profileParent.phone}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Users className="text-[#3fcba8]" size={20} />
                        <span>Children: {profileParent.children}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Lock className="text-[#3fcba8]" size={20} />
                        <span>Age: {profileParent.age}</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={() => {
                      setOpenProfileParent(true);
                    }}
                    className="mt-6 !bg-[#3fcba8] !text-white shadow-md hover:!bg-[#17ae88]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                      </g>
                    </svg>
                    Edit Profile
                  </Button>
                </div>
              </>
            )}
          </div>

          <div className="bg-white w-[50%] rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Profile Children
            </h2>

            {!profileChildren ? (
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
                      stroke-width="0.5"
                      stroke="white"
                    />
                  </svg>

                  <h2 className="text-xl font-semibold text-gray-700 mb-2">
                    No Information of Children
                  </h2>
                  <p className="text-gray-500 mb-6 text-center">
                    You have not updated your information. <br />
                  </p>

                  <Button
                    onClick={() => setOpenProfileChildren(true)}
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
                  <h3 className="mt-4 text-2xl font-bold text-gray-800">
                    {profileParent.children}
                  </h3>
                  <p className="text-gray-500">
                    Children of {profileParent.parent}
                  </p>

                  <div className="mt-6 w-full">
                    <div className="bg-gray-50 rounded-xl p-4 shadow-inner space-y-3">
                      <div className="flex items-center gap-3 text-gray-700">
                        <Mail className="text-[#3fcba8]" size={20} />
                        <span>Email: {profileChildren.email}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Users className="text-[#3fcba8]" size={20} />
                        <span>Name:{profileChildren.children}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Users className="text-[#3fcba8]" size={20} />
                        <span>Parent: {profileParent.parent}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Lock className="text-[#3fcba8]" size={20} />
                        <span>Age: {profileChildren.age}</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={() => setOpenProfileChildren(true)}
                    className="mt-6 !bg-[#3fcba8] !text-white shadow-md hover:!bg-[#17ae88]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                      </g>
                    </svg>
                    Edit Profile
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
        <ModalProfileParent
          isModalOpen={openProfileParent}
          handleCancel={() => setOpenProfileParent(false)}
          onSubmitData={handleSubmitParent}
          initialState={profileParent}
          handleOk={handleParentOk}
        />

        <ModalProfileChildren
          isModalOpen={openProfileChildren}
          handleCancel={() => setOpenProfileChildren(false)}
          onSubmitData={handleSubmitChildren}
          handleOk={handleChildrenOk}
          initialState={profileChildren}
        />
        <CarouselTeacher />
      </div>
    </div>
  );
}

export default ParentProfile;
