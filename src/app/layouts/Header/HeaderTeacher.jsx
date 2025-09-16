import React from "react";
import { Icon } from "@iconify/react";

function HeaderTeacher() {
  return (
    <>
      <div className="w-full h-22 flex justify-between bg-white px-10 py-5">
        <div className="flex items-center gap-2.5">
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
            <p className="text-2xl font-bold bg-gradient-to-r from-[#4A90E4]  to-[#2497A8] bg-clip-text text-transparent">
              Co&Learn
            </p>
            <p className="text-gray-500">Teacher Dashboard</p>
          </div>
        </div>

        <div className="flex gap-5.5">
          <h1 className="px-4 flex items-center bg-gradient-to-r from-[#4A90E4]  to-[#2497A8] text-white text-xl rounded-3xl">
            New Class
          </h1>

          <div>
            <h1 className="text-xl text-right">Miss Ha</h1>
            <p className="text-gray-500">hanm@fpt.edu.vn</p>
          </div>
          <div className="h-12 w-12 rounded-4xl flex justify-center items-center bg-gradient-to-r from-[#4A90E4]  to-[#2497A8]">
            <h1 className="text-3xl text-white">H</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderTeacher;
