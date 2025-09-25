import React, { useEffect } from "react";
import { Modal, Form, Input, Button, Upload, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";

function ModalTeacher({
  isModalOpen,
  handleOk,
  handleCancel,
  onSubmitData,
  initialState,
}) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialState) {
      form.setFieldsValue({
        ...initialState,
        pricePerSession: initialState.pricePerSession,
        durationMinutes: initialState.durationMinutes,
        thumbnail: initialState.thumbnail
          ? [
              {
                uid: "-1",
                name: "thumbnail.png",
                status: "done",
                url: initialState.thumbnail,
              },
            ]
          : [],
      });
    } else {
      form.resetFields();
    }
  }, [initialState, form]);

  const onSubmit = () => {
    form.validateFields().then((values) => {
      const file = values.thumbnail?.[0]?.originFileObj;
      const thumbnailUrl = file
        ? URL.createObjectURL(file)
        : initialState?.thumbnail || null;

      const newCourse = {
        teacherId: 1,
        categoryId: 1,
        title: values.title,
        shortDescription: "",
        description: values.description,
        level: values.level,
        pricePerSession: Number(values.pricePerSession),
        durationMinutes: Number(values.durationMinutes),
        // thumbnail: thumbnailUrl,
      };

      onSubmitData(newCourse);

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
          {initialState ? "Edit Course" : "Create Course"}
        </Button>,
      ]}
      className="custom-modal"
      closable={false}
    >
      <div className="bg-gradient-to-r from-[#2972cc] to-[#35bdd2] p-5 rounded-t-lg -m-6 mb-6">
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
            label="Price per Session ($)"
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
