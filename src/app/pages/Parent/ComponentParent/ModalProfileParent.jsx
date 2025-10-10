import { Button, Form, Input, Modal, DatePicker, Upload } from "antd";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import { Mail, Phone, User, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { uploadFile } from "../../../utils/uploadFile";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { updateProfileParent } from "../../../redux/parent/updateProfileParent/updateProfileParentSlice";
function ModalProfileParent({
  isModalOpen,
  handleOk,
  handleCancel,
  initialState,
}) {
  const dispatch = useDispatch();
  const [form] = useForm();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (initialState) {
      const formatted = {
        ...initialState,
        born: initialState.born ? dayjs(initialState.born) : null,
        photo: initialState.photo
          ? [
              {
                uid: "-1",
                name: "photo.png",
                status: "done",
                url: initialState.photo,
              },
            ]
          : [],
      };
      form.setFieldsValue(formatted);
    } else {
      form.resetFields();
    }
  }, [initialState, form]);

  const onSubmit = async () => {
    try {
      const values = await form.validateFields();
      setLoading(true);

      const auth = localStorage.getItem("auth");
      const user = auth ? JSON.parse(auth) : null;

      let photoUrl = initialState?.photo;
      const file = values.photo?.[0]?.originFileObj;
      if (file) {
        const uploaded = await uploadFile(file);
        photoUrl = uploaded.url;
      }

      const payload = {
        userId: user?.userId || 0,
        fullName: values.fullName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        born: values.born ? values.born.toISOString() : null,
        photo: photoUrl || "",
        relationship: values.relationship,
      };

      dispatch(
        updateProfileParent({ id: initialState?.userId, body: payload })
      );

      handleOk();
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
      width={720}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          key="update"
          type="primary"
          onClick={onSubmit}
          loading={loading}
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
            Update Parent Profile
          </h1>
          <p className="text-white/80">
            Build an engaging learning experience for your children
          </p>
        </div>
      </div>

      <Form layout="vertical" form={form}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormItem
            name="fullName"
            label="Full Name"
            rules={[{ required: true, message: "Please enter full name!" }]}
          >
            <Input
              prefix={<User className="text-gray-400 w-4 h-4" />}
              placeholder="Enter your full name"
              className="rounded-lg h-11"
            />
          </FormItem>

          <FormItem
            name="phoneNumber"
            label="Phone Number"
            rules={[
              { required: true, message: "Please enter your phone number!" },
              {
                pattern: /^[0-9]{9,11}$/,
                message: "Phone number must be 9–11 digits!",
              },
            ]}
          >
            <Input
              prefix={<Phone className="text-gray-400 w-4 h-4" />}
              placeholder="Enter your phone"
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
              placeholder="Enter your email"
              className="rounded-lg h-11"
            />
          </FormItem>

          <FormItem
            name="born"
            label="Date of Birth"
            rules={[{ required: true, message: "Please select your DOB!" }]}
          >
            <DatePicker
              className="w-full h-11 rounded-lg"
              format="DD/MM/YYYY"
              placeholder="Select date of birth"
            />
          </FormItem>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item
            label="Profile Photo"
            name="photo"
            valuePropName="fileList"
            getValueFromEvent={(e) => e && e.fileList}
          >
            <Upload beforeUpload={() => false} listType="picture">
              <Button icon={<UploadOutlined />}>Upload photo</Button>
            </Upload>
          </Form.Item>

          <FormItem
            name="relationship"
            label="Relationship"
            rules={[{ required: true, message: "Please enter relationship!" }]}
          >
            <Input
              prefix={<Heart className="text-gray-400 w-4 h-4" />}
              placeholder="e.g. Father, Mother, Guardian"
              className="rounded-lg h-11"
            />
          </FormItem>
        </div>
      </Form>

      <p className="text-gray-500 text-sm mt-6 text-center">
        The information will be saved after you update successfully.
      </p>
    </Modal>
  );
}

export default ModalProfileParent;
