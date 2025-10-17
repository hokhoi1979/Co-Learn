import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileParentId } from "../../redux/parent/profileParentId/getProfileParentIdSlice";

function HeaderParent() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const { profileParentId = [] } = useSelector(
    (state) => state.getProfileParentId
  );

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      setUser(JSON.parse(auth));
    }
  }, []);

  useEffect(() => {
    if (user?.userId) {
      dispatch(getProfileParentId(user.userId));
    }
  }, [dispatch, user]);

  return (
    <>
      <div className="w-full h-22 flex justify-between bg-white px-10 py-5">
        <div className="flex items-center gap-2.5">
          <div
            className="w-12 h-12 flex items-center justify-center rounded-xl
                               bg-[#3fcba8] shadow-md"
          >
            <Icon
              color="white"
              icon="mdi:book-open-page-variant"
              width="28"
              height="28"
            />
          </div>
          <div>
            <p className="text-2xl font-bold bg-[#3fcba8] bg-clip-text text-transparent">
              Co&Learn
            </p>
            <p className="text-gray-500">Teacher Dashboard</p>
          </div>
        </div>

        <div className="flex gap-5.5">
          <div className="flex items-center">
            {/* <h1 className="text-xl  text-right">{user?.fullName}</h1> */}
          </div>
          <div className="h-12 w-12 rounded-4xl flex justify-center items-center  ">
            <img
              src={profileParentId?.photo || "/default-avatar.png"}
              alt={profileParentId?.fullName || "Teacher"}
              className="w-12 h-12 rounded-2xl object-cover border border-gray-200 shadow-sm"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderParent;
