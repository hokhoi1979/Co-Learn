// utils/uploadFile.js
import axios from "axios";

const getResourceType = (file) => {
  const ext = file.name.split(".").pop().toLowerCase();

  if (["jpg", "jpeg", "png", "gif", "webp"].includes(ext)) return "image";
  if (["mp4", "mov", "avi", "mkv"].includes(ext)) return "video";

  // pdf, docx, pptx, xlsx... => raw
  return "raw";
};

export const uploadFile = async (file) => {
  const resourceType = getResourceType(file);

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "course"); // preset bạn đã tạo trên Cloudinary

  const res = await axios.post(
    `https://api.cloudinary.com/v1_1/dcg8qoxmr/${resourceType}/upload`,
    formData
  );

  return {
    url: res.data.secure_url, // link public của Cloudinary
    format: res.data.format,
    resourceType,
  };
};
