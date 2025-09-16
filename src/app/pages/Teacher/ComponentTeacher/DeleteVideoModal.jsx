import React from "react";
import { Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export default function DeleteVideoModal({
  open,
  onCancel,
  onConfirm,
  loading = false,
  courseTitle,
}) {
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null}
      centered
      closable={!loading}
      maskClosable={!loading}
    >
      <div className="">
        <div className="flex justify-center items-center gap-3 mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 32 32"
          >
            <g fill="none">
              <path
                fill="#ff312e"
                d="m14.839 5.668l-12.66 21.93c-.51.89.13 2.01 1.16 2.01h25.32c1.03 0 1.67-1.11 1.16-2.01l-12.66-21.93c-.52-.89-1.8-.89-2.32 0"
                strokeWidth="1"
                stroke="#ff312e"
              />
              <path
                fill="#fff"
                d="M14.599 21.498a1.4 1.4 0 1 0 2.8-.01v-9.16c0-.77-.62-1.4-1.4-1.4c-.77 0-1.4.62-1.4 1.4zm2.8 3.98a1.4 1.4 0 1 1-2.8 0a1.4 1.4 0 0 1 2.8 0"
                strokeWidth="1"
                stroke="#fff"
              />
            </g>
          </svg>
          <h2 className="text-xl font-bold">Delete this course</h2>
        </div>
        <p className="flex justify-center text-gray-500 mb-4">
          Actions that cannot be undone
        </p>

        <p className="text-base">
          <span>Do you want to delete this course </span>
          <span className="font-semibold text-red-600">{courseTitle}</span> ?
        </p>

        <div className="mt-3 p-2 border border-red-200 bg-red-50 rounded text-red-500 text-sm flex items-center">
          <DeleteOutlined className="mr-1" />
          All data will be permanently deleted.
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onCancel}
            style={{ cursor: "pointer" }}
            disabled={loading}
            className="px-3 py-1 rounded-2xl border border-gray-300 bg-white hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            style={{ cursor: "pointer" }}
            disabled={loading}
            className="px-3 py-1 rounded-2xl bg-[#e24343] text-white hover:bg-red-700 flex items-center gap-2"
          >
            <DeleteOutlined />
            {loading ? "Loading..." : "Yes"}
          </button>
        </div>
      </div>
    </Modal>
  );
}
