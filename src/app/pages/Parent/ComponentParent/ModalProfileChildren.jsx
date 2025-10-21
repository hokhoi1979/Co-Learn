import { Button, DatePicker, Form, Input, Modal, Select, Upload } from "antd";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import { Mail, User } from "lucide-react";
import { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { uploadFile } from "../../../utils/uploadFile";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { postProfileStudent } from "../../../redux/parent/postProfileStudent/postProfileStudentSlice";
import { getProfileParentId } from "../../../redux/parent/profileParentId/getProfileParentIdSlice";
import { putProfileStudent } from "../../../redux/parent/putProfileStudent/putProfileStudentSlice";

function ModalProfileChildren({
  isModalOpen,
  handleOk,
  handleCancel,
  initialState,
  inforParent,
}) {
  const dispatch = useDispatch();
  const [form] = useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialState) {
      form.setFieldsValue({
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
      });
    } else {
      form.resetFields();
    }
  }, [initialState, form]);

  const onSubmit = async () => {
    try {
      const values = await form.validateFields();
      setLoading(true);

      let photoUrl = initialState?.photo;
      const file = values.photo?.[0]?.originFileObj;
      if (file) {
        const uploaded = await uploadFile(file);
        photoUrl = uploaded.url;
      }

      const payload = {
        parentId: inforParent?.parentId,
        parentUserId: inforParent?.userId,
        fullName: values.fullName,
        email: values.email,
        born: values.born ? values.born.toISOString() : null,
        photo: photoUrl || [],
        gradeLevel: values.gradeLevel,
      };

      if (initialState?.userId) {
        await dispatch(
          putProfileStudent({
            id: initialState.userId,
            body: payload,
          })
        );
        if (inforParent?.userId) {
          await dispatch(getProfileParentId(inforParent.userId));
        }
        handleOk(false);
      } else {
        await dispatch(postProfileStudent(payload));
        handleOk(true);
      }
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
          loading={loading}
          type="primary"
          className="!bg-[#3fcba8] hover:!bg-[#3fcba8] rounded-lg h-10 px-6 font-semibold"
        >
          Update
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
            name="fullName"
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

          <Form.Item label="Select Grade" name="gradeLevel">
            <Select placeholder="Select grade level">
              <Option value="Grade 1">Grade 1</Option>
              <Option value="Grade 2">Grade 2</Option>
              <Option value="Grade 3">Grade 3</Option>
              <Option value="Grade 4">Grade 4</Option>
              <Option value="Grade 5">Grade 5</Option>
            </Select>
          </Form.Item>
        </div>

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
      </Form>

      <p className="text-gray-500 text-sm mt-6 text-center">
        The information will be saved after you update successfully.
      </p>
    </Modal>
  );
}

export default ModalProfileChildren;
