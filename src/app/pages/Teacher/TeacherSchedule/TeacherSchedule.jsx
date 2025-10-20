import React, { useEffect, useState } from "react";
import { Tag, Button, Form, Input } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react";
import { MdOutlineRoom } from "react-icons/md";
import CarouselTeacher from "../ComponentTeacher/CarouselTeacher";
import { useDispatch, useSelector } from "react-redux";
import { getProfileTeacherId } from "../../../redux/teacher/profileTeacher/getProfileId/getProfileIdSlice";
import { useForm } from "antd/es/form/Form";
import { getScheduleTeacher } from "../../../redux/teacher/scheduleTeacher/getScheduleTeacherSlice";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import isoWeek from "dayjs/plugin/isoWeek";
import { putMeetingSchedule } from "../../../redux/teacher/meeting/meetingScheduleSlice";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Ho_Chi_Minh");
dayjs.extend(isoWeek);

function TeacherSchedule() {
  const [activeDay, setActiveDay] = useState(dayjs().format("dddd"));
  const [user, setUser] = useState(null);
  const [weekOffset, setWeekOffset] = useState(0);
  const [form] = useForm();

  const dispatch = useDispatch();
  const { profileTeacherId = {} } = useSelector(
    (state) => state.getProfileTeacherId
  );
  const { scheduleTeacher = {} } = useSelector(
    (state) => state.getScheduleTeacherData
  );

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
      dispatch(getScheduleTeacher(profileTeacherId?.teacherId));
    }
  }, [dispatch, profileTeacherId]);

  console.log("SCHEDULE", scheduleTeacher);

  // ✅ Xử lý dữ liệu schedule từ API
  const scheduleData = scheduleTeacher?.value || [];

  // ✅ Chia lịch theo ngày
  const scheduleByDay = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  };

  scheduleData.forEach((item) => {
    const start = dayjs(item.startTime);
    const end = dayjs(item.endTime);
    const dayName = start.format("dddd");

    if (scheduleByDay[dayName]) {
      scheduleByDay[dayName].push({
        id: item.scheduleId,
        title: item.courseTitle || "Private Lesson",
        student: item.studentName,
        teacher: item.teacherName,
        time: `${start.format("HH:mm")} - ${end.format("HH:mm")}`,
        date: start.format("YYYY-MM-DD"),
        status: item.status,
        meetingLink: item.meetingLink,
        scheduleId: item.scheduleId,
      });
    }
  });

  Object.keys(scheduleByDay).forEach((day) => {
    scheduleByDay[day].sort((a, b) => a.time.localeCompare(b.time));
  });

  const startOfWeek = dayjs().add(weekOffset, "week").startOf("isoWeek");
  const endOfWeek = dayjs().add(weekOffset, "week").endOf("isoWeek");
  const days = Object.keys(scheduleByDay);

  const handleMeeting = async (id) => {
    try {
      const values = await form.validateFields();
      const meetingValue = values[`meeting-${id}`];

      if (meetingValue) {
        await dispatch(putMeetingSchedule({ id, body: meetingValue }));
        // Sau khi update thành công thì set lại giá trị vừa nhập
        form.setFieldValue(`meeting-${id}`);
      }
    } catch (error) {
      console.error("Update meeting failed:", error);
    }
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
        View your Schedule
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
          {scheduleByDay[activeDay]?.length > 0 ? (
            scheduleByDay[activeDay].map((item) => (
              <div
                key={item.id}
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
                    <h2 className="text-lg font-semibold">
                      {item.title} with {item.student}
                    </h2>
                    <div className="flex gap-4 text-gray-600 text-sm mt-1">
                      <span className="flex items-center gap-1">
                        <ClockCircleOutlined /> {item.time}
                      </span>
                      <span className="flex items-center gap-1 text-red-500">
                        <MdOutlineRoom /> Online
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs mt-1">
                      Date: {item.date}
                    </p>
                    <span className="flex items-center gap-1 mb-3">
                      MeetingURL:{" "}
                      <a href={item.meetingLink} className="hover:underline">
                        {item.meetingLink}
                      </a>
                    </span>

                    <Form
                      form={form}
                      layout="inline"
                      className="flex items-center gap-1 mt-2"
                    >
                      <Form.Item
                        name={`meeting-${item.scheduleId}`}
                        className="mb-0 flex-1"
                        initialValue={item.meetingLink || ""}
                        rules={[
                          {
                            required: true,
                            message: "Please enter the meeting URL!",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Enter meeting link..."
                          className="text-gray-700 text-sm rounded-md border-gray-300 focus:border-[#0ba2c8] focus:ring-[#0ba2c8] w-[260px]"
                        />
                      </Form.Item>

                      <Button
                        type="secondary"
                        onClick={() => {
                          handleMeeting(item.scheduleId);
                          console.log("ID", item.scheduleId);
                        }}
                        className="!bg-[#20ba93] hover:!bg-[#179977] !text-white !font-semibold px-5 rounded-md"
                      >
                        Update
                      </Button>
                    </Form>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <Tag
                    color={
                      item.status === "Scheduled"
                        ? "blue"
                        : item.status === "Completed"
                        ? "green"
                        : "red"
                    }
                    className="text-sm px-4 py-1 mb-2"
                  >
                    {item.status}
                  </Tag>
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
    </div>
  );
}

export default TeacherSchedule;
