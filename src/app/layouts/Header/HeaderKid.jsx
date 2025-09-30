import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/loginSlice";
import { toast } from "react-toastify";

function HeaderKid() {
  const [notice, setNotice] = useState(false);
  const dispatch = useDispatch();
  const ggMeet = [
    { title: "Course 1", link: "https://meet.google.com/kbz-pneq-odu" },
  ];

  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Log Out successful!");
    navigate("/");
  };

  return (
    <>
      <div className="w-full h-30 relative flex px-20 justify-between bg-[#49d0d7] shadow-2xl">
        <div className="flex gap-3 items-center">
          <div
            className="w-13 h-13 flex items-center justify-center rounded-xl
                                  bg-white/20 
                backdrop-blur-md 
                "
          >
            <Icon
              color="white"
              icon="mdi:book-open-page-variant"
              width="26"
              height="26"
            />
          </div>
          <div>
            <div className="flex gap-3">
              <p className="text-2xl font-bold text-white">Co&Learn Kids</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#e4eb23"
                  d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z"
                  stroke-width="0.5"
                  stroke="#e4eb23"
                />
                <path
                  fill="#e4eb23"
                  d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408"
                  opacity="0.85"
                  stroke-width="0.5"
                  stroke="#e4eb23"
                />
              </svg>
            </div>
            <p className="text-[16px] text-gray-200">
              Where coding becomes magical!
            </p>
          </div>
        </div>

        <div className="flex gap-3 p-10">
          <div
            className="flex items-center gap-2 w-fit px-4 h-10 
                rounded-3xl 
                bg-white/20 
                backdrop-blur-md               
                text-white cursor-pointer hover:bg-[#6ad1d8c7]"
            onClick={handleLogout}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 1 0-16 0m16 0a8 8 0 1 0-16 0" />
              </g>
            </svg>
            <h1>Log Out</h1>
          </div>
        </div>
        {notice && (
          <div className="mt-5 absolute top-20 right-10 w-80 bg-gray-100 rounded-2xl shadow-2xl p-4 z-50">
            <h2 className="text-lg font-bold text-gray-700 mb-3">
              Upcoming Classes
            </h2>
            <div className="flex flex-col gap-3">
              {ggMeet.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b pb-2 last:border-b-0"
                >
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500 truncate w-44">
                      {item.link}
                    </p>
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 bg-[#7321e6] hover:bg-[#5a18b3] text-white text-sm rounded-full"
                  >
                    Join
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default HeaderKid;
