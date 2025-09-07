import { Button, Card, Modal } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import ModelUploadVideo from "../ComponentTeacher/ModelUploadVideo";
import DeleteVideoModal from "../ComponentTeacher/DeleteVideoModal";

function ViewContent() {
  const navigate = useNavigate();
  const [openVideo, setOpenVideo] = useState(false);
  const [data, setData] = useState([]);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const handleOk = () => {
    setOpenVideo(false);
    setEditIndex(null);
  };

  const handleSubmit = (values) => {
    if (editIndex !== null) {
      setData((prev) =>
        prev.map((item, i) => (i === editIndex ? { ...item, ...values } : item))
      );
    } else {
      setData((prev) => [...prev, values]);
    }
    setEditIndex(null);
  };

  const handleDeleteClick = (index) => {
    setDeleteIndex(index);
  };

  const handleConfirmDelete = async () => {
    setLoading(true);
    try {
      const deleteVideo = data.filter((_, i) => i !== deleteIndex);
      setData(deleteVideo);
      setDeleteIndex(null);
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
            onClick={() => navigate("/teacher/content")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="#454444"
                d="M21 11H6.414l5.293-5.293l-1.414-1.414L2.586 12l7.707 7.707l1.414-1.414L6.414 13H21z"
                strokeWidth="0.5"
                stroke="#525252"
              />
            </svg>
            <h1>Back to My Course</h1>
          </div>

          <Button
            onClick={() => setOpenVideo(true)}
            className="!flex !gap-2 !bg-[#3fcba8] !text-white shadow-md hover:!bg-[#17ae88] "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14zM3 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
              />
            </svg>
            Upload video
          </Button>
        </div>
      </div>

      <ModelUploadVideo
        isModalOpen={openVideo}
        handleCancel={() => {
          setOpenVideo(false);
          setEditIndex(null);
        }}
        handleOk={handleOk}
        onSubmitData={handleSubmit}
        initialValues={editIndex !== null ? data[editIndex] : null}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
        {data.map((item, index) => (
          <Card
            key={index}
            hoverable
            className="shadow-md rounded-lg"
            title={item.title}
            extra={<span className="text-gray-400 text-sm">#{index + 1}</span>}
          >
            <video
              src={item.videoUrl}
              controls
              className="w-full rounded-md mb-3"
            />
            <p className="text-gray-600">{item.description}</p>

            <div className="mt-5 gap-1.5 grid grid-cols-2">
              <button
                type="secondary"
                onClick={() => {
                  setEditIndex(index);
                  setOpenVideo(true);
                }}
                className="bg-[#76eacd] cursor-pointer hover:bg-[#3edfb7] py-1 w-full h-auto text-white font-medium rounded-md flex gap-2 items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="m14.06 9l.94.94L5.92 19H5v-.92zm3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"
                    stroke-width="0.5"
                    stroke="#fff"
                  />
                </svg>
                Edit
              </button>

              <button
                type="secondary"
                onClick={() => handleDeleteClick(index)}
                className="bg-[#ea8576] cursor-pointer hover:bg-[#e95a44] py-1 w-full h-auto text-white font-medium rounded-md flex gap-2 items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
                    stroke-width="0.5"
                    stroke="#fff"
                  />
                </svg>
                Delete
              </button>
            </div>
          </Card>
        ))}
        <DeleteVideoModal
          open={deleteIndex !== null}
          videoTitle={deleteIndex !== null ? data[deleteIndex]?.title : ""}
          loading={loading}
          courseTitle={data.title}
          onCancel={() => setDeleteIndex(null)}
          onConfirm={handleConfirmDelete}
        />
      </div>
    </>
  );
}

export default ViewContent;
