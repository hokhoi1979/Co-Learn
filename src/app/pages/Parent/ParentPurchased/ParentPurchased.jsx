import { Image, Tag } from "antd";
import img from "../../../assets/img/bg3.jpg";
import CarouselTeacher from "../../Teacher/ComponentTeacher/CarouselTeacher";
import { dataPurchased } from "../../../shared";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileParentId } from "../../../redux/parent/profileParentId/getProfileParentIdSlice";
import { getEnrollmentStudent } from "../../../redux/student/enrollmentStudent/getEnrollmentStudentSlice";

function ParentPurchased() {
  const [user, setUser] = useState([]);

  const dispatch = useDispatch();
  const { profileParentId = [] } = useSelector(
    (state) => state.getProfileParentId
  );

  const { enrollmentStudent } = useSelector(
    (state) => state.getEnrollmentStudentData
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
    if (profileParentId?.children[0].studentId) {
      dispatch(getEnrollmentStudent(profileParentId?.children[0].studentId));
    }
  }, [dispatch, profileParentId]);
  console.log("PROFILE", enrollmentStudent);

  return (
    <>
      <div className="w-full min-h-screen p-6 bg-gradient-to-b from-[#F0F6F6] to-[#DBFBFD]">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Parent!</h1>
          <p className="text-gray-500">
            Manage and update your children’s learning process
          </p>
          <h1 className="text-5xl flex justify-center text-[#057b5f] mb-8 font-medium">
            Purchased Course
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
          {enrollmentStudent?.items?.length > 0 ? (
            enrollmentStudent.items.map((item) => {
              const course = item.course;
              return (
                <div
                  key={item.enrollmentId}
                  className="border shadow-md rounded-2xl bg-white flex flex-col h-full transition-all hover:shadow-xl"
                >
                  <div className="relative">
                    <Image
                      src={course?.imageUrl || img}
                      height={170}
                      width="100%"
                      className="rounded-t-2xl object-cover"
                      preview={false}
                    />
                    <div className="absolute top-3 right-3">
                      <div className="bg-green-100 text-green-700 px-3 py-1 rounded-xl shadow-sm flex items-center gap-1 font-medium text-xs">
                        <span className="text-base">✔</span>
                        <span>Bought</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h1 className="text-center text-[20px] text-[#138257] font-bold mb-2">
                      {course?.title}
                    </h1>
                    <p className="text-gray-500 text-sm flex-1">
                      {course?.description}
                    </p>{" "}
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="font-bold">Teacher:</span>
                        <span>{course?.teacherName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-bold">Level:</span>
                        <span className="capitalize">{course?.level}</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="font-bold">Duration:</span>
                        <span>{course?.durationMinutes} mins</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="font-bold">Status:</span>
                        <Tag
                          color={
                            item.status === "OnHold"
                              ? "orange"
                              : item.status === "Completed"
                              ? "green"
                              : "blue"
                          }
                        >
                          {item.status}
                        </Tag>
                      </div>

                      <div className="flex justify-between">
                        <span className="font-bold">Enrolled At:</span>
                        <span>
                          {new Date(item.enrolledAt).toLocaleDateString(
                            "en-GB"
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500 col-span-full text-lg">
              No purchased courses yet.
            </p>
          )}
        </div>

        <CarouselTeacher />
      </div>
    </>
  );
}

export default ParentPurchased;
