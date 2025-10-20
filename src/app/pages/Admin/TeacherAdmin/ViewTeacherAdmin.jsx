import { ArrowLeftFromLine } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getCourseTeacher } from "../../../redux/teacher/courseTeacher/getCourseTeacher/getCourseTeacherSlice";
import { approveCourse } from "../../../redux/admin/approveCourse/approveCourseSlice";
import { CheckCircleOutlined } from "@ant-design/icons";
import { BookOutlined } from "@ant-design/icons";
import { Button } from "antd";

function ViewTeacherAdmin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { courseTeacher } = useSelector((state) => state.getCourseTeacherData);
  useEffect(() => {
    dispatch(getCourseTeacher(id));
  }, [dispatch, id]);

  const handleApprove = async (idCourse) => {
    dispatch(approveCourse(idCourse));
    dispatch(getCourseTeacher(id));
  };

  console.log("AJAJAJA", courseTeacher);

  return (
    <div className="w-full min-h-screen p-6 bg-[#ebebeb]">
      <h1 className="text-3xl font-bold text-gray-800">Welcome Admin!</h1>
      <p className="text-gray-500 mb-6">Manage and update your system!</p>
      <div
        className="flex gap-2 items-center hover:underline cursor-pointer"
        onClick={() => navigate("/admin/TeacherAdmin")}
      >
        <ArrowLeftFromLine size={14} />
        <p>Back to previous page</p>
      </div>

      <h1 className="text-4xl flex justify-center">
        Approve course for Teacher
      </h1>

      {!courseTeacher.length ? (
        <div className="flex flex-col items-center justify-center h-70 mt-10 bg-gray-50 rounded-2xl shadow-inner p-6">
          <BookOutlined className="text-gray-400 text-6xl mb-4" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            No Course
          </h2>
          <p className="text-gray-500 mb-6 text-center">
            You haven’t created any course yet. <br />
            Start by creating your first class now.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-6 mt-5 px-10">
          {courseTeacher.map((item, index) => (
            <div
              key={item.courseId || index}
              className=" h-auto bg-white rounded-2xl overflow-hidden"
            >
              <img
                src={item.imageUrl}
                className="w-full h-60 object-cover rounded-t-2xl"
              />
              <div className="px-3">
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h4 className="text-gray-500 mb-2">{item.description}</h4>

                <div className="flex justify-between gap-2">
                  <p className="text-gray-500 w-20">Level:</p>
                  <p className="font-bold capitalize">{item.level}</p>
                </div>
                <div className="flex justify-between gap-2">
                  <p className="text-gray-500 w-20">Durations:</p>
                  <p className="font-bold ">{item.durationMinutes} minutes</p>
                </div>

                <div className="flex justify-between gap-2">
                  <p className="text-gray-500 w-20">Pricing:</p>
                  <p className="font-semibold text-green-600">
                    {Number(item.pricePerSession).toLocaleString("vi-VN")}₫
                  </p>
                </div>
              </div>
              <div className="px-2 py-2">
                {item.isActice === false ? (
                  <button
                    className="flex-1 bg-[#20ba93] w-[100%]  hover:bg-[#2ba788] text-white py-1 rounded-lg cursor-pointer"
                    onClick={() => {
                      () => handleApprove(item.courseId);
                    }}
                  >
                    Approve
                  </button>
                ) : (
                  <Button
                    className="mt-5"
                    icon={<CheckCircleOutlined style={{ color: "#fff" }} />}
                    style={{
                      width: "100%",
                      background: "linear-gradient(90deg, #12ad8c, #24c5a2)",
                      border: "none",
                      borderRadius: "12px",
                      color: "#fff",
                      fontWeight: "600",
                      boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
                      transition: "0.3s",
                    }}
                  >
                    {"Is Approved"}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewTeacherAdmin;
