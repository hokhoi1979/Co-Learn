import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/loginSlice";
import { toast } from "react-toastify";

const menuItems = [
  {
    key: "profile",
    label: "Profile",
    icon: "mdi:account-child-outline",
    nav: "/teacher",
  },
  {
    key: "classes",
    label: "My Classes",
    icon: "mdi:book-education-outline",
    nav: "/teacher/classes",
  },

  {
    key: "schedule",
    label: "Teaching Schedule",
    icon: "mdi:calendar-clock",
    nav: "/teacher/schedule",
  },
  {
    key: "content",
    label: "Update Content",
    icon: "mdi:content-save-edit-outline",
    nav: "/teacher/content",
  },
  {
    key: "feedback",
    label: "FeedBack",
    icon: "mdi:content-save-edit-outline",
    nav: "/teacher/feedback",
  },
  {
    key: "income",
    label: "Income",
    icon: "mdi:content-save-edit-outline",
    nav: "/teacher/income",
  },
];

const SideBarTeacher = ({ toggle, setToggle, active, setActive }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleToggle = () => setToggle((pre) => !pre);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Log Out successful!");
    navigate("/");
  };

  const MenuItem = ({ item }) => {
    const isActive = active === item.key;
    return (
      <div
        onClick={() => {
          setActive(item.key);
          navigate(item.nav);
        }}
        className={`flex items-center gap-4 mt-2 cursor-pointer p-2 rounded-xl transition-all
        ${toggle ? "justify-center" : ""}
        ${
          isActive
            ? "bg-gradient-to-r from-[#b0ebe6] to-[#E7F4F3] text-[#046961]"
            : "hover:bg-gradient-to-r hover:from-[#b0ebe6] hover:to-[#E7F4F3] text-[#5B5454]"
        }`}
      >
        <Icon
          icon={item.icon}
          width="28"
          className={`${isActive ? "text-[#046961]" : "text-[#5B5454]"}`}
        />
        {!toggle && (
          <Link to={item.nav} className="text-[16px] font-medium">
            {item.label}
          </Link>
        )}
      </div>
    );
  };

  return (
    <div className="relative">
      <div
        className={`mt-9 h-full bg-white pt-7 pb-4 flex flex-col fixed shadow-lg 
          ${toggle ? "w-[8%]" : "w-[18%]"} 
          transition-all duration-500 ease-in-out`}
      >
        <div
          onClick={handleToggle}
          className="absolute top-15 right-5 bg-white border rounded-full shadow-md cursor-pointer p-1 hover:bg-gray-100 transition"
        >
          {toggle ? (
            <Icon icon="mdi:chevron-double-right" width="15" />
          ) : (
            <Icon icon="mdi:chevron-double-left" width="15" />
          )}
        </div>

        <div className="pl-3 pr-3 pt-8 flex flex-col gap-1">
          {menuItems.map((item) => (
            <MenuItem key={item.key} item={item} />
          ))}
        </div>

        <div className="w-full h-[1px] bg-gray-300 mt-auto"></div>

        <div className="flex mb-5 items-center px-4 py-3 justify-between">
          {!toggle && (
            <div className="flex gap-3 items-center">
              <div className="h-12 w-12 rounded-full flex justify-center items-center bg-gradient-to-r from-[#4A90E4] to-[#2497A8]">
                <h1 className="text-xl font-bold text-white">H</h1>
              </div>
              <div>
                <h1 className="text-lg font-semibold">Miss Ha</h1>
                <p className="text-sm text-gray-500">Teacher Coding</p>
              </div>
            </div>
          )}

          <div
            onClick={() => {
              const confirmed = window.confirm("Do you want to logout?");
              if (confirmed) {
                handleLogout();
              }
            }}
            className={`flex items-center p-2  rounded-xl cursor-pointer 
              hover:bg-gradient-to-r hover:from-[#b0ebe6] hover:to-[#E7F4F3] 
              ${toggle && "w-full justify-center"}`}
          >
            <Icon icon="mdi:logout" width="28" className="text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarTeacher;
