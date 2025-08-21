import { Button } from "antd";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="w-full border-b p-5 h-20 border-gray-200 bg-white shadow-md">
      <div className=" mx-auto  flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div
            className="w-10 h-10 flex items-center justify-center rounded-xl
                       bg-gradient-to-r from-purple-400 to-cyan-300 shadow-md"
          >
            <Icon
              color="white"
              icon="mdi:book-open-page-variant"
              width="22"
              height="22"
            />
          </div>
          <p className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Co&Learn
          </p>
        </div>

        <ul className="flex gap-8 text-gray-600 font-medium text-[20px]">
          <li>
            <Link
              to="/course"
              className="flex items-center gap-1.5 hover:underline transition cursor-pointer"
            >
              <Icon icon="mdi:book-open-page-variant" width="22" height="22" />
              <span>Course</span>
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className="flex items-center gap-1.5 hover:underline transition cursor-pointer"
            >
              <Icon icon="mdi:currency-usd" width="22" height="22" />
              <span>Pricing</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center gap-1.5 hover:underline transition cursor-pointer"
            >
              <Icon icon="mdi:account-box" width="22" height="22" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-5">
          <button
            onClick={{}}
            style={{ cursor: "pointer" }}
            className="text-[16px] font-medium text-gray-700 hover:bg-cyan-300 px-2 py-1 rounded-[10px] hover:text-white transition"
          >
            Sign In
          </button>
          <Button
            className="!h-10 !px-5 !rounded-lg 
                       !bg-gradient-to-r !from-cyan-500 !to-blue-500
                       !text-white !font-semibold shadow-md hover:shadow-lg transition"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
