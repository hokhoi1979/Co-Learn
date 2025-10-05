import { useEffect, useState } from "react";
import { Button, Tag } from "antd";
import { Timer, User } from "lucide-react";
import { Icon } from "@iconify/react";
import { MdOutlineRoom } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { getBookingStudent } from "../../redux/parent/booking/getBookingStudent/getBookingStudentSlice";

dayjs.extend(isoWeek);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Ho_Chi_Minh");

function ScheduleKid() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { studentId } = location.state || {};
  const { getBooking_Student = {} } = useSelector(
    (state) => state.getBookingStudent
  );

  const [activeDay, setActiveDay] = useState(dayjs().format("dddd"));
  const [weekOffset, setWeekOffset] = useState(0);

  useEffect(() => {
    if (studentId) {
      dispatch(getBookingStudent(studentId));
    }
  }, [dispatch, studentId]);

  const startOfWeek = dayjs().add(weekOffset, "week").startOf("isoWeek");
  const endOfWeek = dayjs().add(weekOffset, "week").endOf("isoWeek");
  const currentWeek = startOfWeek.isoWeek();
  const currentYear = startOfWeek.year();

  const courseSchedule = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  };

  getBooking_Student?.items?.forEach((booking) => {
    const start = dayjs.utc(booking?.requestedStartTime);
    const end = dayjs.utc(booking?.requestedEndTime);

    if (start.isoWeek() === currentWeek && start.year() === currentYear) {
      const dayName = start.format("dddd");
      if (courseSchedule[dayName]) {
        const durationMinutes = end.diff(start, "minute");
        courseSchedule[dayName].push({
          title: `Lesson with ${booking.teacherName}`,
          time: `${start.format("HH:mm")} - ${end.format("HH:mm")}`,
          status: booking.bookingStatusName,
          notes: booking.notes,
          teacherEmail: booking.teacherEmail,
          bookingId: booking.bookingId,
          date: start.format("YYYY-MM-DD"),
          startTime: start.format("HH:mm:ss"),
          durationMinutes,
        });
      }
    }
  });

  Object.keys(courseSchedule).forEach((day) => {
    courseSchedule[day].sort((a, b) => a.time.localeCompare(b.time));
  });

  const days = Object.keys(courseSchedule);

  return (
    <>
      <div className="w-full h-auto p-6 bg-white rounded-2xl">
        <h1 className="flex justify-center pt-5 text-3xl text-black bg-clip-text">
          My Schedule
        </h1>

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
                  ? "bg-[#49d0d7] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {courseSchedule[activeDay]?.length > 0 ? (
            courseSchedule[activeDay].map((course, idx) => (
              <>
                {course.status === "Confirmed" && (
                  <div
                    key={idx}
                    className="flex items-center justify-between bg-[#F9FCFC] border rounded-xl shadow-sm p-4 hover:bg-[#f1f9f9] transition"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0ba2c8] shadow-md">
                        <Icon
                          color="white"
                          icon="mdi:book-open-page-variant"
                          width="28"
                          height="28"
                        />
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold">
                          {course.title}
                        </h2>
                        <div className="flex gap-4 text-gray-600 text-sm mt-1">
                          <span className="flex items-center gap-1">
                            <Timer size={18} /> {course.time}
                          </span>
                          <span className="flex items-center gap-1 text-red-500">
                            <MdOutlineRoom /> Online
                          </span>
                        </div>
                        {course.notes && (
                          <p className="text-gray-500 text-sm mt-1">
                            Notes: {course.notes}
                          </p>
                        )}
                        {course.teacherEmail && (
                          <p className="text-gray-500 text-sm">
                            Teacher: {course.teacherEmail}
                          </p>
                        )}
                      </div>
                    </div>

                    <Tag
                      color={
                        course.status === "Confirmed"
                          ? "green"
                          : course.status === "Pending"
                          ? "blue"
                          : "red"
                      }
                      className="text-sm px-4 py-1"
                    >
                      {course.status}
                    </Tag>
                  </div>
                )}
              </>
            ))
          ) : (
            <p className="text-gray-500">
              No classes scheduled for {activeDay}.
            </p>
          )}
        </div>
      </div>
      <br />
    </>
  );
}

export default ScheduleKid;
