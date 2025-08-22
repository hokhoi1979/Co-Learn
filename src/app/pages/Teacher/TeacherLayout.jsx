import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SidebarTeacher from "../../layouts/Sidebar/SidebarTeacher";
import HeaderTeacher from "../../layouts/Header/HeaderTeacher";

const TeacherLayout = () => {
  return (
    <div className=" h-screen">
      <div
        className="fixed top-0 left-0 w-full z-50
             backdrop-blur-md bg-white/70 shadow-sm"
      >
        <HeaderTeacher />
      </div>
      <SidebarTeacher />
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default TeacherLayout;
