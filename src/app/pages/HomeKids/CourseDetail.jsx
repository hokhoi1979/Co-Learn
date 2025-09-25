import React from "react";
import { useLocation, useNavigate } from "react-router";
import { Icon } from "@iconify/react";
import { lesson } from "../../shared";

function CourseDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { title, description } = location.state || {};

  return (
    <>
      <div>
        <div
          className="flex gap-2 items-center cursor-pointer group"
          onClick={() => navigate("/kids/courses")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="stroke-[#d2198c] group-hover:stroke-[#b60773] transition-colors duration-200"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
              d="m10 16l-4-4m0 0l4-4m-4 4h12"
            />
          </svg>
          <h1 className="text-[#d2198c] text-[18px] group-hover:text-[#b60773] transition-colors duration-200">
            Back to Course
          </h1>
        </div>

        <div className="w-full h-auto bg-gradient-to-r from-[#a367f9] to-[#711fe3] rounded-2xl mt-5 p-5">
          <div className="flex gap-3">
            <Icon
              color="white"
              icon="mdi:book-open-page-variant"
              width="40"
              height="40"
            />
            <div className="">
              <h1 className="text-xl text-white">{title}</h1>
              <p className="text-gray-200 text-[14px]">{description}</p>
            </div>
          </div>

          <div
            className="w-full h-40 bg-white/20 
                backdrop-blur-md rounded-2xl mt-4 p-5"
          >
            <div className="flex justify-between">
              <h1 className="text-white text-xl">Current Lesson</h1>
              <p className="text-[14px] text-gray-200">Duration: 45 minutes</p>
            </div>

            <h1 className="text-white text-3xl">Creating a Platformer Game</h1>
            <button className="flex justify-center mt-3 items-center px-2 gap-2 text-[#313131] py-1 bg-white rounded-xl cursor-pointer hover:bg-[#f6f5f5]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#6d6d6d"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14zM3 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                />
              </svg>
              <h1>Start lesson</h1>
            </button>
          </div>
        </div>

        <div className="bg-[#f9f9f9] w-full h-auto mt-5 rounded-2xl border-1 border-gray-100 shadow-xl p-5">
          <h1 className="text-2xl">All Lessons</h1>

          {lesson.map((item, index) => {
            return (
              <div
                className={`w-full h-auto border-1 rounded-2xl mt-5 ${
                  item.status === "Completed" &&
                  "border-[#31ff8e] bg-[#eefbf2] hover:bg-[#d7fbe2]"
                }
                ${
                  item.status === "Current" &&
                  "border-[#f55acc] bg-[#fbeef7] hover:bg-[#fdd7f2]"
                }
                ${
                  item.status === "Not yet" &&
                  "border-[#c9c9c9] bg-white hover:bg-[#f0f0f0]"
                }
                `}
                style={{ cursor: "pointer" }}
              >
                <div className="flex justify-between p-5">
                  <div className="flex  items-center gap-2.5 ">
                    {item.status === "Completed" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#188317"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          stroke-width="0.5"
                          stroke="#53e351"
                        >
                          <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12" />
                          <path d="m17.608 9l-7.726 7.726L6 12.093l1.511-1.31l2.476 3.01l6.207-6.207z" />
                        </g>
                      </svg>
                    )}

                    {item.status === "Current" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 30 30"
                      >
                        <path
                          fill="#e10f90"
                          d="M27.318 13.153c2.241 1.236 2.24 4.458-.001 5.693L7.818 29.588C5.652 30.782 3 29.215 3 26.742V5.25c0-2.474 2.653-4.04 4.82-2.846zm-.966 3.941a1.25 1.25 0 0 0 0-2.19L6.854 4.156A1.25 1.25 0 0 0 5 5.25v21.492a1.25 1.25 0 0 0 1.853 1.095z"
                          stroke-width="1"
                          stroke="#e10f90"
                        />
                      </svg>
                    )}

                    {item.status === "Not yet" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#000"
                          d="M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
                          stroke-width="0.5"
                          stroke="#000"
                        />
                      </svg>
                    )}

                    <div>
                      <h1
                        className={` text-xl 
                        ${item.status === "Completed" && "text-[#087234]"}
                ${item.status === "Current" && "text-[#e10f90]"}
                ${item.status === "Not yet" && "border-[#c9c9c9] text-gray-500"}
                        `}
                      >
                        Lesson {index + 1}: {item.title}
                      </h1>
                      <p className="text-gray-400">{item.minutes} min</p>
                    </div>
                  </div>

                  <h1
                    className={`text-white px-2 h-6 rounded-2xl items-center ${
                      item.status === "Completed" && "bg-[#00c85a]"
                    }
                    ${item.status === "Current" && "bg-[#e10f90]"}
                    ${item.status === "Not yet" && "bg-[#5c5c5c]"}
                    `}
                  >
                    {item.status}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CourseDetail;
