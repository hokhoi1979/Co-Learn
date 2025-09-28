import { Icon } from "@iconify/react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CourseKid() {
  const navigate = useNavigate();

  const { courseStudent = [] } = useSelector(
    (state) => state.getCourseStudentData
  );

  console.log("HAHA", courseStudent);

  return (
    <div>
      <h1 className="flex justify-center pt-5 text-3xl font-bold bg-gradient-to-r from-[#79f3d9] via-[#6701ff] to-[#fbd453] bg-clip-text text-transparent">
        My Courses
      </h1>
      <p className="flex justify-center text-gray-500 text-lg mb-6">
        Choose your coding adventure!
      </p>

      <Outlet />

      {courseStudent?.items?.map((item) => {
        const course = item.course;
        const totalLessons = course?.lessons?.length || 0;

        return (
          <div
            key={course.courseId}
            className="relative w-full mt-6 bg-gradient-to-r from-[#5f11cb] to-[#a225fc] rounded-2xl shadow-xl py-6 px-8 hover:scale-[1.01] transition-transform"
          >
            <div className="absolute top-4 right-4 px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl flex flex-col items-center justify-center shadow-md">
              <p className="text-white/80 text-sm">Lessons</p>
              <p className="text-white font-bold text-xl">{totalLessons}</p>
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
                    className="px-6 py-2 cursor-pointer bg-white/20 backdrop-blur-md rounded-xl text-white font-medium hover:bg-[#b69bf9] transition"
                    onClick={() =>
                      navigate("/kids/courses/detail", {
                        state: {
                          courseId: course.courseId,
                          title: course.title,
                          description: course.description,
                        },
                      })
                    }
                  >
                    Continue
                  </button>
                  <button className="px-6 flex items-center gap-2 py-2 cursor-pointer border border-white/40 rounded-xl text-white font-medium hover:bg-[#ff784e] transition">
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
