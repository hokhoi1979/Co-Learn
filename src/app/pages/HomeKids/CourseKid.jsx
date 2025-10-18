import { Icon } from "@iconify/react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProfileStudentById } from "../../redux/student/profileStudentById/getProfileByIdSlice";
import { getEnrollmentStudent } from "../../redux/student/enrollmentStudent/getEnrollmentStudentSlice";

function CourseKid() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);
  const { profileStudentById = [] } = useSelector(
    (state) => state.getProfileStudentByIdData
  );

  const { enrollmentStudent = [] } = useSelector(
    (state) => state.getEnrollmentStudentData
  );

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
  }, [dispatch, profileStudentById?.studentId]);

  console.log("III", enrollmentStudent);

  return (
    <div>
      <h1 className="flex justify-center pt-5 text-3xl font-bold bg-[#0ba2c8] bg-clip-text text-transparent">
        My Courses
      </h1>
      <p className="flex justify-center text-gray-500 text-lg mb-6">
        Choose your coding adventure!
      </p>

      <Outlet />

      {enrollmentStudent?.items?.map((item) => {
        const course = item.course;
        return (
          <div
            key={course.courseId}
            className="relative w-full mt-6 bg-gradient-to-r from-[#0ba2c8] to-[#87ddf2] rounded-2xl shadow-xl py-6 px-8 hover:scale-[1.01] transition-transform"
          >
            <div className="absolute top-4 right-4 px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl flex flex-col items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  d="M10 1v10l3-2l3 2V1M5.5 18a2.5 2.5 0 1 0 0 5H22M3 20.5v-17A2.5 2.5 0 0 1 5.5 1H21v17.007H5.492M20.5 18a2.5 2.5 0 1 0 0 5"
                />
              </svg>
            </div>

            <div className="flex gap-4">
              <img
                src={course.imageUrl}
                alt={course.title}
                className="w-36 h-36 object-cover rounded-xl shadow-md border border-white/30"
              />
              <div className="flex flex-col justify-center">
                <h1 className="text-white text-2xl font-semibold">
                  {course.title}
                </h1>
                <p className="text-gray-200 text-sm mt-1">
                  {course.shortDescription}
                </p>

                <div className="mt-4 flex gap-4">
                  <button
                    className="px-6 py-2 cursor-pointer bg-white/20 backdrop-blur-md rounded-xl text-white font-medium hover:bg-[#5aa9cb] transition"
                    onClick={() => navigate(`/kids/courses/${course.courseId}`)}
                  >
                    Continue
                  </button>
                  <button className="px-6 flex items-center gap-2 py-2 cursor-pointer border border-white/40 rounded-xl text-white font-medium hover:bg-[#5aa9cb] transition">
                    Try harder
                    <Icon icon="mdi:fire" color="#ff9800" width="20" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <br />
    </div>
  );
}

export default CourseKid;
