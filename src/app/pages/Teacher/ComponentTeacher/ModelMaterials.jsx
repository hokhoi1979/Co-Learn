// ModalMaterials.js
import { Modal, Upload, Button, List, Form, Input, Select } from "antd";
import {
  UploadOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMaterials } from "../../../redux/teacher/materialsTeacher/getMaterials/getMaterialsSlice";
import { createMaterials } from "../../../redux/teacher/materialsTeacher/createMaterials/createMaterialsSlice";
import { uploadFile } from "../../../utils/uploadFile";
import { deleteMaterials } from "../../../redux/teacher/materialsTeacher/deleteMaterials/deleteMaterialsSlice";
import { updateMaterials } from "../../../redux/teacher/materialsTeacher/updateMaterials/updateMaterialsSlice";

function ModalMaterials({ open, onCancel, lessonId }) {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getMaterialsData);
  const materials = data?.value?.items ?? [];
  const [editingMaterial, setEditingMaterial] = useState(null);

  useEffect(() => {
    if (lessonId) {
      dispatch(getMaterials(lessonId));
    }
  }, [dispatch, lessonId]);

  const handleFinish = async (values) => {
    let fileUrl = editingMaterial?.url || null;
    let format = editingMaterial?.format || null;

    if (fileList.length > 0) {
      const { url, format: fileFormat } = await uploadFile(
        fileList[0].originFileObj
      );
      fileUrl = url;
      format = fileFormat;
    }

    const payload = {
      title: values.title,
      materialType: values.materialType,
      url: fileUrl,
      format: format,
    };

    if (editingMaterial) {
      await dispatch(
        updateMaterials({
          id: editingMaterial.materialId,
          body: {
            lessonId,
            ...payload,
          },
        })
      );
      setEditingMaterial(null);
    } else {
      await dispatch(createMaterials({ lessonId, ...payload }));
    }

    form.resetFields();
    setFileList([]);
    dispatch(getMaterials(lessonId));
  };

  const handleDelete = async (id) => {
    await dispatch(deleteMaterials({ id, lessonId }));
    dispatch(getMaterials(lessonId));
  };

  const getViewUrl = (item) => {
    if (!item?.url) return null;

    const docsFormats = ["pdf", "doc", "docx", "ppt", "pptx", "xls", "xlsx"];

    if (docsFormats.includes(item.format?.toLowerCase())) {
      return `https://docs.google.com/viewer?url=${encodeURIComponent(
        item.url
      )}&embedded=true`;
    }

    return item.url;
  };

  return (
    <Modal
      open={open}
      onCancel={() => {
        form.resetFields();
        setFileList([]);
        onCancel();
      }}
      footer={null}
      width={650}
    >
      <div className="bg-gradient-to-r from-[#2972cc] to-[#35bdd2] p-5 rounded-t-lg -m-6 mb-6">
        <h1 className="text-2xl font-bold text-white">Materials</h1>
        <p className="text-white/80">
          Build an engaging learning experience for your students
        </p>
      </div>
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please enter material title" }]}
        >
          <Input placeholder="e.g., Chapter 1 Notes" />
        </Form.Item>

        <Form.Item
          label="Material Type"
          name="materialType"
          rules={[{ required: true, message: "Please select type" }]}
        >
          <Select placeholder="Select type">
            <Select.Option value="pdf">PDF</Select.Option>
            <Select.Option value="word">Word</Select.Option>
            <Select.Option value="ppt">PowerPoint</Select.Option>
            <Select.Option value="excel">Excel</Select.Option>
            <Select.Option value="image">Image</Select.Option>
            <Select.Option value="video">Video</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Upload File">
          <Upload
            beforeUpload={() => false}
            fileList={fileList}
            onChange={({ fileList }) => setFileList(fileList)}
          >
            <Button icon={<UploadOutlined />}>Upload File</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {editingMaterial ? "Update Material" : "Add Material"}
          </Button>
          {editingMaterial && (
            <Button
              style={{ marginLeft: 8 }}
              onClick={() => {
                setEditingMaterial(null);
                form.resetFields();
                setFileList([]);
              }}
            >
              Cancel
            </Button>
          )}
        </Form.Item>
      </Form>

      <List
        bordered
        dataSource={materials}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <Button
                key="edit"
                type="text"
                icon={<EditOutlined />}
                onClick={() => {
                  setEditingMaterial(item);
                  form.setFieldsValue({
                    title: item.title,
                    materialType: item.materialType,
                  });
                }}
              />,
              <Button
                key="delete"
                onClick={() => {
                  handleDelete(item.materialId);
                  console.log("ID", item.materialId);
                }}
                type="text"
                icon={<DeleteOutlined />}
                danger
              />,
            ]}
          >
            <div>
              <p className="font-medium">
                {index + 1}/ {item.title}
              </p>
              <p className="text-sm text-gray-500">
                Type: {item.materialType?.toUpperCase()}
              </p>
              {item.url && (
                <a
                  href={getViewUrl(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  View File
                </a>
              )}
            </div>
          </List.Item>
        )}
      />
    </Modal>
  );
}

export default ModalMaterials;
