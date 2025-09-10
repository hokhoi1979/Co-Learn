import { useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderTeacher from "../../layouts/Header/HeaderTeacher";
import SideBarParent from "../../layouts/Sidebar/SidebarParent";

const ParentLayout = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  return (
    <div className="h-screen flex">
      <SideBarParent
        toggle={toggle}
        setToggle={setToggle}
        active={active}
        setActive={setActive}
      />
      <div
        className="fixed top-0 left-0 w-full z-50
             backdrop-blur-md bg-white/70 shadow-sm"
      >
        <HeaderTeacher />
      </div>
      <div
        className={`flex-1 overflow-auto transition-all duration-500 pt-20
        ${toggle ? "ml-[8%]" : "ml-[18%]"}`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default ParentLayout;
