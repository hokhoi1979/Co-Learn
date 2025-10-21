import React, { useEffect, useState } from "react";
import { Modal, Form, Input, Button, Upload, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react";
import { uploadFile } from "../../../utils/uploadFile";

function ModalTeacher({
  isModalOpen,
  handleCancel,
  onSubmitData,
  initialState,
  idTeacher,
}) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (initialState) {
      form.setFieldsValue({
        ...initialState,
        pricePerSession: initialState.pricePerSession,
        durationMinutes: initialState.durationMinutes,
        thumbnail: initialState.imageUrl
          ? [
              {
                uid: "-1",
                name: "thumbnail.png",
                status: "done",
                url: initialState.imageUrl,
              },
            ]
          : [],
      });
    } else {
      form.resetFields();
    }
  }, [initialState, form]);

  const onSubmit = async () => {
    try {
      const values = await form.validateFields();
      setLoading(true);
      let thumbnailUrl = initialState?.imageUrl;
      const file = values.thumbnail?.[0]?.originFileObj;
      if (file) {
        const uploaded = await uploadFile(file);
        thumbnailUrl = uploaded.url;
      }

      const newCourse = {
        teacherId: idTeacher,
        categoryId: 1,
        title: values.title,
        shortDescription: "",
        description: values.description,
        level: values.level,
        pricePerSession: Number(values.pricePerSession),
        durationMinutes: Number(values.durationMinutes),
        imageUrl: thumbnailUrl,
      };

      await onSubmitData(newCourse);
      form.resetFields();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
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
          loading={loading}
          className="!bg-[#3fcba8] hover:!bg-[#3fcba8]"
        >
          {initialState ? "Edit Course" : "Create Course"}
        </Button>,
      ]}
      className="custom-modal"
      closable={false}
    >
      <div className="bg-gradient-to-r from-[#3fcba8] to-[#3fcba8] p-5 rounded-t-lg -m-6 mb-6">
        <h1 className="text-2xl font-bold text-white">
          {initialState ? "Edit Course" : "Create New Course"}
        </h1>
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

        <div className="grid grid-cols-2 gap-2">
          <Form.Item
            label="Course Title"
            name="title"
            rules={[{ required: true, message: "Please enter course title" }]}
          >
            <Input placeholder="e.g., Python Programming for Beginners" />
          </Form.Item>

          <Form.Item
            label="Level"
            name="level"
            rules={[{ required: true, message: "Please select course level" }]}
          >
            <Select placeholder="Select difficulty level">
              <Select.Option value="easy">Easy</Select.Option>
              <Select.Option value="medium">Medium</Select.Option>
              <Select.Option value="hard">Hard</Select.Option>
            </Select>
          </Form.Item>
        </div>

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
            label="Price per Session (VND)"
            name="pricePerSession"
            rules={[
              { required: true, message: "Please enter price per session" },
            ]}
          >
            <Input placeholder="e.g., 25" type="number" />
          </Form.Item>

          <Form.Item
            label="Duration (minutes)"
            name="durationMinutes"
            rules={[
              { required: true, message: "Please enter duration in minutes" },
            ]}
          >
            <Input placeholder="e.g., 60" type="number" />
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
