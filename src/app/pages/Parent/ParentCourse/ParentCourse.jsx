import React from "react";
import Summary from "../ComponentParent/Summary";
import { Image } from "antd";
import img from "../../../assets/img/bg3.jpg";
import { useNavigate } from "react-router";
import CarouselTeacher from "../../Teacher/ComponentTeacher/CarouselTeacher";
const data = [
  {
    title: "Creative Writing for Kids",
    description:
      "Help your child develop storytelling skills and imagination through fun activities.",
    lessons: 24,
    price: 49.99,
    image: "/images/courses/creative-writing.jpg",
    start: "2025/09/05",
    end: "2025/10/05",
  },
  {
    title: "Math Adventures: Numbers & Logic",
    description:
      "Make math fun with interactive games, puzzles, and problem-solving.",
    lessons: 32,
    price: 59.99,
    image: "/images/courses/math-adventures.jpg",
    start: "2025/09/05",
    end: "2025/10/05",
  },
  {
    title: "Science Explorers Lab",
    description:
      "Hands-on science experiments and discoveries that spark curiosity.",
    lessons: 40,
    price: 69.99,
    image: "/images/courses/science-explorers.jpg",
    start: "2025/09/05",
    end: "2025/10/05",
  },
  {
    title: "Coding for Beginners",
    description:
      "Learn the basics of coding with block-based programming and fun projects.",
    lessons: 28,
    price: 54.99,
    image: "/images/courses/coding-beginners.jpg",
    start: "2025/09/05",
    end: "2025/10/05",
  },
  {
    title: "Art & Creativity Studio",
    description:
      "Unleash creativity with painting, drawing, and digital art lessons.",
    lessons: 30,
    price: 44.99,
    image: "/images/courses/art-creativity.jpg",
    start: "2025/09/05",
    end: "2025/10/05",
  },
  {
    title: "Music & Rhythm Basics",
    description:
      "Explore instruments, rhythm, and melody in a fun way for kids.",
    lessons: 20,
    price: 39.99,
    image: "/images/courses/music-rhythm.jpg",
    start: "2025/09/05",
    end: "2025/10/05",
  },
  {
    title: "English Speaking for Kids",
    description:
      "Boost confidence in speaking English through interactive lessons.",
    lessons: 36,
    price: 64.99,
    image: "/images/courses/english-speaking.jpg",
    start: "2025/09/05",
    end: "2025/10/05",
  },
  {
    title: "Robotics with LEGO",
    description: "Build and program simple robots with LEGO kits and coding.",
    lessons: 25,
    price: 79.99,
    image: "/images/courses/robotics-lego.jpg",
    start: "2025/09/05",
    end: "2025/10/05",
  },
  {
    title: "History Adventures",
    description:
      "Travel back in time and learn history through stories and games.",
    lessons: 22,
    price: 42.99,
    image: "/images/courses/history-adventures.jpg",
    start: "2025/09/05",
    end: "2025/10/05",
  },
  {
    title: "Critical Thinking & Puzzles",
    description:
      "Develop problem-solving and logical thinking with brain games.",
    lessons: 26,
    price: 45.99,
    image: "/images/courses/critical-thinking.jpg",
    start: "2025/09/05",
    end: "2025/10/05",
  },
];

function ParentCourse() {
  const navigation = useNavigate();
  return (
    <>
      <div className="w-full min-h-screen p-6 bg-gradient-to-b from-[#F0F6F6] to-[#DBFBFD]">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Parent!</h1>
          <p className="text-gray-500">
            Manage and update your children’s learning process
          </p>
        </div>
        <h1 className="text-5xl flex justify-center">
          Discover Amazing Courses for Your Child
        </h1>
        <div className="grid grid-cols-4 h-auto mt-5 gap-4 mb-5">
          {data.map((item) => {
            return (
              <div className=" border-1 shadow-md rounded-2xl bg-gray-100 py-5 flex flex-col h-full">
                <Image
                  src={img}
                  height={170}
                  width={"100%"}
                  className="bg-cover"
                />

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

                  <div className="mt-auto flex justify-between items-center pt-4">
                    <p className="flex items-center gap-2 text-[#057b5f] text-3xl font-bold">
                      {item.price} $
                    </p>
                    <button
                      onClick={() => navigation("/payment")}
                      className="px-4 py-1 bg-[#12ad8c] text-white rounded-md cursor-pointer hover:bg-[#24c5a2]"
                    >
                      Buy Now
                    </button>
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

export default ParentCourse;
