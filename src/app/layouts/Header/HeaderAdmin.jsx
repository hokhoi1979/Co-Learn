import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { stringify } from "postcss";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../redux/user/getUserID/getUserIDSlice";

function HeaderAdmin() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const infor = localStorage.getItem("auth");
    const parse = JSON.parse(infor);
    console.log(parse);
    setUser(parse);
  }, []);

  return (
    <>
      <div className="w-full h-22 flex justify-between bg-[#2d2d2d] px-10 py-5 border-b border-b-gray-100">
        <div className="flex items-center gap-2.5">
          <div
            className="w-12 h-12 flex items-center justify-center rounded-xl
                               bg-[#898989] shadow-md"
          >
            <Icon
              color="white"
              icon="mdi:book-open-page-variant"
              width="28"
              height="28"
            />
          </div>
          <div>
            <p className="text-2xl font-bold bg-white bg-clip-text text-transparent">
              Co&Learn
            </p>
            <p className="text-gray-500">Admin Dashboard</p>
          </div>
        </div>

        <div className="flex gap-5.5">
          <div className="flex items-center">
            {/* <h1 className="text-xl  text-right">{user?.fullName}</h1> */}
          </div>
          <div className="h-12 w-12 rounded-4xl flex justify-center items-center bg-[#898989] ">
            <h1 className="text-3xl text-white">H</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderAdmin;
