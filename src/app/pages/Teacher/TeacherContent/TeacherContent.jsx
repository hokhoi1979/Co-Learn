import Earning from "../ComponentTeacher/Earning";
import { Button } from "antd";
import { useState } from "react";
import { BookOutlined } from "@ant-design/icons";

import ModalTeacher from "../ComponentTeacher/ModalTeacher";
import CarouselTeacher from "../ComponentTeacher/CarouselTeacher";
import { Outlet, useNavigate } from "react-router";

function TeacherContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
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

  const isViewingContent = location.pathname.includes("viewContent");

  return (
    <>
      <div className=" w-full h-auto p-5 bg-gradient-to-b from-[#F0F6F6] to-[#DBFBFD]">
        <h1 className="text-2xl font-bold">Welcome back! Miss Ha </h1>
        <p className="text-gray-400">
          Manage your classes and track your teaching progress
        </p>

        <Earning />

        {!isViewingContent && (
          <div className="px-15 mb-10">
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
            {data.length === 0 ? (
              <>
                <div className="flex flex-col items-center justify-center h-70  mt-10 bg-gray-50 rounded-2xl shadow-inner p-6">
                  <BookOutlined className="text-gray-400 text-6xl mb-4" />
                  <h2 className="text-xl font-semibold text-gray-700 mb-2">
                    No Course
                  </h2>
                  <p className="text-gray-500 mb-6 text-center">
                    You haven’t created any course yet. <br />
                    Start by creating your first class now.
                  </p>
                </div>
              </>
            ) : (
              <>
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

                          <div className="mt-5 gap-1.5 grid grid-cols-3">
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
                              className="bg-[#ea8576] cursor-pointer hover:bg-[#e95a44] py-1 w-full h-auto text-white font-medium rounded-md flex gap-2 items-center justify-center"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="#fff"
                                  d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
                                  stroke-width="0.5"
                                  stroke="#fff"
                                />
                              </svg>
                              Delete
                            </button>

                            <button
                              onClick={() =>
                                navigate("/teacher/content/viewContent")
                              }
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
              </>
            )}
          </div>
        )}

        <Outlet />
        <CarouselTeacher />
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
