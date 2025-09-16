import React from "react";
import { Modal, Tag, Descriptions, Image } from "antd";
import {
  CalendarOutlined,
  TeamOutlined,
  LinkOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

function ModalViewClass({ isOpen, onClose, classData }) {
  if (!classData) return null;

  const handleJoin = (link) => {
    console.log("link", link);
  };

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={800}
      className="custom-modal"
    >
      <div className="bg-gradient-to-r from-[#3fcba8] to-[#1a9b7d] p-6 rounded-t-lg -m-6 mb-6">
        <h1 className="text-2xl font-bold text-white">{classData.title}</h1>
        <p className="text-white/80">Class details and schedule</p>
      </div>

      <div className="flex gap-6 mb-6">
        <Image
          src={classData.thumbnail}
          alt={classData.title}
          width={220}
          height={150}
          className="rounded-xl object-cover shadow-md"
        />
        <div className=" justify-between">
          <div>
            <Tag color="green" className="text-sm px-3 py-1 rounded-full">
              {classData.live}
            </Tag>
          </div>
          <div className="space-y-2 py-2 text-gray-600">
            <p>
              <TeamOutlined className="mr-2 text-[#3fcba8]" />
              Max Students:
              <span className="font-medium">{classData.maxStudents}</span>
            </p>
            {classData.link && (
              <p onClick={() => handleJoin(classData.link)}>
                <LinkOutlined className="mr-2 text-[#3fcba8]" />
                <a
                  href={classData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Join Link
                </a>
              </p>
            )}
          </div>
        </div>
      </div>

      <Descriptions
        bordered
        column={2}
        labelStyle={{ fontWeight: 600 }}
        className="rounded-xl shadow-sm bg-white"
      >
        <Descriptions.Item label="Start Date">
          {classData.dates?.start}
        </Descriptions.Item>
        <Descriptions.Item label="End Date">
          {classData.dates?.end}
        </Descriptions.Item>
        <Descriptions.Item label="Schedule">
          {classData.schedule?.join(", ")}
        </Descriptions.Item>
        <Descriptions.Item label="Time">
          <ClockCircleOutlined className="mr-2 text-[#3fcba8]" />
          {classData.time}
        </Descriptions.Item>
      </Descriptions>

      <p className="text-gray-500 text-sm mt-6 italic">
        * This class is currently in draft mode. You can edit or publish it
        later.
      </p>
    </Modal>
  );
}

export default ModalViewClass;
