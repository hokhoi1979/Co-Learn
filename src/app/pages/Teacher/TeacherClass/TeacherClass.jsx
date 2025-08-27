import React from "react";
import bg6 from "../../../assets/img/bg6.jpg";
import { Image } from "antd";
import Earning from "../ComponentTeacher/Earning";

function TeacherClass() {
  const course = [
    {
      name: "Python Basics for Beginners",
      student: "8",
      time: "Today, 4:00 PM",
      duration: "10 week",
      progress: 6,
      totalProgress: 10,
    },

    {
      name: "Python Basics for Beginners",
      student: "8",
      time: "Today, 4:00 PM",
      duration: "10 week",
      progress: 6,
      totalProgress: 10,
    },
    {
      name: "Python Basics for Beginners",
      student: "8",
      time: "Today, 4:00 PM",
      duration: "10 week",
      progress: 6,
      totalProgress: 10,
    },
  ];

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

      <div className="w-[90%]  m-auto h-auto flex gap-4 mt-5">
        <div className="w-[70%] rounded-2xl bg-white h-auto p-2">
          <div className="flex justify-between px-5">
            <h1 className="text-2xl font-bold">My Classes</h1>
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
          </div>

          {course.map((item) => {
            const percent = Math.round(
              (item.progress / item.totalProgress) * 100
            );

            return (
              <div className="w-[95%] rounded-md mt-5 m-auto h-42 bg-[#F0F6F6] p-3">
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-[20px] font-bold">{item.name}</h1>
                    <div className="flex gap-3 text-[14px] text-gray-400 items-center">
                      <p>{item.student} students</p>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#c0bebe"
                          d="M12 7a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7"
                          stroke-width="0.5"
                          stroke="#8b8585"
                        />
                      </svg>

                      <p>{item.duration}</p>
                    </div>
                  </div>

                  <div>
                    <h1>{item.time}</h1>
                    <p className="text-[14px] text-gray-400 text-right">
                      Next session
                    </p>
                  </div>
                </div>

                <div className="mt-2">
                  <div className="flex justify-between">
                    <p className=" mb-2 text-[16px]">Progress</p>
                    <p className=" mt-1 text-right">{percent}%</p>
                  </div>

                  <div className="relative w-full h-1   bg-[#bdbdbd] rounded-full">
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
                        fill-rule="evenodd"
                        d="m14.5 8l.415-.208V7.79l-.003-.003l-.006-.012l-.021-.04l-.08-.144a8 8 0 0 0-.311-.494a9.4 9.4 0 0 0-1.255-1.485C12.113 4.532 10.38 3.43 8 3.43c-2.378 0-4.112 1.101-5.238 2.182a9.4 9.4 0 0 0-1.255 1.485a8 8 0 0 0-.412.678l-.006.012l-.002.003v.001s-.001.001.414.209l-.415-.209a.47.47 0 0 0 0 .417L1.5 8l-.415.208v.002l.003.003l.006.012a3 3 0 0 0 .1.184a9.4 9.4 0 0 0 1.566 1.98c1.127 1.08 2.86 2.18 5.24 2.18c2.379 0 4.113-1.1 5.24-2.181a9.5 9.5 0 0 0 1.254-1.485a8 8 0 0 0 .391-.638l.021-.04l.006-.012l.002-.003v-.001s.001-.001-.414-.209m0 0l.415.209a.47.47 0 0 0 0-.417zM7.94 6.464a1.536 1.536 0 1 0 0 3.072a1.536 1.536 0 0 0 0-3.072M5.478 8a2.464 2.464 0 1 1 4.928 0a2.464 2.464 0 0 1-4.928 0"
                        clip-rule="evenodd"
                        stroke-width="0.5"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.5 6.5h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m8 3l2.4-1.8a1 1 0 0 1 1.6.8v4a1 1 0 0 1-1.6.8l-2.4-1.8z"
                        stroke-width="1"
                      />
                    </svg>
                    <p className="text-white text-[18px]">Join</p>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-[30%]">
          <div className=" bg-white h-90 rounded-2xl mb-5">
            <div className="flex gap-3 p-2 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#00B582"
                  d="M19 4h-1V3c0-.6-.4-1-1-1s-1 .4-1 1v1H8V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v1h20V7c0-1.7-1.3-3-3-3M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-9H2zm15-7c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m0 4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m-5-4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m0 4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m-5-4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m0 4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1"
                  stroke-width="0.5"
                  stroke="#fff"
                />
              </svg>

              <h1 className="text-2xl font-bold">Today Schedule</h1>
            </div>
            {schedule.map((item) => {
              return (
                <div className="bg-[#F0F6F6] w-[90%] m-auto h-20 rounded-2xl mt-3">
                  <div className="flex gap-5.5 p-3">
                    <div>
                      <h1 className="text-[16px] font-bold">{item.time}</h1>
                      <p className="text-[12px] text-gray-500">
                        {item.duration}
                      </p>
                    </div>
                    <div>
                      <h1 className="text-2xl">{item.name}</h1>
                      <p className="text-[12px] text-gray-500">
                        {item.student} students
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Image className="rounded-3xl" src={bg6} width={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default TeacherClass;
