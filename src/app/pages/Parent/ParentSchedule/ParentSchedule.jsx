import React, { useState } from "react";
import Summary from "../ComponentParent/Summary";
import { Progress, Tag } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react";
import { MdOutlineRoom } from "react-icons/md";
import CarouselTeacher from "../../Teacher/ComponentTeacher/CarouselTeacher";

function ParentSchedule() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const courseSchedule = {
    Monday: [
      {
        title: "JavaScript Game Development",
        time: "9:00 AM - 11:00 AM",
        learn: "Online",
        level: "Intermediate",
        students: 15,
        progress: 75,
        status: "Active",
      },
      {
        title: "React Fundamentals",
        time: "2:00 PM - 4:00 PM",
        learn: "Online",
        level: "Beginner",
        students: 12,
        progress: 60,
        status: "Active",
      },
    ],
    Tuesday: [
      {
        title: "Python for Kids",
        time: "10:00 AM - 12:00 PM",
        learn: "Online",
        level: "Beginner",
        students: 18,
        progress: 40,
        status: "Active",
      },
    ],
    Wednesday: [
      {
        title: "Web Design Basics",
        time: "1:00 PM - 3:00 PM",
        learn: "Online",
        level: "Beginner",
        students: 20,
        progress: 50,
        status: "Active",
      },
      {
        title: "Data Structures",
        time: "3:30 PM - 5:30 PM",
        learn: "Online",
        level: "Intermediate",
        students: 14,
        progress: 65,
        status: "Active",
      },
    ],
    Thursday: [
      {
        title: "Intro to Machine Learning",
        time: "9:00 AM - 11:30 AM",
        learn: "Online",
        level: "Advanced",
        students: 10,
        progress: 20,
        status: "Active",
      },
    ],
    Friday: [
      {
        title: "Cybersecurity Basics",
        time: "2:00 PM - 4:00 PM",
        learn: "Online",
        level: "Intermediate",
        students: 17,
        progress: 80,
        status: "Active",
      },
    ],
    Saturday: [
      {
        title: "Scratch for Beginners",
        time: "8:30 AM - 10:30 AM",
        learn: "Online",
        level: "Beginner",
        students: 25,
        progress: 90,
        status: "Active",
      },
    ],
    Sunday: [
      {
        title: "Mobile App Development",
        time: "1:00 PM - 4:00 PM",
        learn: "Online",
        level: "Intermediate",
        students: 13,
        progress: 35,
        status: "Active",
      },
    ],
  };

  const [activeDay, setActiveDay] = useState("Monday");

  return (
    <>
      <div className="w-full min-h-screen p-6 bg-gradient-to-b from-[#F0F6F6] to-[#DBFBFD]">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Parent!</h1>
          <p className="text-gray-500">
            Manage and update your children’s learning process
          </p>
        </div>
        <Summary />

        <div className="bg-white rounded-2xl shadow-md p-5 w-[90%] mx-auto mb-10 mt-5">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-2xl font-bold">Children Schedule</h1>
          </div>

          <div className="flex gap-2 mb-6">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  activeDay === day
                    ? "bg-gradient-to-r from-[#4A90E4]  to-[#2497A8]  text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {courseSchedule[activeDay].length > 0 ? (
              courseSchedule[activeDay].map((course, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between bg-[#F0F6F6] border rounded-xl shadow-sm p-4"
                >
                  <div className="flex gap-4 items-center">
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-xl
                                                   bg-gradient-to-r from-[#4A90E4]  to-[#2497A8] shadow-md"
                    >
                      <Icon
                        color="white"
                        icon="mdi:book-open-page-variant"
                        width="28"
                        height="28"
                      />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold">{course.title}</h2>
                      <div className="flex gap-4 text-gray-600 text-sm mt-1">
                        <span className="flex items-center gap-1">
                          <ClockCircleOutlined /> {course.time}
                        </span>
                        <span className="flex items-center gap-1 text-red-500">
                          <MdOutlineRoom /> {course.learn}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-2 text-sm">
                        <Tag
                          color={course.level === "Beginner" ? "green" : "blue"}
                        >
                          {course.level}
                        </Tag>
                        <span>{course.students} students</span>
                      </div>
                    </div>
                  </div>

                  <Tag color="green" className="text-sm px-3 py-1">
                    {course.status}
                  </Tag>
                </div>
              ))
            ) : (
              <p className="text-gray-500">
                No classes scheduled for {activeDay}.
              </p>
            )}
          </div>
        </div>
        <CarouselTeacher />
      </div>
    </>
  );
}

export default ParentSchedule;
