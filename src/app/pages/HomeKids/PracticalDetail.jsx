import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "antd";
import { getMaterials } from "../../redux/teacher/materialsTeacher/getMaterials/getMaterialsSlice";
import { Book, FileText, FileVideo, FileImage } from "lucide-react";
import { getLesson } from "../../redux/teacher/lessonTeacher/getLesson/getLessonSlice";
function PracticalDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data = [] } = useSelector((state) => state.getLessonData);
  const { dataMaterials = [] } = useSelector((state) => state.getMaterialsData);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    dispatch(getLesson(id));
  }, [dispatch, id]);

  const handleMaterials = (lessonId) => {
    setOpen(true);
    dispatch(getMaterials(lessonId));
  };
  useEffect(() => {
    console.log("AAAAA", dataMaterials);
  }, [dataMaterials]);

  const renderIcon = (type) => {
    switch (type) {
      case "PDF":
        return <FileText size={20} className="text-red-500" />;
      case "VIDEO":
        return <FileVideo size={20} className="text-blue-500" />;
      case "IMAGE":
        return <FileImage size={20} className="text-green-500" />;
      default:
        return <Book size={20} className="text-gray-500" />;
    }
  };
  const filterMaterial = dataMaterials?.value?.items?.filter((item) =>
    item.title.includes("Practical")
  );

  console.log("PAPAPA", filterMaterial);

  return (
    <>
      <div>
        <div
          className="flex gap-2 items-center cursor-pointer group"
          onClick={() => navigate("/kids/practical")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="stroke-[#35a9af] group-hover:stroke-[#0a8b92] transition-colors duration-200"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
              d="m10 16l-4-4m0 0l4-4m-4 4h12"
            />
          </svg>
          <h1 className="text-[#35a9af] text-[18px] group-hover:text-[#0a8b92] transition-colors duration-200">
            Back to Course
          </h1>
        </div>

        <div className="bg-[#e6fafe] w-full h-auto mt-5 rounded-2xl border border-gray-100 shadow-xl p-5">
          <h1 className="text-2xl font-semibold">All Practical</h1>

          {data?.value?.items.map((item, index) => (
            <div
              key={item.lessonId}
              className="w-full flex justify-between items-center p-5 h-auto border rounded-2xl mt-5 bg-white shadow-sm"
            >
              <div className="flex gap-4 items-start">
                {item.videoUrl && (
                  <iframe
                    src={item.videoUrl}
                    allowFullScreen
                    className="rounded-2xl w-52 h-32"
                  ></iframe>
                )}
                <div className="px-2">
                  <h1 className="text-xl font-bold">
                    {index + 1}. {item.title}
                  </h1>
                  <p className="text-gray-500">Description: {item.content}</p>
                </div>
              </div>

              <button
                onClick={() => handleMaterials(item?.lessonId)}
                className="flex items-center gap-2 px-3 py-2 cursor-pointer bg-[#0ba2c8] text-white shadow-md hover:bg-[#16738a] rounded-md"
              >
                <Book size={18} />
                View Practical
              </button>
            </div>
          ))}
        </div>
        <br />
        <Modal
          open={open}
          onCancel={() => setOpen(false)}
          footer={null}
          width={600}
        >
          <div className="bg-gradient-to-r from-[#0ba2c8] to-[#0ba2c8] p-5 rounded-t-lg -m-6 mb-6">
            <h1 className="text-2xl font-bold text-white">View Materials</h1>
            <p className="text-white/80">Materials for students</p>
          </div>

          {dataMaterials?.value?.items?.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {filterMaterial.map((m) => {
                return (
                  <div
                    key={m.materialId}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
                  >
                    <div className="flex items-center gap-3">
                      {renderIcon(m.materialType)}
                      <div>
                        <h1 className="font-semibold text-gray-800">
                          {m.title || "Untitled"}
                        </h1>
                        <p className="text-sm text-gray-500">
                          Type: {m.materialType}
                        </p>
                      </div>
                    </div>
                    <a
                      href={m.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 text-sm text-[#3fcba8] transition"
                    >
                      View
                    </a>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-500 text-center">No materials found.</p>
          )}
        </Modal>
      </div>
    </>
  );
}

export default PracticalDetail;
