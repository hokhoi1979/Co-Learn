import React from "react";
import FeedbackCard from "../ComponentTeacher/FeedbackCard";
import Earning from "../ComponentTeacher/Earning";
import { feedbackTeacher } from "../../../shared";

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
        {feedbackTeacher.map((fb) => (
          <FeedbackCard key={fb.id} fb={fb} />
        ))}
      </div>
    </div>
  );
}

export default TeacherFeedBack;
