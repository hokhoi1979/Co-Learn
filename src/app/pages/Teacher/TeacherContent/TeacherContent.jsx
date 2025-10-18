import Earning from "../ComponentTeacher/Earning";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { BookOutlined } from "@ant-design/icons";
import ModalTeacher from "../ComponentTeacher/ModalTeacher";
import CarouselTeacher from "../ComponentTeacher/CarouselTeacher";
import { Outlet, useNavigate, useLocation } from "react-router";
import DeleteVideoModal from "../ComponentTeacher/DeleteVideoModal";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createCourse } from "../../../redux/teacher/courseTeacher/createCourse/createCourseSlice";
import { deleteCourse } from "../../../redux/teacher/courseTeacher/deleteCourse/deleteCourseSlice";
import { updateCourse } from "../../../redux/teacher/courseTeacher/updateCourse/updateCourseSlice";
import { getCourseTeacher } from "../../../redux/teacher/courseTeacher/getCourseTeacher/getCourseTeacherSlice";
import { getProfileTeacherId } from "../../../redux/teacher/profileTeacher/getProfileId/getProfileIdSlice";

function TeacherContent() {
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editCourse, setEditCourse] = useState(null);
  const [editId, setEditId] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { courseTeacher = [] } = useSelector(
    (state) => state.getCourseTeacherData
  );
  const { profileTeacherId } = useSelector(
    (state) => state.getProfileTeacherId
  );

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      setUser(JSON.parse(auth));
    }
  }, []);

  useEffect(() => {
    if (user?.userId) {
      dispatch(getProfileTeacherId(user.userId));
    }
  }, [dispatch, user]);

  const fetchCourses = () => {
    if (profileTeacherId?.teacherId) {
      dispatch(getCourseTeacher(profileTeacherId.teacherId));
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [profileTeacherId]);

  useEffect(() => {
    if (location.state?.reload) {
      fetchCourses();
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, navigate, location.pathname, profileTeacherId]);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => {
    setIsModalOpen(false);
    setEditCourse(null);
    setEditId(null);
  };

  const handleSubmit = async (newCourse) => {
    setLoading(true);
    try {
      if (editCourse) {
        await dispatch(
          updateCourse({
            idTeacher: profileTeacherId?.teacherId,
            id: editId,
            body: newCourse,
          })
        );
      } else {
        await dispatch(
          createCourse({ id: profileTeacherId?.teacherId, body: newCourse })
        );
      }

      setIsModalOpen(false);
      setEditCourse(null);
      setEditId(null);
    } catch {
      toast.error("Operation failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (course) => {
    setEditCourse(course);
    setEditId(course.courseId);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (deleteIndex === null) return;
    const courseId = courseTeacher[deleteIndex]?.courseId;
    if (!courseId) return;

    setLoading(true);
    try {
      await dispatch(
        deleteCourse({ idTeacher: profileTeacherId?.teacherId, id: courseId })
      );
      setDeleteIndex(null);
      fetchCourses();
    } catch {
      toast.error("Delete failed!");
    } finally {
      setLoading(false);
    }
  };
  console.log("COURSE", courseTeacher);
  const isViewingContent = location.pathname.includes("viewContent");

  return (
    <>
      <div className="w-full h-auto p-5 bg-gradient-to-b from-[#F0F6F6] to-[#DBFBFD]">
        <h1 className="text-2xl font-bold">Welcome back! Miss Ha</h1>
        <p className="text-gray-400">
          Manage your classes and track your teaching progress
        </p>

        <Earning />

        {!isViewingContent && (
          <div className="px-15 mb-10">
            <div className="flex justify-between mt-5">
              <h1 className="text-2xl font-bold">My Course</h1>
              <Button
                onClick={showModal}
                type="secondary"
                className="!bg-[#3fcba8] !text-white shadow-md hover:!bg-[#17ae88]"
              >
                + Add new course
              </Button>
            </div>

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
              <div className="grid grid-cols-3 gap-6 mt-5">
                {courseTeacher.map((item, index) => (
                  <div
                    key={item.courseId || index}
                    className="w-full h-auto bg-white rounded-2xl overflow-hidden"
                  >
                    <img
                      src={item.imageUrl}
                      className="w-full h-60 object-cover rounded-t-2xl"
                    />
                    <div className="p-3">
                      <h2 className="font-bold text-lg">{item.title}</h2>
                      <h4 className="text-gray-500 mb-2">{item.description}</h4>

                      <div className="flex justify-between gap-2">
                        <p className="text-gray-500 w-20">Level:</p>
                        <p className="font-bold capitalize">{item.level}</p>
                      </div>

                      <div className="flex justify-between gap-2">
                        <p className="text-gray-500 w-20">Pricing:</p>
                        <p className="font-semibold text-green-600">
                          {Number(item.pricePerSession).toLocaleString("vi-VN")}
                          ₫
                        </p>
                      </div>

                      <div className="mt-5 gap-1.5 grid grid-cols-3">
                        <button
                          onClick={() => handleEdit(item)}
                          className="bg-[#76eacd] hover:bg-[#3edfb7] cursor-pointer py-1 w-full text-white font-medium rounded-md"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => setDeleteIndex(index)}
                          className="bg-[#ea8576] hover:bg-[#e95a44] cursor-pointer py-1 w-full text-white font-medium rounded-md"
                        >
                          Delete
                        </button>

                        <button
                          onClick={() =>
                            navigate(
                              `/teacher/content/viewContent/${item.courseId}`
                            )
                          }
                          className="bg-[#20ba93] hover:bg-[#33a286] cursor-pointer py-1 w-full text-white font-medium rounded-md"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <Outlet key={location.pathname} />
        <CarouselTeacher />
      </div>

      <DeleteVideoModal
        open={deleteIndex !== null}
        courseTitle={
          deleteIndex !== null ? courseTeacher[deleteIndex]?.title : ""
        }
        loading={loading}
        onCancel={() => setDeleteIndex(null)}
        onConfirm={handleConfirmDelete}
      />

      <ModalTeacher
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        onSubmitData={handleSubmit}
        initialState={editCourse}
        idTeacher={profileTeacherId?.teacherId}
      />
    </>
  );
}

export default TeacherContent;
