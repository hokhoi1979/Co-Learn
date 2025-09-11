import { Image, Tag } from "antd";
import React from "react";
import img from "../../../assets/img/bg3.jpg";
import CarouselTeacher from "../../Teacher/ComponentTeacher/CarouselTeacher";

const data = [
  {
    title: "Critical Thinking & Puzzles",
    description:
      "Develop problem-solving and logical thinking with brain games.",
    lessons: 26,
    image: "/images/courses/critical-thinking.jpg",
    start: "2025/09/05",
    end: "2025/10/05",
  },
  {
    title: "Critical Thinking & Puzzles",
    description:
      "Develop problem-solving and logical thinking with brain games.",
    lessons: 26,
    image: "/images/courses/critical-thinking.jpg",
    start: "2025/09/05",
    end: "2025/10/05",
  },
  {
    title: "Critical Thinking & Puzzles",
    description:
      "Develop problem-solving and logical thinking with brain games.",
    lessons: 26,
    image: "/images/courses/critical-thinking.jpg",
    start: "2025/09/05",
    end: "2025/10/05",
  },
];

function ParentPurchased() {
  return (
    <>
      <div className="w-full min-h-screen p-6 bg-gradient-to-b from-[#F0F6F6] to-[#DBFBFD]">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Parent!</h1>
          <p className="text-gray-500">
            Manage and update your children’s learning process
          </p>
          <h1 className="flex justify-center text-5xl text-gray-600 mt-5">
            Purchased Course
          </h1>
        </div>

        <div className="grid grid-cols-4 w-full h-auto gap-2 mb-5">
          {data.map((item) => {
            return (
              <div className="border-1 shadow-md rounded-2xl bg-gray-100 py-5 flex flex-col h-full">
                <div className="relative">
                  <Image
                    src={img}
                    height={170}
                    width="100%"
                    className="bg-cover rounded-xl"
                  />
                  <div className="absolute top-3 right-3">
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-xl shadow-sm flex items-center gap-1 font-medium text-xs">
                      <span className="text-base">✔</span>
                      <span>Bought</span>
                    </div>
                  </div>
                </div>

                <div className="px-5 flex flex-col flex-1">
                  <h1 className="flex justify-center text-[20px] text-[#138257] font-bold">
                    {item.title}
                  </h1>
                  <p className="text-gray-500">{item.description}</p>

                  <div className="flex justify-between  mt-3">
                    <p className=" font-bold">Lessons:</p>
                    <p className="flex items-center gap-2 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="#323232"
                          d="M27.318 13.153c2.241 1.236 2.24 4.458-.001 5.693L7.818 29.588C5.652 30.782 3 29.215 3 26.742V5.25c0-2.474 2.653-4.04 4.82-2.846zm-.966 3.941a1.25 1.25 0 0 0 0-2.19L6.854 4.156A1.25 1.25 0 0 0 5 5.25v21.492a1.25 1.25 0 0 0 1.853 1.095z"
                          stroke-width="1"
                          stroke="#545252"
                        />
                      </svg>
                      {item.lessons} videos
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <p className=" font-bold">Duration:</p>
                    <p className="flex items-center text-gray-500 gap-2">
                      {item.start} to {item.end}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <CarouselTeacher />
      </div>
    </>
  );
}

export default ParentPurchased;
