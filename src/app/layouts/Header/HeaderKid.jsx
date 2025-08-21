import React from "react";
import { Icon } from "@iconify/react";

function HeaderKid() {
  return (
    <>
      <div className="w-full h-30  flex px-20 justify-between bg-gradient-to-r from-[#7321e6] via-[#d11887] to-[#e8be33] shadow-2xl">
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
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#e5c828"
                  d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z"
                  stroke-width="0.5"
                  stroke="#e5c828"
                />
                <path
                  fill="#e5c828"
                  d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408"
                  opacity="0.8"
                  stroke-width="0.5"
                  stroke="#e5c828"
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
                rounded-full 
                bg-white/20 
                backdrop-blur-md               
                text-white cursor-pointer hover:bg-[#e0cf7bc7]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="text-white"
            >
              <path
                fill="currentColor"
                d="M12 3C6.5 3 2 6.58 2 11a7.22 7.22 0 0 0 2.75 5.5c0 .6-.42 2.17-2.75 4.5c2.37-.11 4.64-1 6.47-2.5c1.14.33 2.34.5 3.53.5c5.5 0 10-3.58 10-8s-4.5-8-10-8m0 14c-4.42 0-8-2.69-8-6s3.58-6 8-6s8 2.69 8 6s-3.58 6-8 6"
              />
            </svg>
            <p>Chat</p>
          </div>

          <div
            className="flex items-center gap-2 w-fit px-4 h-10 
                rounded-3xl 
                bg-white/20 
                backdrop-blur-md               
                text-white cursor-pointer hover:bg-[#e0cf7bc7]"
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
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderKid;
