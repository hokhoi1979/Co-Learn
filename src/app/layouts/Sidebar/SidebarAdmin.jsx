import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import ConfirmLogout from "../../components/ConfirmLogout/ConfirmLogout";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/loginSlice";
import { toast } from "react-toastify";

const menuItems = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: "mdi:view-dashboard-outline",
    nav: "/admin",
  },
  {
    key: "users",
    label: "Users",
    icon: "mdi:account-group-outline",
    nav: "/admin/useradmin",
  },
  {
    key: "teachers",
    label: "Teachers",
    icon: "mdi:account-tie-outline",
    nav: "/admin/teacheradmin",
  },
  {
    key: "payments",
    label: "Payments",
    icon: "mdi:credit-card-outline",
    nav: "/admin/payments",
  },
  {
    key: "settings",
    label: "Settings",
    icon: "mdi:cog-outline",
    nav: "/admin/settings",
  },
];

const SideBarAdmin = ({ toggle, setToggle, active, setActive }) => {
  const navigate = useNavigate();
  const [openLogout, setOpenLogout] = useState(false);
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
            ? "bg-gradient-to-r from-[#565757] to-[#3f3f3f] text-white font-semibold"
            : "hover:bg-gradient-to-r hover:from-[#565757]/20 hover:to-[#3f3f3f]/20 text-gray-300"
        }`}
      >
        <Icon
          icon={item.icon}
          width="24"
          className={`${isActive ? "text-white" : "text-gray-300"}`}
        />
        {!toggle && (
          <Link to={item.nav} className="text-[15px]">
            {item.label}
          </Link>
        )}
      </div>
    );
  };

  return (
    <div className="relative">
      <div
        className={`mt-17 h-full bg-[#2d2d2d] pt-7 pb-4 flex flex-col fixed shadow-lg 
          ${toggle ? "w-[8%]" : "w-[14%]"} 
          transition-all duration-500 ease-in-out`}
      >
        <div
          onClick={handleToggle}
          className="absolute top-10 right-5 bg-[#565757] text-white rounded-full shadow-md cursor-pointer p-2 hover:bg-[#6d6d6d] transition"
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

        <div className="w-full h-[1px] bg-gray-500 mt-auto"></div>

        <div className="flex mb-5 items-center py-3 justify-between">
          {!toggle && (
            <div className="flex gap-3 items-center mb-10">
              <div className="h-10 w-10 rounded-full flex justify-center items-center bg-gradient-to-r from-[#4A90E4] to-[#2497A8]">
                <span className="text-sm font-bold text-white">A</span>
              </div>
              <div>
                <h1 className="text-[15px] font-medium text-white">Admin</h1>
                <p className="text-xs text-gray-400">System Manager</p>
              </div>
            </div>
          )}

          <div
            onClick={() => {
              const confirmed = window.confirm("Do you want to logout?");
              if (confirmed) {
                handleLogout();
              }
              setOpenLogout(true);
            }}
            className={`flex items-center p-2 rounded-xl cursor-pointer  mb-10
              hover:bg-gradient-to-r hover:from-[#565757]/20 hover:to-[#3f3f3f]/20
              ${toggle && "w-full justify-center"}`}
          >
            <Icon icon="mdi:logout" width="24" className="text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarAdmin;
