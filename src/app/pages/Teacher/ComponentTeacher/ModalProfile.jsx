import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
} from "antd";
import { useForm } from "antd/es/form/Form";
import { User } from "lucide-react";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import dayjs from "dayjs";

const { Option } = Select;

function ModalProfile({
  isModalOpen,
  handleOk,
  handleCancel,
  initialState,
  onSubmitData,
}) {
  const [form] = useForm();

  useEffect(() => {
    if (initialState) {
      const values = {
        ...initialState,
        born: initialState.born ? dayjs(initialState.born) : null,
      };
      form.setFieldsValue(values);
    } else {
      form.resetFields();
    }
  }, [initialState, form]);

  const onSubmit = () => {
    form.validateFields().then((values) => {
      if (values.born) {
        values.born = dayjs(values.born).format("YYYY-MM-DD");
      }

      onSubmitData(values);
      handleOk();
      console.log("Teacher DATA:", values);
      form.resetFields();
      toast.success("Update successful!");
    });
  };

  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      width={720}
      footer={[
        <Button
          key="cancel"
          onClick={handleCancel}
          className="rounded-lg h-10 px-6"
        >
          Cancel
        </Button>,
        <Button
          key="save"
          onClick={onSubmit}
          type="primary"
          className="!bg-[#00b0ff] hover:!bg-[#0090d9] rounded-lg h-10 px-6 font-semibold"
        >
          Save
        </Button>,
      ]}
      className="custom-modal"
      closable={false}
    >
      <div className="bg-gradient-to-r from-[#2972cc] to-[#35bdd2] p-6 rounded-t-lg -m-6 mb-8 flex items-center gap-4">
        <div className="bg-white/20 p-3 rounded-full">
          <User className="w-7 h-7 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">
            Update Teacher Profile
          </h1>
          <p className="text-white/80">Keep your teaching profile up to date</p>
        </div>
      </div>

      <Form form={form} layout="vertical">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              { required: true, message: "Please enter your full name" },
              { min: 3, message: "Name must be at least 3 characters" },
            ]}
          >
            <Input placeholder="Enter full name" className="rounded-lg" />
          </Form.Item>

          <Form.Item
            label="Date of Birth"
            name="born"
            rules={[
              { required: true, message: "Please select your date of birth" },
              {
                validator: (_, value) =>
                  value && value.isAfter()
                    ? Promise.reject(
                        new Error("Date of birth cannot be in the future")
                      )
                    : Promise.resolve(),
              },
            ]}
          >
            <DatePicker style={{ width: "100%" }} className="rounded-lg" />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item
            label="Age"
            name="age"
            rules={[
              { required: true, message: "Please enter your age" },
              {
                type: "number",
                min: 18,
                max: 100,
                message: "Age must be between 18 and 100",
              },
            ]}
          >
            <InputNumber
              placeholder="Enter your age"
              min={18}
              max={100}
              style={{ width: "100%" }}
              className="rounded-lg"
            />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              { required: true, message: "Please enter your phone number" },
              {
                pattern: /^[0-9]{9,11}$/,
                message: "Invalid phone number",
              },
            ]}
          >
            <Input placeholder="Enter phone number" className="rounded-lg" />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Invalid email address" },
            ]}
          >
            <Input placeholder="Enter email" className="rounded-lg" />
          </Form.Item>

          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true, message: "Please select your gender" }]}
          >
            <Select placeholder="Select gender" className="rounded-lg">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item
            label="Experience (years)"
            name="experience"
            rules={[
              { required: true, message: "Please enter years of experience" },
              {
                type: "number",
                min: 0,
                max: 50,
                message: "Experience must be between 0 - 50 years",
              },
            ]}
          >
            <InputNumber
              placeholder="Enter your year experience"
              min={0}
              max={50}
              style={{ width: "100%" }}
              className="rounded-lg"
            />
          </Form.Item>

          <Form.Item
            label="Teaching Languages"
            name="languages"
            rules={[
              { required: true, message: "Please enter at least one language" },
            ]}
          >
            <Select
              mode="tags"
              placeholder="Enter or select languages"
              className="rounded-lg"
            >
              <Option value="Vietnamese">Vietnamese</Option>
              <Option value="English">English</Option>
            </Select>
          </Form.Item>
        </div>

        <Form.Item
          label="Short Introduction"
          name="description"
          rules={[
            { required: true, message: "Please enter a short introduction" },
            { min: 10, message: "Introduction must be at least 10 characters" },
          ]}
        >
          <Input.TextArea
            rows={3}
            placeholder="Write a short introduction about yourself"
            className="rounded-lg"
          />
        </Form.Item>
      </Form>

      <p className="text-gray-500 text-sm mt-6 text-center">
        The information will be saved after you update successfully.
      </p>
    </Modal>
  );
}

export default ModalProfile;
