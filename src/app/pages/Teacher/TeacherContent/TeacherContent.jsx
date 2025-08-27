import React from "react";
import Earning from "../ComponentTeacher/Earning";
import { Image } from "antd";
import { Button, Modal, Form, Input, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";

import bg1 from "../../../assets/img/bg1.jpg";
import ModalTeacher from "../ComponentTeacher/ModalTeacher";
const course = [
  {
    title: "Python Programming for Beginners",
    lessons: "12",
    description: "Manage your classes and track your teaching progress ",

    price: "25$",
  },
  {
    title: "Python Programming for Beginners",
    lessons: "12",
    description: "Manage your classes and track your teaching progress ",
    price: "25$",
  },
  {
    title: "Python Programming for Beginners",
    lessons: "12",
    description: "Manage your classes and track your teaching progress ",
    price: "25$",
  },
  {
    title: "Python Programming for Beginners",
    lessons: "12",
    description: "Manage your classes and track your teaching progress ",
    price: "25$",
  },
  {
    title: "Python Programming for Beginners",
    lessons: "12",
    description: "Manage your classes and track your teaching progress ",
    price: "25$",
  },
  {
    title: "Python Programming for Beginners",
    lessons: "12",
    description: "Manage your classes and track your teaching progress ",
    price: "25$",
  },
];
function TeacherContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (newCourse) => {
    console.log("DATA", newCourse);
    setData((pre) => [...pre, newCourse]);
  };

  return (
    <>
      <div className=" w-full h-auto p-5 bg-gradient-to-b from-[#F0F6F6] to-[#DBFBFD]">
        <h1 className="text-2xl font-bold">Welcome back! Miss Ha </h1>
        <p className="text-gray-400">
          Manage your classes and track your teaching progress
        </p>

        <Earning />

        <div className="px-15">
          <div className="flex justify-between mt-5">
            <div>
              <h1 className="text-2xl font-bold">My Course</h1>
            </div>
            <Button
              onClick={showModal}
              type="secondary"
              className="!bg-[#3fcba8] !text-white shadow-md hover:!bg-[#17ae88] "
            >
              + Add new course
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-5">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full h-auto bg-white rounded-2xl overflow-hidden"
                >
                  <img
                    src={item.thumbnail}
                    className="w-full h-1/2 object-cover rounded-t-2xl"
                  />

                  <div className="p-3">
                    <h2 className="font-bold text-lg">{item.title}</h2>
                    <h4 className=" text-gray-500">{item.description}</h4>

                    <div className="flex justify-between gap-2">
                      <p className="text-gray-500 w-15">Lessons:</p>
                      <p className=" font-bold"> {item.lessons}</p>
                    </div>

                    <div className="flex justify-between gap-2">
                      <p className="text-gray-500 w-15">Pricing:</p>
                      <p className="font-semibold text-green-600">
                        {item.price}$/ lessons
                      </p>
                    </div>

                    <div className="mt-5 gap-1.5 grid grid-cols-2">
                      <button
                        type="secondary"
                        className="bg-[#76eacd] cursor-pointer hover:bg-[#3edfb7] py-1 w-full h-auto text-white font-medium rounded-md flex gap-2 items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#fff"
                            d="m14.06 9l.94.94L5.92 19H5v-.92zm3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"
                            stroke-width="0.5"
                            stroke="#fff"
                          />
                        </svg>
                        Edit
                      </button>
                      <button
                        type="secondary"
                        className="bg-[#20ba93] cursor-pointer hover:bg-[#33a286] py-1 w-full h-auto text-white font-medium rounded-md flex gap-2 items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="white"
                            d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
                            stroke-width="0.5"
                            stroke="#2db673"
                          />
                        </svg>
                        View
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ModalTeacher
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        onSubmitData={handleSubmit}
      />
    </>
  );
}

export default TeacherContent;
