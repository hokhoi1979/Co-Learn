import React, { useEffect, useState } from "react";
import { Progress, Tag, Button, Modal } from "antd";
import { ClockCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react";
import { MdOutlineRoom } from "react-icons/md";
import CarouselTeacher from "../ComponentTeacher/CarouselTeacher";
import { useDispatch, useSelector } from "react-redux";
import { getProfileTeacherId } from "../../../redux/teacher/profileTeacher/getProfileId/getProfileIdSlice";
import { getBookingTeacher } from "../../../redux/teacher/booking/getBookingTeacher/getBookingTeacherSlice";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import isoWeek from "dayjs/plugin/isoWeek";
import { Check, CircleAlert, X } from "lucide-react";
import { confirmBookingTeacher } from "../../../redux/teacher/statusBooking/confirmBooking/confirmBookingSlice";
import { declineBookingTeacher } from "../../../redux/teacher/statusBooking/declineBooking/declineBookingSlice";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Ho_Chi_Minh");
dayjs.extend(isoWeek);

function TeacherBooking() {
  const [activeDay, setActiveDay] = useState(dayjs().format("dddd"));
  const [user, setUser] = useState(null);
  const [weekOffset, setWeekOffset] = useState(0);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [idBooking, setIdBooking] = useState(null);
  const { profileTeacherId = {} } = useSelector(
    (state) => state.getProfileTeacherId
  );
  const { getBooking_Teacher = {} } = useSelector(
    (state) => state.getBookingTeacher
  );

  const { statusConfirm, loading } = useSelector(
    (state) => state.confirmBookingTeacher
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    const parse = JSON.parse(auth);
    if (parse) setUser(parse);
  }, []);

  useEffect(() => {
    if (user?.userId) {
      dispatch(getProfileTeacherId(user?.userId));
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (profileTeacherId?.teacherId) {
      dispatch(getBookingTeacher(profileTeacherId?.teacherId));
    }
  }, [dispatch, profileTeacherId]);

  const startOfWeek = dayjs().add(weekOffset, "week").startOf("isoWeek");
  const endOfWeek = dayjs().add(weekOffset, "week").endOf("isoWeek");
  const currentWeek = startOfWeek.isoWeek();
  const currentYear = startOfWeek.year();

  const schedule = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  };

  getBooking_Teacher?.items?.forEach((booking) => {
    const start = dayjs.utc(booking?.requestedStartTime);
    const end = dayjs.utc(booking?.requestedEndTime);

    if (start.isoWeek() === currentWeek && start.year() === currentYear) {
      const dayName = start.format("dddd");
      if (schedule[dayName]) {
        schedule[dayName].push({
          title: `Lesson with ${booking.studentName}`,
          time: `${start.format("HH:mm")} - ${end.format("HH:mm")}`,
          date: start.format("YYYY-MM-DD"),
          status: booking.bookingStatusName,
          student: booking.studentName,
          studentEmail: booking.studentEmail,
          notes: booking.notes,
          bookingId: booking.bookingId,
        });
      }
    }
  });

  Object.keys(schedule).forEach((day) => {
    schedule[day].sort((a, b) => a.time.localeCompare(b.time));
  });

  const days = Object.keys(schedule);

  const handleConfirm = async (id) => {
    if (!id) return;

    await dispatch(
      confirmBookingTeacher({
        id,
        teacherId: profileTeacherId?.teacherId,
      })
    );

    setTimeout(async () => {
      if (profileTeacherId?.teacherId) {
        await dispatch(getBookingTeacher(profileTeacherId?.teacherId));
      }
      setOpen(false);
    }, 4500);
  };

  const handleDecline = async (id) => {
    if (!id) return;

    await dispatch(declineBookingTeacher(id));
    await new Promise((r) => setTimeout(r, 50));
    if (profileTeacherId?.teacherId) {
      await dispatch(getBookingTeacher(profileTeacherId?.teacherId));
    }

    setOpen(false);
  };

  return (
    <div className="w-full min-h-screen p-5 bg-gradient-to-b from-[#F0F6F6] to-[#DBFBFD]">
      <h1 className="text-2xl font-bold mb-2">
        Welcome back, {profileTeacherId?.teacherName || "Teacher"}!
      </h1>
      <p className="text-gray-500 mb-6">
        Manage your teaching schedule and class bookings
      </p>
      <h1 className="text-4xl font-bold mb-2 flex justify-center">
        View your Booking
      </h1>
      <div className="bg-white rounded-2xl shadow-md p-5 w-[90%] mx-auto mb-10 mt-5">
        <div className="flex justify-evenly items-center mb-4">
          <div className="w-[20%]"></div>
          <h2 className="w-[40%] flex justify-center font-semibold text-lg">
            Week of {startOfWeek.format("MMM DD")} -{" "}
            {endOfWeek.format("MMM DD, YYYY")}
          </h2>
          <div className="flex w-[20%] gap-2.5 ">
            <Button
              className="!w-[120px]"
              onClick={() => setWeekOffset((prev) => prev - 1)}
            >
              ← Previous Week
            </Button>
            <Button
              className="!w-[120px]"
              onClick={() => setWeekOffset((prev) => prev + 1)}
            >
              Next Week →
            </Button>
          </div>
        </div>

        <div className="flex gap-2 mb-6 flex-wrap">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-4 py-2 rounded-md transition cursor-pointer ${
                activeDay === day
                  ? "bg-[#20ba93] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {schedule[activeDay]?.length > 0 ? (
            schedule[activeDay].map((course, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between bg-[#F9FCFC] border rounded-xl shadow-sm p-4 hover:bg-[#f1f9f9] transition"
              >
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#20ba93] shadow-md">
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
                        <ClockCircleOutlined /> {course.time}
                      </span>
                      <span className="flex items-center gap-1 text-red-500">
                        <MdOutlineRoom /> Online
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      Student: {course.student} ({course.studentEmail})
                    </div>
                    {course.notes && (
                      <p className="text-gray-500 text-sm mt-1">
                        Notes: {course.notes}
                      </p>
                    )}
                    <p className="text-gray-400 text-xs mt-1">
                      Date: {course.date}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <Tag
                    color={
                      course.status === "Confirmed"
                        ? "green"
                        : course.status === "Pending"
                        ? "blue"
                        : "red"
                    }
                    className="text-sm px-4 py-1 mb-2"
                  >
                    {course.status}
                  </Tag>

                  {course.status === "Pending" && (
                    <div className="flex gap-2 mt-3">
                      <Button
                        size="small"
                        className="!bg-[#3fdaa6] hover:!bg-[#1bd094] !text-white !w-[70px] !rounded-[8px] !h-8"
                        onClick={() => {
                          setOpen(true);
                          setStatus("Accept");
                          setIdBooking(course?.bookingId);
                          console.log("ID", course?.bookingId);
                        }}
                      >
                        Accept
                      </Button>
                      <Button
                        size="small"
                        className="!bg-[#ee5757] hover:!bg-red-700 !text-white !w-[70px] !rounded-[8px] !h-8"
                        danger
                        onClick={() => {
                          setOpen(true);
                          setStatus("Decline");
                          setIdBooking(course?.bookingId);
                        }}
                      >
                        Decline
                      </Button>
                    </div>
                  )}
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
      <Modal open={open} onCancel={() => setOpen(false)} footer={null}>
        <div className="">
          <div className="flex justify-center items-center gap-3 mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 32 32"
            >
              <g fill="none">
                <path
                  fill="#dee137"
                  d="m14.839 5.668l-12.66 21.93c-.51.89.13 2.01 1.16 2.01h25.32c1.03 0 1.67-1.11 1.16-2.01l-12.66-21.93c-.52-.89-1.8-.89-2.32 0"
                  strokeWidth="1"
                  stroke="#dee137"
                />
                <path
                  fill="#fff"
                  d="M14.599 21.498a1.4 1.4 0 1 0 2.8-.01v-9.16c0-.77-.62-1.4-1.4-1.4c-.77 0-1.4.62-1.4 1.4zm2.8 3.98a1.4 1.4 0 1 1-2.8 0a1.4 1.4 0 0 1 2.8 0"
                  strokeWidth="1"
                  stroke="#fff"
                />
              </g>
            </svg>
            <h2 className="text-xl font-bold">Warning</h2>
          </div>
          <p className="flex justify-center text-gray-500 mb-4">
            Actions that cannot be undone
          </p>

          <p className="text-base flex gap-1.5">
            <span>Do you want to</span>
            <span
              className={`${
                status === "Accept" ? "text-[#1bd094]" : "text-red-600"
              }`}
            >
              '{status}'
            </span>
            ?
          </p>

          <div className="mt-3 p-2 border border-[#6ae9be] bg-[#c6f5e5] rounded text-[#12b680] text-sm flex items-center">
            <CircleAlert
              size={16}
              color="#12b680"
              className="mr-2"
              strokeWidth={1.75}
            />
            This action will be saved!
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              style={{ cursor: "pointer" }}
              className="px-3 py-1 rounded-2xl border border-gray-300 bg-white hover:bg-gray-100"
            >
              Cancel
            </button>

            {status === "Accept" ? (
              <button
                onClick={() => handleConfirm(idBooking)}
                disabled={loading} // 🔹 disable khi đang loading
                style={{ cursor: loading ? "not-allowed" : "pointer" }}
                className={`px-3 py-1 rounded-2xl text-white flex items-center gap-2 ${
                  loading
                    ? "bg-[#3fdaa6]/60"
                    : "bg-[#3fdaa6] hover:bg-[#1bd094]"
                }`}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    <span>Loading...</span>
                  </>
                ) : (
                  <>
                    <Check size={18} color="#ffffff" /> {status}
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={() => handleDecline(idBooking)}
                style={{ cursor: "pointer" }}
                className="px-3 py-1 rounded-2xl bg-[#ee5757] hover:bg-red-700 text-white flex items-center gap-2"
              >
                <X size={18} color="#ffffff" /> {status}
              </button>
            )}
          </div>
        </div>
      </Modal>
      <CarouselTeacher />
    </div>
  );
}

export default TeacherBooking;
