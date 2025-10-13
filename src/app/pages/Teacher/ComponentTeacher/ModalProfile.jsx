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
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import { uploadFile } from "../../../utils/uploadFile";
import { useDispatch } from "react-redux";
import { createProfileTeacher } from "../../../redux/teacher/profileTeacher/creatProfileTeacher/createProfileTeacherSlice";
import { editProfileTeacher } from "../../../redux/teacher/profileTeacher/editProfileTeacher/editProfileTeacherSlice";
import { getProfileTeacherId } from "../../../redux/teacher/profileTeacher/getProfileId/getProfileIdSlice";

const { Option } = Select;

function ModalProfile({ isModalOpen, handleOk, handleCancel, initialState }) {
  const [form] = useForm();
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      let data;
      data = JSON.parse(auth);
      setUser(data);
    }
  }, []);

  useEffect(() => {
    if (initialState) {
      const getFileItem = (url, uid) =>
        url
          ? [
              {
                uid,
                name: url.split("/").pop(),
                status: "done",
                url,
              },
            ]
          : [];

      const values = {
        ...initialState,
        born: initialState.born ? dayjs(initialState.born) : null,
        photo: getFileItem(initialState.photo, "-1"),
        degree: getFileItem(initialState.degree, "-2"),
        cv: getFileItem(initialState.cv, "-3"),
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
        values.born = dayjs(values.born).toISOString();
      }

      values.photo =
        values.photo?.[0]?.response?.url || values.photo?.[0]?.url || null;
      values.degree =
        values.degree?.[0]?.response?.url || values.degree?.[0]?.url || null;
      values.cv = values.cv?.[0]?.response?.url || values.cv?.[0]?.url || null;

      const payload = {
        userId: user?.userId ?? 0,
        fullName: values.fullName,
        born: values.born,
        phone: values.phone,
        gender: values.gender,
        degree: values.degree,
        cv: values.cv,
        photo: values.photo,
        description: values.description,
      };

      if (initialState) {
        dispatch(
          editProfileTeacher({ id: initialState?.teacherId, body: payload })
        );

        dispatch(getProfileTeacherId(user?.userId));
      } else {
        dispatch(createProfileTeacher(payload));
        dispatch(getProfileTeacherId(user?.userId));
      }
      handleOk();
      form.resetFields();
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
          className="!bg-[#3fcba8] hover:!bg-[#24be97] rounded-lg h-10 px-6 font-semibold"
        >
          Save
        </Button>,
      ]}
      className="custom-modal"
      closable={false}
    >
      <div className="bg-gradient-to-r from-[#3fcba8] to-[#3fcba8] p-6 rounded-t-lg -m-6 mb-8 flex items-center gap-4">
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
          <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
            <Input placeholder="Enter phone number" />
          </Form.Item>
          <Form.Item label="Gender" name="gender">
            <Select placeholder="Select gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Form.Item
            name="photo"
            label="Photo"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              customRequest={async ({ file, onSuccess, onError }) => {
                try {
                  const res = await uploadFile(file);
                  onSuccess(res, file);
                } catch (err) {
                  onError(err);
                }
              }}
              listType="picture"
            >
              <Button icon={<UploadIcon size={16} />}>Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name="degree"
            label="Degree"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              customRequest={async ({ file, onSuccess, onError }) => {
                try {
                  const res = await uploadFile(file);
                  onSuccess(res, file);
                } catch (err) {
                  onError(err);
                }
              }}
            >
              <Button icon={<UploadIcon size={16} />}>Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name="cv"
            label="CV"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              customRequest={async ({ file, onSuccess, onError }) => {
                try {
                  const res = await uploadFile(file);
                  onSuccess(res, file);
                } catch (err) {
                  onError(err);
                }
              }}
            >
              <Button icon={<UploadIcon size={16} />}>Upload</Button>
            </Upload>
          </Form.Item>
        </div>

        <Form.Item
          label="Description"
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
