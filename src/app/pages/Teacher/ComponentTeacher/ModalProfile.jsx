import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Upload,
} from "antd";
import { useForm } from "antd/es/form/Form";
import { User, Upload as UploadIcon } from "lucide-react";
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
        degree: initialState.degree
          ? [
              {
                uid: "-2",
                name: "degree.pdf",
                status: "done",
                url: initialState.degree,
              },
            ]
          : [],
        cv: initialState.cv
          ? [
              {
                uid: "-3",
                name: "cv.pdf",
                status: "done",
                url: initialState.cv,
              },
            ]
          : [],
      };
      form.setFieldsValue(values);
    } else {
      form.resetFields();
    }
  }, [initialState, form]);

  const normFile = (e) => {
    if (Array.isArray(e)) return e;
    return e && e.fileList ? e.fileList : [];
  };

  const onSubmit = () => {
    form.validateFields().then((values) => {
      if (values.born) {
        values.born = dayjs(values.born).format("YYYY-MM-DD");
      }

      // Xử lý file photo
      if (values.photo?.[0]?.originFileObj) {
        values.photo = URL.createObjectURL(values.photo[0].originFileObj);
      } else if (values.photo?.[0]?.url) {
        values.photo = values.photo[0].url;
      }

      // Xử lý file degree
      if (values.degree?.[0]?.originFileObj) {
        values.degree = URL.createObjectURL(values.degree[0].originFileObj);
      } else if (values.degree?.[0]?.url) {
        values.degree = values.degree[0].url;
      }

      // Xử lý file cv
      if (values.cv?.[0]?.originFileObj) {
        values.cv = URL.createObjectURL(values.cv[0].originFileObj);
      } else if (values.cv?.[0]?.url) {
        values.cv = values.cv[0].url;
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
        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter full name" />
          </Form.Item>
          <Form.Item
            label="Date of Birth"
            name="born"
            rules={[{ required: true }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item label="Age" name="age" rules={[{ required: true }]}>
            <InputNumber min={18} max={100} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
            <Input placeholder="Enter phone number" />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item label="Email" name="email" rules={[{ required: true }]}>
            <Input placeholder="Enter email" />
          </Form.Item>
          <Form.Item label="Gender" name="gender">
            <Select placeholder="Select gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
        </div>

        {/* Professional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item label="Experience (years)" name="experience">
            <InputNumber min={0} max={50} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item label="Languages" name="languages">
            <Select mode="tags" placeholder="Enter or select languages">
              <Option value="Vietnamese">Vietnamese</Option>
              <Option value="English">English</Option>
            </Select>
          </Form.Item>
        </div>

        {/* Upload Files */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Form.Item
            name="photo"
            label="Photo"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload beforeUpload={() => false} listType="picture">
              <Button icon={<UploadIcon size={16} />}>Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name="degree"
            label="Certificate"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload beforeUpload={() => false}>
              <Button icon={<UploadIcon size={16} />}>Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name="cv"
            label="CV"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload beforeUpload={() => false}>
              <Button icon={<UploadIcon size={16} />}>Upload</Button>
            </Upload>
          </Form.Item>
        </div>

        {/* Introduction */}
        <Form.Item
          label="Introduction"
          name="description"
          rules={[{ required: true }]}
        >
          <Input.TextArea rows={3} placeholder="Introduce yourself briefly" />
        </Form.Item>
      </Form>

      <p className="text-gray-500 text-sm mt-6 text-center">
        The information will be saved after you update successfully.
      </p>
    </Modal>
  );
}

export default ModalProfile;
