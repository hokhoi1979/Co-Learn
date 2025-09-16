import React, { useState } from "react";
import HeaderKid from "../../layouts/Header/HeaderKid";
import { Icon } from "@iconify/react";
import CourseKid from "./CourseKid";
import { Link, Outlet } from "react-router-dom";
function HomeKids() {
  const [option, setOption] = useState("courses");

  return (
    <>
      <div className="">
        <div
          className="fixed top-0 left-0 w-full z-50
             backdrop-blur-md bg-white/70 shadow-sm"
        >
          <HeaderKid />
        </div>

        <div
          className="w-full h-auto  
                       bg-gradient-to-r from-white via-50% to-[#fee6fb] shadow-md px-20 pt-[120px]"
        >
          <h1 className="flex justify-center pt-5 text-5xl  bg-gradient-to-r from-[#7321e6] via-[#ff0199] to-[#eec029] bg-clip-text text-transparent">
            Hey Children!
          </h1>
          <p className="text-[20px] text-purple-600 flex justify-center font-bold">
            Ready for another AWESOME coding adventure?
          </p>

          <p className="text-[14px] text-gray-400 flex justify-center font-bold">
            Let's create something amazing together today!
          </p>

          <div className="flex gap-4 justify-center pt-6">
            <button
              className="w-40 h-12 rounded-3xl 
                   bg-gradient-to-r from-[#8875f2] to-[#f64fb3] 
                   hover:from-[#f64fb3] hover:to-[#8875f2] 
                   transition-all duration-300 hover:shadow-lg"
            >
              <p className="text-white text-xl cursor-pointer">
                7 days Streak!
              </p>
            </button>

            <button
              className="w-40 h-12 rounded-3xl bg-gradient-to-r from-[#75dff2]  to-[#8eecac] 
            hover:from-[#8eecac] hover:to-[#75dff2] 
                   transition-all duration-300 hover:shadow-lg"
            >
              <p className="text-white text-xl cursor-pointer">
                Level 5 Coding
              </p>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-15 pt-5 ">
            <div className="bg-black p-4 rounded-xl  bg-gradient-to-r from-[#8875f2] to-[#f64fb3] ">
              <div className="flex justify-center ">
                <Icon
                  color="white"
                  icon="mdi:book-open-page-variant"
                  width="40"
                  height="40"
                />
              </div>

              <h1 className="text-white flex justify-center ">My Course</h1>
              <p className="text-white text-[35px] flex justify-center font-bold">
                7
              </p>
              <h1 className="text-white flex justify-center">
                Supper fun Adventures
              </h1>
            </div>

            <div className="bg-black p-4 rounded-xl bg-gradient-to-r from-[#ff7979] via-50% to-[#d3c613]">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 128 128"
                >
                  <radialGradient
                    id="SVG6bAUKdJt"
                    cx="68.884"
                    cy="124.296"
                    r="70.587"
                    gradientTransform="matrix(-1 -.00434 -.00713 1.6408 131.986 -79.345)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".314" stop-color="#ff9800" />
                    <stop offset=".662" stop-color="#ff6d00" />
                    <stop offset=".972" stop-color="#f44336" />
                  </radialGradient>
                  <path
                    fill="url(#SVG6bAUKdJt)"
                    d="M35.56 40.73c-.57 6.08-.97 16.84 2.62 21.42c0 0-1.69-11.82 13.46-26.65c6.1-5.97 7.51-14.09 5.38-20.18c-1.21-3.45-3.42-6.3-5.34-8.29c-1.12-1.17-.26-3.1 1.37-3.03c9.86.44 25.84 3.18 32.63 20.22c2.98 7.48 3.2 15.21 1.78 23.07c-.9 5.02-4.1 16.18 3.2 17.55c5.21.98 7.73-3.16 8.86-6.14c.47-1.24 2.1-1.55 2.98-.56c8.8 10.01 9.55 21.8 7.73 31.95c-3.52 19.62-23.39 33.9-43.13 33.9c-24.66 0-44.29-14.11-49.38-39.65c-2.05-10.31-1.01-30.71 14.89-45.11c1.18-1.08 3.11-.12 2.95 1.5"
                  />
                  <radialGradient
                    id="SVG5R9TgbPb"
                    cx="64.921"
                    cy="54.062"
                    r="73.86"
                    gradientTransform="matrix(-.0101 .9999 .7525 .0076 26.154 -11.267)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".214" stop-color="#fff176" />
                    <stop offset=".328" stop-color="#fff27d" />
                    <stop offset=".487" stop-color="#fff48f" />
                    <stop offset=".672" stop-color="#fff7ad" />
                    <stop offset=".793" stop-color="#fff9c4" />
                    <stop
                      offset=".822"
                      stop-color="#fff8bd"
                      stop-opacity="0.804"
                    />
                    <stop
                      offset=".863"
                      stop-color="#fff6ab"
                      stop-opacity="0.529"
                    />
                    <stop
                      offset=".91"
                      stop-color="#fff38d"
                      stop-opacity="0.209"
                    />
                    <stop offset=".941" stop-color="#fff176" stop-opacity="0" />
                  </radialGradient>
                  <path
                    fill="url(#SVG5R9TgbPb)"
                    d="M76.11 77.42c-9.09-11.7-5.02-25.05-2.79-30.37c.3-.7-.5-1.36-1.13-.93c-3.91 2.66-11.92 8.92-15.65 17.73c-5.05 11.91-4.69 17.74-1.7 24.86c1.8 4.29-.29 5.2-1.34 5.36c-1.02.16-1.96-.52-2.71-1.23a16.1 16.1 0 0 1-4.44-7.6c-.16-.62-.97-.79-1.34-.28c-2.8 3.87-4.25 10.08-4.32 14.47C40.47 113 51.68 124 65.24 124c17.09 0 29.54-18.9 19.72-34.7c-2.85-4.6-5.53-7.61-8.85-11.88"
                  />
                </svg>
              </div>

              <h1 className="text-white flex justify-center ">Streak</h1>
              <p className="text-white text-[35px] flex justify-center font-bold">
                7
              </p>
              <h1 className="text-white flex justify-center">
                Supper fun Adventures
              </h1>
            </div>

            <div className="bg-black p-4 rounded-xl bg-gradient-to-r from-[#75dff2]  to-[#c0d32c] ">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="white"
                      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 4a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1"
                      stroke-width="0.5"
                    />
                  </g>
                </svg>
              </div>

              <h1 className="text-white  flex justify-center ">My Course</h1>
              <h1 className="text-white text-[35px] flex justify-center font-bold">
                3
              </h1>
              <h1 className="text-white flex justify-center">
                Supper fun Adventures
              </h1>
            </div>
          </div>

          <div className="flex items-center w-105 gap-6 px-2 py-1 mt-5 bg-white rounded-full shadow-md">
            <Link
              to="courses"
              className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer ${
                option === "courses"
                  ? "bg-gradient-to-r from-pink-400 to-purple-400 text-white font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setOption("courses")}
            >
              Courses
            </Link>

            <Link
              to="space"
              className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer ${
                option === "space"
                  ? "bg-gradient-to-r from-pink-400 to-purple-400 text-white font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setOption("space")}
            >
              My space
            </Link>

            <Link
              to="schedule"
              className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer ${
                option === "schedule"
                  ? "bg-gradient-to-r from-pink-400 to-purple-400 text-white font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setOption("schedule")}
            >
              Schedule
            </Link>
          </div>
          <div className="mt-6">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeKids;
