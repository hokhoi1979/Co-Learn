import React, { useEffect, useState } from "react";
import HeaderKid from "../../layouts/Header/HeaderKid";
import { Icon } from "@iconify/react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfileStudentById } from "../../redux/student/profileStudentById/getProfileByIdSlice";
import { getEnrollmentStudent } from "../../redux/student/enrollmentStudent/getEnrollmentStudentSlice";
import { getCourseStudent } from "../../redux/student/courseStudent/courseStudentSlice";
function HomeKids() {
  const [option, setOption] = useState("courses");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const { profileStudentById = [] } = useSelector(
    (state) => state.getProfileStudentByIdData
  );

  const { enrollmentStudent = [] } = useSelector(
    (state) => state.getEnrollmentStudentData
  );

  // const { courseStudent = [] } = useSelector(
  //   (state) => state.getCourseStudentData
  // );

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      const parsed = JSON.parse(auth);
      setUser(parsed);
    }
  }, []);

  useEffect(() => {
    if (user?.userId) {
      dispatch(getProfileStudentById(user?.userId));
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (profileStudentById?.studentId)
      dispatch(getEnrollmentStudent(profileStudentById?.studentId));
    // dispatch(getEnrollment(1));
  }, [dispatch, profileStudentById?.studentId]);

  // useEffect(() => {
  //   const id = enrollment?.course?.courseId;
  //   if (enrollment?.course?.courseId) dispatch(getCourseStudent(id));
  // }, [dispatch, enrollment]);

  const cards = [
    {
      title: "My Course",
      value: enrollmentStudent?.items?.length || 0,
      description: "Super fun Adventures",
      gradient: "from-[#8875f2] to-[#f64fb3]",
      icon: "mdi:book-open-page-variant",
    },
    {
      title: "Total Price",
      value: new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(
        enrollmentStudent?.items?.reduce(
          (total, item) => total + (item.course?.pricePerSession || 0),
          0
        ) || 0
      ),
      description: "Total price of your courses",
      gradient: "from-[#ff7979] via-50% to-[#d3c613]",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 128 128"
        >
          <radialGradient
            id="SVG6bAUKdJt"
            cx="68.884"
            cy="124.296"
            r="70.587"
            gradientTransform="matrix(-1 -.00434 -.00713 1.6408 131.986 -79.345)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".314" stopColor="#ff9800" />
            <stop offset=".662" stopColor="#ff6d00" />
            <stop offset=".972" stopColor="#f44336" />
          </radialGradient>
          <path
            fill="url(#SVG6bAUKdJt)"
            d="M35.56 40.73c-.57 6.08-.97 16.84 2.62 21.42c0 0-1.69-11.82 13.46-26.65c6.1-5.97 7.51-14.09 5.38-20.18c-1.21-3.45-3.42-6.3-5.34-8.29c-1.12-1.17-.26-3.1 1.37-3.03c9.86.44 25.84 3.18 32.63 20.22c2.98 7.48 3.2 15.21 1.78 23.07c-.9 5.02-4.1 16.18 3.2 17.55c5.21.98 7.73-3.16 8.86-6.14c.47-1.24 2.1-1.55 2.98-.56c8.8 10.01 9.55 21.8 7.73 31.95c-3.52 19.62-23.39 33.9-43.13 33.9c-24.66 0-44.29-14.11-49.38-39.65c-2.05-10.31-1.01-30.71 14.89-45.11c1.18-1.08 3.11-.12 2.95 1.5"
          />
        </svg>
      ),
    },
    {
      title: "Student",
      value: profileStudentById?.fullName,
      gradient: "from-[#75dff2] to-[#c0d32c]",
      description: profileStudentById?.email,
      icon: "mdi:school",
    },
  ];

  return (
    <>
      <div className="">
        <div
          className="fixed top-0 left-0 w-full z-50
             backdrop-blur-md bg-white/70 shadow-sm"
        >
          <HeaderKid />
        </div>

        <div
          className="w-full h-auto  
                       bg-gradient-to-r from-[#e6fbfe] via-50% to-[#e6fbfe] shadow-md px-20 pt-[120px]"
        >
          <h1 className="flex justify-center pt-5 text-5xl  bg-[#0ba2c8] bg-clip-text text-transparent">
            Hey Children!
          </h1>
          <p className="text-[20px] text-gray-600 flex justify-center font-bold">
            Ready for another AWESOME coding adventure?
          </p>

          <p className="text-[14px] text-gray-400 flex justify-center font-bold">
            Let's create something amazing together today!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-5">
            {cards.map((card, index) => (
              <div
                key={index}
                className={` p-4 rounded-xl bg-gradient-to-b from-[#49d0d7] to-[#72ced3] shadow-lg`}
              >
                <div className="flex justify-center mb-2">
                  {card.title === "Total Price" ? (
                    card.icon
                  ) : (
                    <Icon
                      color="white"
                      icon={card.icon}
                      width="40"
                      height="40"
                    />
                  )}
                </div>
                <h1 className="text-white flex justify-center font-semibold">
                  {card.title}
                </h1>
                <p className="text-white text-[35px] flex justify-center font-bold">
                  {card.value}
                </p>
                <h1 className="text-white flex justify-center text-sm">
                  {card.description}
                </h1>
              </div>
            ))}
          </div>

          <div className="flex items-center w-105 gap-6 px-2 py-1 mt-5 bg-white rounded-full shadow-md">
            <Link
              to="courses"
              className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer ${
                option === "courses"
                  ? "bg-[#53c2de] text-white font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setOption("courses")}
            >
              Courses
            </Link>

            <Link
              to="practical"
              className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer ${
                option === "practical"
                  ? "bg-gradient-to-b from-[#49d0d7] to-[#72ced3] text-white font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setOption("practical")}
            >
              Practical
            </Link>

            <Link
              to={`schedule`}
              state={{ studentId: profileStudentById?.studentId }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer ${
                option === "schedule"
                  ? "bg-gradient-to-b from-[#49d0d7] to-[#72ced3] text-white font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => {
                setOption("schedule");
              }}
            >
              Schedule
            </Link>
          </div>
          <div className="mt-6">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeKids;
