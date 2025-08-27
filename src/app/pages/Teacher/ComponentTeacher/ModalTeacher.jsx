import React, { useState } from "react";
import { Modal, Form, Input, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react";

function ModalTeacher({ isModalOpen, handleOk, handleCancel, onSubmitData }) {
  const [form] = Form.useForm();

  const onSubmit = () => {
    form.validateFields().then((values) => {
      const file = values.thumbnail?.[0]?.originFileObj;
      const thumbnailUrl = file ? URL.createObjectURL(file) : null;

      const newCourse = {
        ...values,
        thumbnail: thumbnailUrl,
      };

      onSubmitData(newCourse);
      handleOk();
      form.resetFields();
    });
  };

  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      width={700}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          key="create"
          type="primary"
          onClick={onSubmit}
          className="!bg-[#00b0ff] hover:!bg-[#0090d9]"
        >
          Create Course
        </Button>,
      ]}
      className="custom-modal"
      closable={false}
    >
      <div className="bg-gradient-to-r from-[#2972cc] to-[#35bdd2] p-5 rounded-t-lg -m-6 mb-6">
        <h1 className="text-2xl font-bold text-white">Create New Course</h1>
        <p className="text-white/80">
          Build an engaging learning experience for your students
        </p>
      </div>

      <Form layout="vertical" form={form}>
        <div className="flex gap-2 mb-4">
          <Icon
            color="black"
            icon="mdi:book-open-page-variant"
            width="28"
            height="28"
          />
          <h2 className="font-semibold text-lg">Course Information</h2>
        </div>

        <Form.Item
          label="Course Title"
          name="title"
          rules={[{ required: true, message: "Please enter course title" }]}
        >
          <Input placeholder="e.g., Python Programming for Beginners" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please enter course description" },
          ]}
        >
          <Input.TextArea
            placeholder="Describe what students will learn in this course..."
            rows={3}
          />
        </Form.Item>

        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            label="Lessons"
            name="lessons"
            rules={[
              { required: true, message: "Please enter number of lessons" },
            ]}
          >
            <Input placeholder="e.g., 12" type="number" />
          </Form.Item>

          <Form.Item
            label="Price ($)"
            name="price"
            rules={[{ required: true, message: "Please enter course price" }]}
          >
            <Input placeholder="e.g., 25" type="number" />
          </Form.Item>
        </div>

        <Form.Item
          label="Course Thumbnail"
          name="thumbnail"
          valuePropName="fileList"
          getValueFromEvent={(e) => e && e.fileList}
        >
          <Upload beforeUpload={() => false} listType="picture">
            <Button icon={<UploadOutlined />}>Upload course thumbnail</Button>
          </Upload>
        </Form.Item>
      </Form>

      <p className="text-gray-500 text-sm mt-6">
        Course will be saved as draft and can be published later
      </p>
    </Modal>
  );
}

export default ModalTeacher;
