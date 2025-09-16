import React from "react";
import FeedbackCard from "../ComponentTeacher/FeedbackCard";
import Earning from "../ComponentTeacher/Earning";
const feedbacks = [
  {
    id: 1,
    name: "Alex Chen",
    avatar: "https://i.pravatar.cc/100?img=1",
    course: "JavaScript Game Development",
    lesson: "Lesson 3: Game Physics",
    rating: 5,
    comment:
      "Excellent teaching! The examples were very clear and helped me understand complex concepts easily.",
    status: "New",
    date: "2024-01-15",
    replied: false,
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    avatar: "https://i.pravatar.cc/100?img=2",
    course: "React Fundamentals",
    lesson: "Lesson 5: State Management",
    rating: 4,
    comment:
      "Great course overall. Would love more hands-on projects in future lessons.",
    status: "New",
    date: "2024-01-14",
    replied: true,
  },
  {
    id: 3,
    name: "David Kim",
    avatar: "https://i.pravatar.cc/100?img=3",
    course: "JavaScript Game Development",
    lesson: "Lesson 2: Canvas Basics",
    rating: 5,
    comment: "Clear explanation and engaging exercises.",
    status: "New",
    date: "2024-01-13",
    replied: false,
  },
];
function TeacherFeedBack() {
  return (
    <div className=" w-full h-auto p-5 bg-gradient-to-b from-[#F0F6F6] to-[#DBFBFD]">
      <h1 className="text-2xl font-bold">Welcome back! Miss Ha </h1>
      <p className="text-gray-400">
        Manage your classes and track your teaching progress
      </p>
      <Earning />
      <div className="p-10 w-[90%] mt-5 mx-auto bg-white rounded-xl shadow-md ">
        <h2 className="text-xl font-semibold mb-4">Recent Feedback</h2>
        {feedbacks.map((fb) => (
          <FeedbackCard key={fb.id} fb={fb} />
        ))}
      </div>
    </div>
  );
}

export default TeacherFeedBack;
