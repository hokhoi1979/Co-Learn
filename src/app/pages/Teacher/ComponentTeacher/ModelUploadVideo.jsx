import { useEffect, useState } from "react";
import { Modal, Form, Input, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { createLesson } from "../../../redux/teacher/lessonTeacher/createLesson/createLessonSlice";
import { updateLesson } from "../../../redux/teacher/lessonTeacher/updateLesson/updateLessonSlice";
import { getLesson } from "../../../redux/teacher/lessonTeacher/getLesson/getLessonSlice";
import { uploadFile } from "../../../utils/uploadFile";

function ModelUploadVideo({
  isModalOpen,
  handleOk,
  handleCancel,
  initialValues,
  courseId,
}) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    } else {
      form.resetFields();
    }
  }, [initialValues, form]);

  const onSubmit = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();

      let videoUrl = initialValues?.videoUrl || null;
      const file = values.video?.[0]?.originFileObj;
      if (file) {
        const upload = await uploadFile(file);
        videoUrl = upload.url;
      }

      const payload = {
        courseId: courseId,
        title: values.title,
        content: values.content,
        orderNumber: values.orderNumber,
        durationMinutes: 1,
        videoUrl: videoUrl,
      };

      if (initialValues?.lessonId) {
        await dispatch(
          updateLesson({ id: initialValues?.lessonId, body: payload })
        );
        toast.success("Update successful! ");
      } else {
        await dispatch(createLesson({ id: courseId, body: payload }));
      }

      await dispatch(getLesson(courseId));
      handleOk();
      form.resetFields();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
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
        <Button key="cancel" onClick={handleCancel} disabled={loading}>
          Cancel
        </Button>,
        <Button
          key="upload"
          type="primary"
          onClick={onSubmit}
          className="!bg-[#3fcba8] hover:!bg-[#17ae88]"
          loading={loading}
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
        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            label="Video Title"
            name="title"
            rules={[{ required: true, message: "Please enter video title" }]}
          >
            <Input placeholder="e.g., Introduction to Python" />
          </Form.Item>
          <Form.Item
            label="Order Number"
            name="orderNumber"
            rules={[{ required: true, message: "Please enter order number" }]}
          >
            <Input type="number" placeholder="e.g., 1" />
          </Form.Item>
        </div>
        <Form.Item
          label="Content"
          name="content"
          rules={[{ required: true, message: "Please enter video content" }]}
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
