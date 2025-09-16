import { Button, Form, Input, InputNumber, Modal } from "antd";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import { Mail, Phone, User } from "lucide-react";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

function ModalProfileChildren({
  isModalOpen,
  handleOk,
  handleCancel,
  onSubmitData,
  initialState,
}) {
  const [form] = useForm();

  useEffect(() => {
    if (initialState) {
      form.setFieldsValue(initialState);
    } else {
      form.resetFields();
    }
  }, [initialState, form]);

  const onSubmit = () => {
    form.validateFields().then((values) => {
      console.log("DATA", values);
      onSubmitData(values);
      handleOk();
      form.resetFields();
    });
    toast.success("Update successful!");
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
          key="create"
          onClick={onSubmit}
          type="primary"
          className="!bg-[#00b0ff] hover:!bg-[#0090d9] rounded-lg h-10 px-6 font-semibold"
        >
          Update
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
            Update Children Profile
          </h1>
          <p className="text-white/80">
            Build an engaging learning experience for your children
          </p>
        </div>
      </div>

      <Form layout="vertical" form={form}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormItem
            name="children"
            label="Child's Name"
            rules={[
              { required: true, message: "Please enter child's name!" },
              { min: 2, message: "Name must be at least 2 characters!" },
            ]}
          >
            <Input
              prefix={<User className="text-gray-400 w-4 h-4" />}
              placeholder="Enter child's name"
              className="rounded-lg h-11"
            />
          </FormItem>

          <FormItem
            name="parent"
            label="Parent Name"
            rules={[
              { required: true, message: "Please enter parent's name!" },
              { min: 2, message: "Name must be at least 2 characters!" },
            ]}
          >
            <Input
              prefix={<User className="text-gray-400 w-4 h-4" />}
              placeholder="Enter parent name"
              className="rounded-lg h-11"
            />
          </FormItem>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormItem
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input
              prefix={<Mail className="text-gray-400 w-4 h-4" />}
              placeholder="Enter email"
              className="rounded-lg h-11"
            />
          </FormItem>

          {/* <FormItem
            name="phone"
            label="Phone Number"
            rules={[
              { required: true, message: "Please enter phone number!" },
              {
                pattern: /^[0-9]{9,11}$/,
                message: "Phone number must be 9–11 digits!",
              },
            ]}
          >
            <Input
              prefix={<Phone className="text-gray-400 w-4 h-4" />}
              placeholder="Enter phone number"
              className="rounded-lg h-11"
            />
          </FormItem> */}
          <FormItem
            name="age"
            label="Age"
            rules={[
              { required: true, message: "Please enter your age!" },
              {
                pattern: /^[1-9][0-9]*$/,
                message: "Age must be a positive number!",
              },
            ]}
          >
            <InputNumber
              placeholder="Enter your age"
              className="rounded-lg w-full h-11"
            />
          </FormItem>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
      </Form>

      <p className="text-gray-500 text-sm mt-6 text-center">
        The information will be saved after you update successfully.
      </p>
    </Modal>
  );
}

export default ModalProfileChildren;
