import React, { useEffect } from "react";
import { Modal, Form, Input, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";

function ModelUploadVideo({
  isModalOpen,
  handleOk,
  handleCancel,
  onSubmitData,
  initialValues,
}) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    } else {
      form.resetFields();
    }
  }, [initialValues, form]);

  const onSubmit = () => {
    form.validateFields().then((values) => {
      let videoUrl = initialValues?.videoUrl || null;

      const file = values.video?.[0]?.originFileObj;
      if (file) {
        videoUrl = URL.createObjectURL(file);
      }

      const newVideo = {
        ...values,
        videoUrl,
      };

      onSubmitData(newVideo);
      handleOk();
      form.resetFields();
      if (initialValues) {
        toast.success("Update successful!");
      } else {
        toast.success("Create successful!");
      }
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
          key="upload"
          type="primary"
          onClick={onSubmit}
          className="!bg-[#3fcba8] hover:!bg-[#17ae88]"
        >
          {initialValues ? "Save Changes" : "Upload Video"}
        </Button>,
      ]}
      className="custom-modal"
      closable={false}
    >
      <div className="bg-gradient-to-r from-[#20ba93] to-[#3fcba8] p-5 rounded-t-lg -m-6 mb-6">
        <h1 className="text-2xl font-bold text-white">
          {initialValues ? "Edit Video" : "Upload New Video"}
        </h1>
        <p className="text-white/80">
          {initialValues
            ? "Update your lesson video details"
            : "Add a new lesson video to your course library"}
        </p>
      </div>

      <Form layout="vertical" form={form}>
        <div className="flex gap-2 mb-4">
          <Icon color="black" icon="mdi:video-outline" width="28" height="28" />
          <h2 className="font-semibold text-lg">Video Information</h2>
        </div>

        <Form.Item
          label="Video Title"
          name="title"
          rules={[{ required: true, message: "Please enter video title" }]}
        >
          <Input placeholder="e.g., Introduction to Python" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please enter video description" },
          ]}
        >
          <Input.TextArea
            placeholder="What will students learn from this video?"
            rows={3}
          />
        </Form.Item>

        <Form.Item
          label="Upload Video File"
          name="video"
          valuePropName="fileList"
          getValueFromEvent={(e) => e && e.fileList}
        >
          <Upload beforeUpload={() => false} accept="video/*" maxCount={1}>
            <Button icon={<UploadOutlined />}>Select video file</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModelUploadVideo;
