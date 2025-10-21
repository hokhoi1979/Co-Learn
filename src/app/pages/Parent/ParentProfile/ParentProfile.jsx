import { useEffect, useState } from "react";
import Summary from "../ComponentParent/Summary";
import { Button } from "antd";
import { Mail, Phone, Lock, Users } from "lucide-react";
import ModalProfileParent from "../ComponentParent/ModalProfileParent";
import ModalProfileChildren from "../ComponentParent/ModalProfileChildren";
import CarouselTeacher from "../../Teacher/ComponentTeacher/CarouselTeacher";
import { useDispatch, useSelector } from "react-redux";
import { getProfileParentId } from "../../../redux/parent/profileParentId/getProfileParentIdSlice";
import parent from "../../../assets/img/parent.jpg";
import { getProfileStudentId } from "../../../redux/parent/getProfileStudentId/getProfileStudentSlice";
import VerifyEmailModal from "../../Register/VerifyEmail";
function ParentProfile() {
  const dispatch = useDispatch();
  const [openVerify, setOpenVerify] = useState(false);
  const [openProfileParent, setOpenProfileParent] = useState(false);
  const [openProfileChildren, setOpenProfileChildren] = useState(false);

  const [user, setUser] = useState([]);
  const { profileParentId = [] } = useSelector(
    (state) => state.getProfileParentId
  );

  const { profileStudentId = [] } = useSelector(
    (state) => state.getProfileStudentId
  );

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    const parse = JSON.parse(auth);
    if (parse) {
      setUser(parse);
    }
  }, []);

  useEffect(() => {
    if (user?.userId) {
      dispatch(getProfileParentId(user.userId));
    }
  }, [dispatch, user]);

  console.log("AKAJAKA", profileParentId);

  useEffect(() => {
    if (profileParentId?.children[0]?.userId) {
      dispatch(getProfileStudentId(profileParentId?.children[0]?.userId));
    }
  }, [dispatch, profileParentId]);

  const handleParentOk = () => {
    setOpenProfileParent(false);
  };

  const handleChildrenOk = (isNew) => {
    setOpenProfileChildren(false);
    if (isNew) {
      setOpenVerify(true);
    }
  };

  return (
    <div className="w-full min-h-screen p-6 bg-gradient-to-b from-[#F0F6F6] to-[#DBFBFD]">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome Parent!</h1>
        <p className="text-gray-500">
          Manage and update your children’s learning process
        </p>
      </div>

      <Summary />

      <div className="mt-8 w-[90%] mx-auto ">
        <div className="flex gap-3 mb-10">
          <div className="bg-white rounded-2xl shadow-md w-[420px] p-6 mx-auto hover:shadow-xl transition-all duration-300">
            <div className="flex justify-end mb-2">
              <span className="text-sm text-[#008f6a] bg-[#e7f8f3] px-3 py-1 rounded-full">
                ● Available
              </span>
            </div>

            <div className="flex justify-center">
              <img
                src={parent}
                alt="Parent Avatar"
                className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
              />
            </div>

            <h2 className="mt-4 text-xl font-semibold text-center text-[#006d5b]">
              {profileParentId?.fullName}
            </h2>
            <p className="text-gray-500 text-center text-sm mb-4">
              Caring and supportive parent.
            </p>
            <hr className="my-4" />

            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600 mb-3">
              <p>
                <span className="font-semibold">Age:</span>
                {profileParentId?.age}
              </p>
              <p>
                <span className="font-semibold">Gender:</span>{" "}
                {profileParentId?.gender}
              </p>
              <p>
                <span className="font-semibold">DOB:</span>{" "}
                {new Date(profileParentId?.born).toLocaleDateString("vi-VN")}
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                {profileParentId?.phone}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600 ">
              <p className="text-sm text-gray-600 mb-4">
                <span className="font-semibold">Email:</span>{" "}
                {profileParentId?.email}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <span className="font-semibold">Relationship:</span>{" "}
                {profileParentId?.relationship}
              </p>
            </div>

            <hr className="my-4" />

            <Button
              onClick={() => setOpenProfileParent(true)}
              type="secondary"
              className="!bg-[#3fcba8] !w-full !text-white shadow-md hover:!bg-[#17ae88] "
            >
              + Update Now
            </Button>
          </div>

          <div className="bg-white rounded-2xl shadow-md w-[420px] p-6 mx-auto hover:shadow-xl transition-all duration-300">
            <div className="">
              {profileParentId?.children.length > 0 ? (
                profileParentId.children.map((child, index) => (
                  <div key={index}>
                    <div className="flex justify-end mb-2">
                      <span className="text-sm text-[#008f6a] bg-[#e7f8f3] px-3 py-1 rounded-full">
                        ● Available
                      </span>
                    </div>

                    <div className="flex justify-center">
                      <img
                        src={child.photo}
                        alt="Child Avatar"
                        className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
                      />
                    </div>

                    <h2 className="mt-4 text-xl font-semibold text-center text-[#006d5b]">
                      {child.fullName}
                    </h2>
                    <p className="text-gray-500 text-center text-sm mb-4">
                      Loving child of{" "}
                      {profileParentId?.parent?.fullName || "Parent"}
                    </p>

                    <hr className="my-4" />

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600 mb-3">
                      <p>
                        <span className="font-semibold">Age:</span> {child.age}
                      </p>

                      <p>
                        <span className="font-semibold">Class:</span>{" "}
                        {child.gradeLevel}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600 mb-3">
                      <p>
                        <span className="font-semibold">DOB:</span>{" "}
                        {child.born
                          ? new Date(child.born).toLocaleDateString("vi-VN")
                          : "N/A"}
                      </p>
                      <p>
                        <span className="font-semibold">Email:</span>{" "}
                        {child.email}
                      </p>
                    </div>

                    <hr className="my-4" />

                    <Button
                      onClick={() => setOpenProfileChildren(true)}
                      type="secondary"
                      className="!bg-[#3fcba8] !w-full !text-white shadow-md hover:!bg-[#17ae88] rounded-lg h-10 px-6 font-semibold"
                    >
                      + Update Now
                    </Button>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center h-96 bg-gray-50 rounded-2xl shadow-inner p-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#545252"
                      d="M13.5 0h-12C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h12c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5M13 14H2V2h11zM4 9h7v1H4zm0 2h7v1H4zm1-6.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 5 4.5M7.5 6h-2C4.675 6 4 6.45 4 7v1h5V7c0-.55-.675-1-1.5-1"
                      strokeWidth="0.5"
                      stroke="white"
                    />
                  </svg>

                  <h2 className="text-xl font-semibold text-gray-600 mb-2">
                    No Information of Children
                  </h2>
                  <p className="text-gray-500 mb-6 text-center">
                    You have not updated your information. <br />
                  </p>
                  <hr className="my-4" />

                  <Button
                    onClick={() => setOpenProfileChildren(true)}
                    type="secondary"
                    className="!bg-[#3fcba8] !text-white shadow-md hover:!bg-[#17ae88] rounded-lg h-10 px-6 font-semibold"
                  >
                    + Update Now
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
        <ModalProfileParent
          isModalOpen={openProfileParent}
          handleCancel={() => setOpenProfileParent(false)}
          initialState={profileParentId}
          handleOk={handleParentOk}
        />

        <ModalProfileChildren
          isModalOpen={openProfileChildren}
          handleCancel={() => setOpenProfileChildren(false)}
          handleOk={handleChildrenOk}
          initialState={profileStudentId}
          inforParent={profileParentId}
        />
        <VerifyEmailModal
          open={openVerify}
          onClose={() => setOpenVerify(false)}
          email={profileParentId?.children[0]?.email}
        />
        <CarouselTeacher />
      </div>
    </div>
  );
}

export default ParentProfile;
