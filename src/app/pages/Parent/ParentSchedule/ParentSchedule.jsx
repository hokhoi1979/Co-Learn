import React, { useState } from "react";
import Summary from "../ComponentParent/Summary";
import { Button, Tag } from "antd";
import { Timer, User } from "lucide-react";
import { Icon } from "@iconify/react";
import { MdOutlineRoom } from "react-icons/md";
import CarouselTeacher from "../../Teacher/ComponentTeacher/CarouselTeacher";
import ModalBooking from "../ComponentParent/ModalBooking";
import DeleteVideoModal from "../../Teacher/ComponentTeacher/DeleteVideoModal";

function ParentSchedule() {
  const [openBooking, setOpenBooking] = useState(false);
  const [editData, setEditData] = useState(null);

  // 👉 Quản lý schedule động
  const [courseSchedule, setCourseSchedule] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });

  const days = Object.keys(courseSchedule);
  const [activeDay, setActiveDay] = useState("Monday");

  // 👉 State cho delete
  const [deleteData, setDeleteData] = useState(null); // {index, day, title}
  const [loadingDelete, setLoadingDelete] = useState(false);

  const handleSubmit = (values) => {
    const newCourse = {
      title: values.subject,
      time: values.time,
      day: values.day,
      learn: "Online",
      level: "Beginner",
      students: 1,
      status: editData ? values.status || "Pending" : "Pending",
      child: values.childName,
      parent: values.parentName,
      phone: values.phone,
      email: values.email,
    };

    if (editData) {
      setCourseSchedule((prev) => {
        const updated = { ...prev };
        if (values.day !== editData.day) {
          updated[editData.day] = updated[editData.day].filter(
            (_, idx) => idx !== editData.index
          );
          updated[values.day] = [...updated[values.day], newCourse];
        } else {
          updated[values.day] = updated[values.day].map((course, idx) =>
            idx === editData.index ? newCourse : course
          );
        }
        return updated;
      });
      setEditData(null);
    } else {
      setCourseSchedule((prev) => ({
        ...prev,
        [values.day]: [...prev[values.day], newCourse],
      }));
    }

    setOpenBooking(false);
  };

  const handleEdit = (course, index, day) => {
    setEditData({ ...course, index, day });
    setOpenBooking(true);
  };

  // 👉 Mở modal delete
  const handleDelete = (index, day, title) => {
    setDeleteData({ index, day, title });
  };

  // 👉 Xác nhận delete
  const confirmDelete = () => {
    if (!deleteData) return;
    setLoadingDelete(true);
    setTimeout(() => {
      setCourseSchedule((prev) => ({
        ...prev,
        [deleteData.day]: prev[deleteData.day].filter(
          (_, idx) => idx !== deleteData.index
        ),
      }));
      setLoadingDelete(false);
      setDeleteData(null);
    }, 600); // fake loading
  };

  return (
    <div className="w-full min-h-screen p-6 bg-gradient-to-b from-[#F0F6F6] to-[#DBFBFD]">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome Parent!</h1>
        <p className="text-gray-500">
          Manage and update your children’s learning process
        </p>
      </div>
      <Summary />

      <div className="flex justify-end py-5 px-15">
        <Button
          onClick={() => {
            setEditData(null);
            setOpenBooking(true);
          }}
          className="!bg-[#3fcba8] !text-white shadow-md hover:!bg-[#17ae88]"
        >
          + Booking Now
        </Button>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-5 w-[90%] mx-auto mb-10 mt-5">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-bold">Children Schedule</h1>
        </div>

        <div className="flex gap-2 mb-6 flex-wrap">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-4 py-2 rounded-md transition ${
                activeDay === day
                  ? "bg-gradient-to-r from-[#4A90E4] to-[#2497A8] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {courseSchedule[activeDay].length > 0 ? (
            courseSchedule[activeDay].map((course, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between bg-[#F9FCFC] border rounded-xl shadow-sm p-4 hover:bg-[#f1f9f9] transition"
              >
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#4A90E4] to-[#2497A8] shadow-md">
                    <Icon
                      color="white"
                      icon="mdi:book-open-page-variant"
                      width="28"
                      height="28"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">{course.title}</h2>
                    <div className="flex gap-4 text-gray-600 text-sm mt-1">
                      <span className="flex items-center gap-1">
                        <Timer size={18} /> {course.time}
                      </span>
                      <span className="flex items-center gap-1 text-red-500">
                        <MdOutlineRoom /> {course.learn}
                      </span>
                    </div>
                    <div className="flex gap-2 text-sm text-gray-600">
                      <User size={18} /> Child: {course.child} (Parent:{" "}
                      {course.parent})
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <Tag color="orange" className="text-sm px-4 py-1 mb-2">
                    {course.status}
                  </Tag>
                  <div className="flex gap-2  mt-3">
                    <Button
                      size="small"
                      className="!bg-[#6f9fed] hover:!bg-[#4781de] !text-white !w-[70px]"
                      onClick={() => handleEdit(course, idx, activeDay)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="small"
                      className="!bg-[#ea8576] hover:!bg-[#e95a44] !text-white !w-[70px]"
                      danger
                      onClick={() => handleDelete(idx, activeDay, course.title)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">
              No classes scheduled for {activeDay}.
            </p>
          )}
        </div>
      </div>

      <CarouselTeacher />

      <ModalBooking
        open={openBooking}
        cancel={() => {
          setOpenBooking(false);
          setEditData(null);
        }}
        onSubmit={handleSubmit}
        initialValues={editData}
      />

      <DeleteVideoModal
        open={!!deleteData}
        onCancel={() => setDeleteData(null)}
        onConfirm={confirmDelete}
        loading={loadingDelete}
        courseTitle={deleteData?.title}
      />
    </div>
  );
}

export default ParentSchedule;
