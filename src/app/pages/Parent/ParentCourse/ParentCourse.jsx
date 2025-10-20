import { Image } from "antd";
import img from "../../../assets/img/bg3.jpg";
import CarouselTeacher from "../../Teacher/ComponentTeacher/CarouselTeacher";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCourse } from "../../../redux/teacher/courseTeacher/getCourse/getCourseSlice";
import { getProfileParentId } from "../../../redux/parent/profileParentId/getProfileParentIdSlice";
import { postPaymentCourse } from "../../../redux/payment/postPaymentCourse/postPaymentCourseSlice";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function ParentCourse() {
  const dispatch = useDispatch();
  const { course, loading } = useSelector((state) => state.getCourseData);
  const [user, setUser] = useState([]);
  const { profileParentId = [] } = useSelector(
    (state) => state.getProfileParentId
  );
  const navigate = useNavigate();
  const { createPaymentCourse } = useSelector(
    (state) => state.postPaymentCourse
  );
  useEffect(() => {
    const auth = localStorage.getItem("auth");
    const parse = JSON.parse(auth);
    if (parse) setUser(parse);
  }, []);

  useEffect(() => {
    if (user?.userId) {
      dispatch(getProfileParentId(user.userId));
    }
  }, [dispatch, user]);

  useEffect(() => {
    dispatch(getCourse());
  }, [dispatch]);

  const courseList = course?.value?.items || [];

  const handleBuy = async (item) => {
    const payload = {
      userId: profileParentId?.userId,
      studentId: profileParentId?.children[0]?.studentId,
      courseId: item?.courseId,
    };

    dispatch(postPaymentCourse(payload));
  };

  return (
    <div className="w-full min-h-screen p-6 bg-gradient-to-b from-[#F0F6F6] to-[#DBFBFD]">
      <div className="mb-6 text-start">
        <h1 className="text-4xl font-bold text-gray-800">Welcome Parent </h1>
        <p className="text-gray-500 text-lg mt-2">
          Explore and choose the best coding courses for your child
        </p>
      </div>

      <h1 className="text-5xl flex justify-center text-[#057b5f] mb-8 font-extrabold">
        Discover Amazing Courses
      </h1>

      {loading ? (
        <p className="text-center text-gray-500 text-xl">Loading courses...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {courseList.length > 0 ? (
            courseList.map((item) => (
              <div
                key={item.courseId}
                className="border shadow-md rounded-2xl bg-white hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <Image
                  src={item.imageUrl || img}
                  height={170}
                  width={"100%"}
                  className="rounded-t-2xl object-cover"
                  preview={false}
                />

                <div className="p-5 flex flex-col flex-1">
                  <h2 className="text-2xl font-bold text-[#138257] text-center mb-2">
                    {item.title}
                  </h2>

                  {item.shortDescription && (
                    <p className="text-gray-500 italic mb-2 text-sm">
                      {item.shortDescription}
                    </p>
                  )}

                  <p className="text-gray-700 text-sm flex-1">
                    {item.description || "No description available."}
                  </p>

                  {item.teacherName && (
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-800">
                        Teacher:
                      </span>
                      <span>{item.teacherName}</span>
                    </div>
                  )}

                  <div className=" space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-800">
                        Level:
                      </span>
                      <span className="capitalize">{item.level}</span>
                    </div>

                    {item.durationMinutes && (
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-800">
                          Duration:
                        </span>
                        <span>{item.durationMinutes} minutes</span>
                      </div>
                    )}

                    {item.totalSessions && (
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-800">
                          Total Sessions:
                        </span>
                        <span>{item.totalSessions}</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-800">
                        Created At:
                      </span>
                      <span>
                        {new Date(item.createdAt).toLocaleDateString("en-GB")}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between items-center border-t pt-4">
                    <div>
                      {item.pricePerSession ? (
                        <p className="text-2xl font-bold text-[#057b5f]">
                          {item.pricePerSession.toLocaleString()}₫{" "}
                        </p>
                      ) : (
                        <p className="text-gray-400 italic">Free course</p>
                      )}
                    </div>

                    <button
                      onClick={() => {
                        handleBuy(item);
                        console.log(item);
                      }}
                      className="px-5 py-2 cursor-pointer bg-[#12ad8c] hover:bg-[#0e9e7c] text-white font-semibold rounded-lg transition-all duration-200"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full text-lg">
              No courses available.
            </p>
          )}
        </div>
      )}

      <CarouselTeacher />
    </div>
  );
}

export default ParentCourse;
