import { Form, Input, Select, DatePicker, Upload, Button, Modal } from "antd";
import { useForm } from "antd/es/form/Form";
import { UploadOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react";
import dayjs from "dayjs";

import React, { useEffect } from "react";

const { Option } = Select;
const { RangePicker } = DatePicker;

function ModalClass({
  isModalOpen,
  handleOk,
  handleCancel,
  onSubmitData,
  initialValues,
}) {
  const [form] = useForm();

  useEffect(
    () => {
      if (initialValues) {
        form.setFieldsValue({
          ...initialValues,
          dates: initialValues.dates
            ? [
                dayjs(initialValues.dates.start, "YYYY-MM-DD"),
                dayjs(initialValues.dates.end, "YYYY-MM-DD"),
              ]
            : null,
          time: initialValues.time
            ? dayjs(initialValues.time, "YYYY-MM-DD HH:mm")
            : null,
          thumbnail: initialValues.thumbnail
            ? [
                {
                  uid: "-1",
                  name: "thumbnail.png",
                  status: "done",
                  url: initialValues.thumbnail,
                },
              ]
            : [],
        });
      } else {
        form.resetFields();
      }
    },
    [initialValues],
    [form]
  );

  const onSubmit = () => {
    form.validateFields().then((values) => {
      const file = values.thumbnail?.[0]?.originFileObj;
      const thumbnailUrl = file
        ? URL.createObjectURL(file)
        : initialValues?.thumbnail || null;
      const newClass = {
        ...values,
        thumbnail: thumbnailUrl,

        time: values.time ? values.time.format("YYYY-MM-DD HH:mm") : null,
        dates:
          values.dates && values.dates.length === 2
            ? {
                start: values.dates[0].format("YYYY-MM-DD"),
                end: values.dates[1].format("YYYY-MM-DD"),
              }
            : null,
      };
      console.log("Class", newClass);
      onSubmitData(newClass);
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
          {initialValues ? "Update Class" : "Create Class"}
        </Button>,
      ]}
      className="custom-modal"
      closable={false}
    >
      <div className="bg-gradient-to-r from-[#2972cc] to-[#35bdd2] p-5 rounded-t-lg -m-6 mb-6">
        <h1 className="text-2xl font-bold text-white">Create New Class</h1>
        <p className="text-white/80">
          Setup schedule and details for this class
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
          <h2 className="font-semibold text-lg">Class Information</h2>
        </div>

        <Form.Item
          label="Class Title"
          name="title"
          rules={[{ required: true, message: "Please enter class title" }]}
        >
          <Input placeholder="e.g., Python Programming for Beginners" />
        </Form.Item>

        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            label="Start & End Date"
            name="dates"
            rules={[
              { required: true, message: "Please select start & end date" },
            ]}
          >
            <RangePicker format="YYYY-MM-DD" style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Max Students"
            name="maxStudents"
            rules={[{ required: true, message: "Please enter max students" }]}
          >
            <Input type="number" placeholder="e.g., 30" />
          </Form.Item>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            label="Live"
            name="live"
            rules={[{ required: true, message: "Please select status" }]}
          >
            <Select placeholder="Choose status">
              <Option value="Online">Online</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Zoom/Meet Link"
            name="link"
            rules={[{ required: true, message: "Please enter meeting link" }]}
          >
            <Input placeholder="e.g., https://zoom.us/my/classlink" />
          </Form.Item>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            label="Schedule (Days)"
            name="schedule"
            rules={[{ required: true, message: "Please select class days" }]}
          >
            <Select mode="multiple" placeholder="Choose days">
              <Option value="Mon">Monday</Option>
              <Option value="Tue">Tuesday</Option>
              <Option value="Wed">Wednesday</Option>
              <Option value="Thu">Thursday</Option>
              <Option value="Fri">Friday</Option>
              <Option value="Sat">Saturday</Option>
              <Option value="Sun">Sunday</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Class Time"
            name="time"
            rules={[{ required: true, message: "Please select class time" }]}
          >
            <DatePicker
              picker="time"
              format="HH:mm"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </div>

        <Form.Item
          label="Class Thumbnail"
          name="thumbnail"
          valuePropName="fileList"
          getValueFromEvent={(e) => e && e.fileList}
        >
          <Upload beforeUpload={() => false} listType="picture">
            <Button icon={<UploadOutlined />}>Upload class thumbnail</Button>
          </Upload>
        </Form.Item>
      </Form>

      <p className="text-gray-500 text-sm mt-6">
        Class will be saved as draft and can be published later
      </p>
    </Modal>
  );
}

export default ModalClass;
