import React from "react";
import { Icon } from "@iconify/react";
import { Outlet, useNavigate } from "react-router-dom";
import { courses } from "../../shared";

function CourseKid() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="flex justify-center pt-5 text-3xl  bg-gradient-to-r from-[#79f3d9] via-[#6701ff] to-[#fbd453] bg-clip-text text-transparent">
        My Courses
      </h1>
      <p className="flex justify-center text-gray-500 text-xl">
        Choose your coding adventure!
      </p>

      <Outlet />

      {courses.map((item) => {
        const percent = Math.round((item.progress / item.total) * 100);

        return (
          <div
            key={item.title}
            className="w-full h-60 mt-5 bg-gradient-to-r from-[#8875f2] to-[#f64f4f] rounded-2xl py-5 px-10"
          >
            <div className="flex justify-between">
              <div className="flex gap-4">
                <Icon
                  color="white"
                  icon="mdi:book-open-page-variant"
                  width="40"
                  height="40"
                />
                <div>
                  <h1 className="text-white text-2xl">{item.title}</h1>
                  <p className="text-gray-200">{item.description}</p>
                </div>
              </div>

              <div
                className="px-5 h-8 bg-white/20 
                backdrop-blur-md rounded-2xl flex items-center justify-center"
              >
                <p className="text-white">
                  {item.progress} / {item.total} lessons
                </p>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex justify-between">
                <p className="text-white mb-2">Progress</p>
                <p className="text-white mt-1 text-right">{percent}%</p>
              </div>

              <div className="relative w-full h-3 bg-white/30 rounded-full">
                <div
                  className="absolute top-0 left-0 h-3 bg-[#eef8a6] rounded-full"
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
            </div>

            <div className="mt-5 flex gap-3 ">
              <button
                className="px-5 py-2 cursor-pointer bg-white/20 
                backdrop-blur-md rounded-2xl text-white hover:bg-[#b69bf9]"
                onClick={() =>
                  navigate("/kids/courses/detail", {
                    state: {
                      title: item.title,
                      description: item.description,
                    },
                  })
                }
              >
                Continue
              </button>
              <button
                className="px-5 flex items-center gap-2.5 py-2 cursor-pointer
                 border-1 border-[#bebebe] rounded-2xl text-white hover:bg-[#9c86cf] "
              >
                {item.progress / item.total > 0.5
                  ? "Almost done"
                  : "Try harder"}
                {item.progress / item.total > 0.5 && (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#7dd279"
                        fill-rule="evenodd"
                        d="M256 42.667C138.18 42.667 42.667 138.18 42.667 256S138.18 469.334 256 469.334S469.334 373.82 469.334 256S373.821 42.667 256 42.667m0 384c-94.105 0-170.666-76.561-170.666-170.667S161.894 85.334 256 85.334S426.667 161.894 426.667 256S350.106 426.667 256 426.667m80.336-246.886l30.167 30.167l-131.836 132.388l-79.083-79.083l30.166-30.167l48.917 48.917z"
                        stroke-width="13"
                        stroke="#42c13c"
                      />
                    </svg>
                  </>
                )}

                {item.progress / item.total < 0.5 && (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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
                        <stop
                          offset=".941"
                          stop-color="#fff176"
                          stop-opacity="0"
                        />
                      </radialGradient>
                      <path
                        fill="url(#SVG5R9TgbPb)"
                        d="M76.11 77.42c-9.09-11.7-5.02-25.05-2.79-30.37c.3-.7-.5-1.36-1.13-.93c-3.91 2.66-11.92 8.92-15.65 17.73c-5.05 11.91-4.69 17.74-1.7 24.86c1.8 4.29-.29 5.2-1.34 5.36c-1.02.16-1.96-.52-2.71-1.23a16.1 16.1 0 0 1-4.44-7.6c-.16-.62-.97-.79-1.34-.28c-2.8 3.87-4.25 10.08-4.32 14.47C40.47 113 51.68 124 65.24 124c17.09 0 29.54-18.9 19.72-34.7c-2.85-4.6-5.53-7.61-8.85-11.88"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CourseKid;
