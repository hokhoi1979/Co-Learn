import { Form, Input, Modal, Select, Button, DatePicker } from "antd";
import { useForm } from "antd/es/form/Form";
import React, { useEffect } from "react";
import dayjs from "dayjs";

function ModalBooking({ open, cancel, onSubmit, initialValues }) {
  const [form] = useForm();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue({
        childName: initialValues.child,
        parentName: initialValues.parent,
        phone: initialValues.phone, // ✅ map lại phone
        email: initialValues.email, // ✅ map lại email
        subject: initialValues.title,
        datetime:
          initialValues.day && initialValues.time
            ? dayjs(`${initialValues.day} ${initialValues.time}`, "dddd HH:mm")
            : null,
      });
    } else {
      form.resetFields();
    }
  }, [initialValues, form]);

  const handleFinish = (values) => {
    const formatted = {
      ...values,
      day: values.datetime.format("dddd"),
      time: values.datetime.format("HH:mm"),
    };
    if (onSubmit) onSubmit(formatted);
    form.resetFields();
    cancel();
  };

  return (
    <Modal
      open={open}
      onCancel={cancel}
      footer={null}
      centered
      destroyOnClose
      className="rounded-xl overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2972cc] to-[#35bdd2] p-5 -m-6 mb-6">
        <h1 className="text-2xl font-bold text-white">
          {initialValues
            ? "Update Booking"
            : "Book Your Child's Learning Journey"}
        </h1>
        <p className="text-white/80 text-sm mt-1">
          Transform your child's future with our expert-led programming courses.
        </p>
      </div>

      {/* Form */}
      <Form layout="vertical" form={form} onFinish={handleFinish}>
        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-3">
          <Form.Item
            label="Child's Name"
            name="childName"
            rules={[{ required: true, message: "Please enter child's name" }]}
          >
            <Input placeholder="Enter child's name" />
          </Form.Item>

          <Form.Item
            label="Parent's Name"
            name="parentName"
            rules={[{ required: true, message: "Please enter parent's name" }]}
          >
            <Input placeholder="Enter parent's name" />
          </Form.Item>
        </div>

        {/* Contact */}
        <div className="grid grid-cols-2 gap-3">
          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[{ required: true, message: "Please enter your phone" }]}
          >
            <Input placeholder="Enter phone number" />
          </Form.Item>

          <Form.Item
            label="Email Address"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input type="email" placeholder="Enter email address" />
          </Form.Item>
        </div>

        {/* Subject & Date */}
        <div className="grid grid-cols-2 gap-3">
          <Form.Item
            label="Choose Subject"
            name="subject"
            rules={[{ required: true, message: "Please choose subject" }]}
          >
            <Select placeholder="Select a subject">
              <Select.Option value="python">Python for Kids</Select.Option>
              <Select.Option value="javascript">
                JavaScript Game Development
              </Select.Option>
              <Select.Option value="react">React Fundamentals</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Choose Date & Time"
            name="datetime"
            rules={[{ required: true, message: "Please select date & time" }]}
          >
            <DatePicker
              showTime={{ format: "HH:mm" }}
              format="dddd HH:mm"
              className="w-full"
            />
          </Form.Item>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <Button onClick={cancel}>Cancel</Button>
          <Button type="primary" htmlType="submit">
            {initialValues ? "Update" : "Book Now"}
          </Button>
        </div>
      </Form>
    </Modal>
  );
}

export default ModalBooking;
