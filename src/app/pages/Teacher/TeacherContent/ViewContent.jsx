import { Button, Card } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ModelUploadVideo from "../ComponentTeacher/ModelUploadVideo";
import DeleteVideoModal from "../ComponentTeacher/DeleteVideoModal";
import { toast } from "react-toastify";
import { ArrowLeftFromLine, Book, Pencil, Trash } from "lucide-react";
import ModalMaterials from "../ComponentTeacher/ModelMaterials";
import { useDispatch, useSelector } from "react-redux";
import {
  getLesson,
  getLessonSuccess,
} from "../../../redux/teacher/lessonTeacher/getLesson/getLessonSlice";
import { deleteLesson } from "../../../redux/teacher/lessonTeacher/deleteLesson/deleteLessonSlice";
import { BookOutlined } from "@ant-design/icons";

function ViewContent() {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const dispatch = useDispatch();

  const [openVideo, setOpenVideo] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editLesson, setEditLesson] = useState(null);
  const [materialsOpen, setMaterialsOpen] = useState(false);
  const [materialsIndex, setMaterialsIndex] = useState(null);
  const [titleLesson, setTitleLesson] = useState("");

  const { data } = useSelector((state) => state.getLessonData);

  const handleOk = () => {
    setOpenVideo(false);
    setEditLesson(null);
  };

  useEffect(() => {
    if (courseId) {
      dispatch(getLesson(courseId));
    }

    return () => {
      dispatch(getLessonSuccess(null));
    };
  }, [dispatch, courseId]);

  const handleDeleteClick = (id, title) => {
    setDeleteIndex(id);
    setTitleLesson(title);
  };

  const handleConfirmDelete = async () => {
    try {
      setLoading(true);
      await dispatch(deleteLesson(deleteIndex));
      await dispatch(getLesson(courseId));
      toast.success("Deleted successfully");
      setDeleteIndex(null);
    } catch (error) {
      toast.error("Delete failed");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mb-5 mt-5 px-15">
        <div className="flex justify-between">
          <div
            className="flex gap-2 items-center hover:underline cursor-pointer"
            onClick={() =>
              navigate("/teacher/content", { state: { reload: true } })
            }
          >
            <ArrowLeftFromLine size={18} />
            <h1>Back to My Course</h1>
          </div>

          <Button
            onClick={() => setOpenVideo(true)}
            className="!flex !gap-2 !bg-[#3fcba8] !text-white shadow-md hover:!bg-[#17ae88] "
          >
            Upload lesson
          </Button>
        </div>
      </div>

      <h1 className="flex justify-center text-4xl mb-5">
        {data?.value?.courseTitle}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-5">
        {data?.value?.items?.length > 0 ? (
          data.value.items.map((lesson, index) => (
            <Card
              key={lesson.lessonId || index}
              hoverable
              className="shadow-md rounded-lg"
              title={lesson.title}
              extra={
                <span className="text-gray-400 text-sm">
                  Lesson {lesson.orderNumber}
                </span>
              }
            >
              <iframe
                src={lesson.videoUrl}
                className="w-full h-60 object-cover rounded-2xl"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <p className="text-gray-600 mb-2">{lesson.content}</p>

              <div className="mt-5 gap-1 grid grid-cols-3">
                <button
                  onClick={() => {
                    setEditLesson(lesson);
                    setOpenVideo(true);
                  }}
                  className="bg-[#76eacd] cursor-pointer hover:bg-[#3edfb7] py-1 w-full text-white font-medium rounded-md flex gap-2 items-center justify-center"
                >
                  <Pencil size={16} /> Edit
                </button>

                <button
                  onClick={() =>
                    handleDeleteClick(lesson.lessonId, lesson.title)
                  }
                  className="bg-[#ea8576] cursor-pointer hover:bg-[#e95a44] py-1 w-full text-white font-medium rounded-md flex gap-2 items-center justify-center"
                >
                  <Trash size={16} /> Delete
                </button>

                <button
                  onClick={() => {
                    setMaterialsIndex(lesson.lessonId);
                    setMaterialsOpen(true);
                  }}
                  className="bg-[#3a8dc5] cursor-pointer hover:bg-[#1979b9] py-1 w-full text-white font-medium rounded-md flex gap-2 items-center justify-center"
                >
                  <Book size={16} /> Materials
                </button>
              </div>
            </Card>
          ))
        ) : (
          <div className="flex flex-col w-full items-center justify-center h-70 mt-10 mb-10 bg-gray-50 rounded-2xl shadow-inner p-6">
            <BookOutlined className="text-gray-400 text-6xl mb-4" />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              No Lessons
            </h2>
            <p className="text-gray-500 mb-6 text-center">
              You haven’t created any lesson yet. <br />
              Start by creating your first lesson now.
            </p>
          </div>
        )}
      </div>

      <DeleteVideoModal
        open={deleteIndex !== null}
        loading={loading}
        courseTitle={titleLesson}
        onCancel={() => setDeleteIndex(null)}
        onConfirm={handleConfirmDelete}
      />

      <ModalMaterials
        open={materialsOpen}
        onCancel={() => setMaterialsOpen(false)}
        lessonId={materialsIndex}
      />

      <ModelUploadVideo
        isModalOpen={openVideo}
        handleCancel={() => {
          setOpenVideo(false);
          setEditLesson(null);
        }}
        courseId={courseId}
        handleOk={handleOk}
        initialValues={editLesson}
      />
    </>
  );
}

export default ViewContent;
