import React, { useState } from "react";
import bg6 from "../../../assets/img/bg6.jpg";
import { Button, Image } from "antd";
import Earning from "../ComponentTeacher/Earning";
import ModalClass from "../ComponentTeacher/ModalClass";
import { BookOutlined } from "@ant-design/icons";
import CarouselTeacher from "../ComponentTeacher/CarouselTeacher";
function TeacherClass() {
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

  const handleSubmit = (newClass) => {
    console.log("CLASS", newClass);
    setData((pre) => [...pre, newClass]);
  };

  // const course = [
  //   {
  //     name: "Python Basics for Beginners",
  //     student: "8",
  //     time: "Today, 4:00 PM",
  //     duration: "10 week",
  //     progress: 6,
  //     totalProgress: 10,
  //   },

  //   {
  //     name: "Python Basics for Beginners",
  //     student: "8",
  //     time: "Today, 4:00 PM",
  //     duration: "10 week",
  //     progress: 6,
  //     totalProgress: 10,
  //   },
  //   {
  //     name: "Python Basics for Beginners",
  //     student: "8",
  //     time: "Today, 4:00 PM",
  //     duration: "10 week",
  //     progress: 6,
  //     totalProgress: 10,
  //   },
  // ];

  const schedule = [
    {
      name: "Teach program",
      time: "8:00 PM",
      duration: "60 minutes",
      student: "29",
    },
    {
      name: "Teach program",
      time: "8:00 PM",
      duration: "60 minutes",
      student: "29",
    },
    {
      name: "Teach program",
      time: "8:00 PM",
      duration: "60 minutes",
      student: "29",
    },
  ];
  return (
    <div className=" w-full h-auto p-5 bg-gradient-to-b from-[#F0F6F6] to-[#DBFBFD]">
      <h1 className="text-2xl font-bold">Welcome back! Miss Ha </h1>
      <p className="text-gray-400">
        Manage your classes and track your teaching progress
      </p>

      <Earning />

      <div className="px-20 flex justify-between mt-5">
        <div>
          <h1 className="text-2xl font-bold">My Class</h1>
        </div>
        <Button
          onClick={showModal}
          type="secondary"
          className="!bg-[#3fcba8] !text-white shadow-md hover:!bg-[#17ae88] "
        >
          + Add new Class
        </Button>
      </div>

      <div className="w-[90%]  m-auto h-auto gap-4 mt-5">
        <div className="w-[100%] bg-white rounded-2xl mb-15 h-auto p-2">
          {data.length === 0 ? (
            <>
              <div className="flex flex-col items-center justify-center h-96 bg-gray-50 rounded-2xl shadow-inner p-6">
                <BookOutlined className="text-gray-400 text-6xl mb-4" />
                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                  No Class
                </h2>
                <p className="text-gray-500 mb-6 text-center">
                  You haven’t created any class yet. <br />
                  Start by creating your first class now.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between px-5 ">
                {data.length > 0 && (
                  <div className="flex gap-2 items-center cursor-pointer group">
                    <h1 className="text-[#00B582] font-bold text-[18px] group-hover:underline group-hover:text-[#008a66]">
                      View All
                    </h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="transition-transform duration-200  group-hover:fill-[#008a66]"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path d="M24 0v24H0V0z" />
                        <path
                          fill="#00B582"
                          d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
                          strokeWidth="0.5"
                          stroke="#16a551"
                        />
                      </g>
                    </svg>
                  </div>
                )}
              </div>

              {[...data].map((item) => {
                const percent =
                  item.progress && item.totalProgress
                    ? Math.round((item.progress / item.totalProgress) * 100)
                    : 0;

                return (
                  <div className="w-[95%] rounded-md mt-5 m-auto h-50 bg-[#F0F6F6] p-3">
                    <div className="flex gap-2">
                      <img
                        src={item.thumbnail}
                        className="w-[30%] h-44 rounded-2xl"
                        alt=""
                      />

                      <div className="w-[70%]">
                        <div className="flex justify-between">
                          <div className="flex gap-2">
                            <div>
                              <h1 className="text-[20px] font-bold">
                                {item.title || item.name}
                              </h1>
                              {item.live === "Online" && (
                                <>
                                  <div className="flex">
                                    <p className="text-[14px] text-gray-400">
                                      Link Google Meet:
                                    </p>
                                    <p className="text-[14px] ">{item.link}</p>
                                  </div>
                                </>
                              )}
                              <div className="flex gap-1 text-[14px] text-gray-400 items-center">
                                <p>
                                  {item.maxStudents || item.student} students
                                </p>

                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="#c0bebe"
                                    d="M12 7a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7"
                                    strokeWidth="0.5"
                                    stroke="#8b8585"
                                  />
                                </svg>

                                <p>
                                  {item.dates
                                    ? `${item.dates.start} → ${item.dates.end}`
                                    : item.duration}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div>
                            {item.live === "Online" && (
                              <>
                                <div className="flex gap-1.5">
                                  <h1 className="text-gray-400">
                                    Start Class:
                                  </h1>

                                  <h1>{item.time}</h1>
                                </div>

                                <div className="flex gap-1.5">
                                  <h1 className="text-gray-400">Schedule:</h1>
                                  <h1>{item.schedule.join(", ")}</h1>
                                </div>
                              </>
                            )}
                            <div className="flex gap-1">
                              <p className="text-[14px] text-right text-gray-400">
                                {" "}
                                Status:
                              </p>
                              <p className="text-[14px] text-red-400 text-right">
                                {item.live}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="flex justify-between">
                            <p className=" mb-2 text-[16px]">Progress</p>
                            <p className=" mt-1 text-right">{percent}%</p>
                          </div>

                          <div className="relative w-full h-1 bg-[#bdbdbd] rounded-full">
                            <div
                              className="absolute top-0 left-0 h-1 bg-[#5E96A6] rounded-full"
                              style={{ width: `${percent}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="mt-4 flex gap-3">
                          <button className="bg-[#8ccfb6] hover:bg-[#8bdcbf] flex rounded-xl px-2 gap-2 items-center cursor-pointer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill="#fff"
                                fillRule="evenodd"
                                d="m14.5 8l.415-.208V7.79l-.003-.003l-.006-.012l-.021-.04l-.08-.144a8 8 0 0 0-.311-.494a9.4 9.4 0 0 0-1.255-1.485C12.113 4.532 10.38 3.43 8 3.43c-2.378 0-4.112 1.101-5.238 2.182a9.4 9.4 0 0 0-1.255 1.485a8 8 0 0 0-.412.678l-.006.012l-.002.003v.001s-.001.001.414.209l-.415-.209a.47.47 0 0 0 0 .417L1.5 8l-.415.208v.002l.003.003l.006.012a3 3 0 0 0 .1.184a9.4 9.4 0 0 0 1.566 1.98c1.127 1.08 2.86 2.18 5.24 2.18c2.379 0 4.113-1.1 5.24-2.181a9.5 9.5 0 0 0 1.254-1.485a8 8 0 0 0 .391-.638l.021-.04l.006-.012l.002-.003v-.001s.001-.001-.414-.209m0 0l.415.209a.47.47 0 0 0 0-.417zM7.94 6.464a1.536 1.536 0 1 0 0 3.072a1.536 1.536 0 0 0 0-3.072M5.478 8a2.464 2.464 0 1 1 4.928 0a2.464 2.464 0 0 1-4.928 0"
                                clipRule="evenodd"
                                strokeWidth="0.5"
                                stroke="#fff"
                              />
                            </svg>

                            <p className="text-white text-[18px]">View</p>
                          </button>

                          <button className="bg-[#00B582] hover:bg-[#07d79c] flex rounded-xl px-2 gap-2 items-center cursor-pointer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 21 21"
                            >
                              <path
                                fill="none"
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5.5 6.5h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m8 3l2.4-1.8a1 1 0 0 1 1.6.8v4a1 1 0 0 1-1.6.8l-2.4-1.8z"
                                strokeWidth="1"
                              />
                            </svg>
                            <p className="text-white text-[18px]">Join</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>

        {/* <div className="w-[10%]">
          <Image className="rounded-3xl" src={bg6} width={"100%"} />
        </div> */}
      </div>

      <CarouselTeacher />
      <ModalClass
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        onSubmitData={handleSubmit}
      />
    </div>
  );
}

export default TeacherClass;
