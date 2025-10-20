import { useEffect, useState } from "react";
import { Button, Tag } from "antd";
import { Timer, User } from "lucide-react";
import { Icon } from "@iconify/react";
import { MdOutlineRoom } from "react-icons/md";
import CarouselTeacher from "../../Teacher/ComponentTeacher/CarouselTeacher";
import ModalBooking from "../ComponentParent/ModalBooking";
import DeleteVideoModal from "../../Teacher/ComponentTeacher/DeleteVideoModal";
import { useDispatch, useSelector } from "react-redux";
import { getProfileTeacher } from "../../../redux/teacher/profileTeacher/getProfileTeacher/getProfileTeacherSlice";
import CarouselBooking from "../ComponentParent/CarouselBooking";
import { getProfileParentId } from "../../../redux/parent/profileParentId/getProfileParentIdSlice";
import { getBookingStudent } from "../../../redux/parent/booking/getBookingStudent/getBookingStudentSlice";
import { deleteBooking } from "../../../redux/parent/booking/deleteBooking/deleteBookingSlice";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import { toast } from "react-toastify";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import ModalPayment from "../ComponentParent/ModalPayment";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Ho_Chi_Minh");
dayjs.extend(isoWeek);
dayjs.extend(utc);

function ParentSchedule() {
  const [user, setUser] = useState(null);
  const [teacher, setTeacher] = useState(null);
  const [openBooking, setOpenBooking] = useState(false);
  const [openPayment, setOpenPayment] = useState(false);
  const [editData, setEditData] = useState(null);
  const [activeDay, setActiveDay] = useState(dayjs().format("dddd"));
  const [choosePayment, setChoosePayment] = useState([]);
  const [deleteData, setDeleteData] = useState(null);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [weekOffset, setWeekOffset] = useState(0);
  const dispatch = useDispatch();

  const { profileTeacher = [] } = useSelector(
    (state) => state.getProfileTeacher
  );

  const { profileParentId = [] } = useSelector(
    (state) => state.getProfileParentId
  );
  const { getBooking_Student = {} } = useSelector(
    (state) => state.getBookingStudent
  );

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    const parse = JSON.parse(auth);
    if (parse) setUser(parse);
  }, []);

  useEffect(() => {
    dispatch(getProfileTeacher());
  }, [dispatch]);

  useEffect(() => {
    if (!user?.userId) return;
    dispatch(getProfileParentId(user.userId));
  }, [dispatch, user?.userId]);

  useEffect(() => {
    const studentId = profileParentId?.children?.[0]?.studentId;
    if (studentId) {
      dispatch(getBookingStudent(studentId));
    }
  }, [dispatch, profileParentId]);

  console.log("BOOO", getBooking_Student);

  const startOfWeek = dayjs().add(weekOffset, "week").startOf("isoWeek");
  const endOfWeek = dayjs().add(weekOffset, "week").endOf("isoWeek");
  const currentWeek = dayjs().add(weekOffset, "week").isoWeek();
  const currentYear = dayjs().add(weekOffset, "week").year();

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
          learn: "Online",
          child: booking.studentName,
          parent: profileParentId?.parentName || "Parent",
          status: booking.bookingStatusName,
          notes: booking.notes,
          teacherEmail: booking.teacherEmail,
          bookingId: booking.bookingId,
          date: start.format("YYYY-MM-DD"),
          startTime: start.format("HH:mm:ss"),
          durationMinutes,
          isPaid: booking.isPaid,
        });
      }
    }
  });

  Object.keys(courseSchedule).forEach((day) => {
    courseSchedule[day].sort((a, b) => a.time.localeCompare(b.time));
  });

  const days = Object.keys(courseSchedule);

  const handleDelete = async (id) => {
    setDeleteData({ id });
    try {
      await dispatch(deleteBooking(id)).unwrap();
      setDeleteData(null);
    } catch (error) {
      console.error(error);
    }
  };

  const confirmDelete = () => {
    setLoadingDelete(true);
    const studentId = profileParentId?.children?.[0]?.studentId;
    if (studentId) {
      dispatch(getBookingStudent(studentId));
    }
    setTimeout(() => {
      setLoadingDelete(false);
      setDeleteData(null);
    }, 50);
    toast.success("Delete successful!");
  };

  const handlePayment = () => {
    setOpenPayment(true);
  };

  return (
    <div className="w-full min-h-screen p-6 bg-gradient-to-b from-[#F0F6F6] to-[#DBFBFD]">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome Parent!</h1>
        <p className="text-gray-500">
          Manage and update your children’s learning process
        </p>
      </div>

      <h1 className="flex justify-center text-3xl ">Our Expert Teachers</h1>
      <p className="flex justify-center text-gray-500">
        Connect with qualified professionals and advance your learning journey
      </p>

      <div className="py-5">
        <CarouselBooking
          profileTeacher={profileTeacher}
          onBooking={(teacher) => {
            setEditData(null);
            setOpenBooking(true);
            setTeacher(teacher);
          }}
        />
      </div>

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

        <h1 className="text-2xl font-bold mb-5">Children Schedule</h1>

        <div className="flex gap-2 mb-6 flex-wrap">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-4 py-2 rounded-md transition cursor-pointer ${
                activeDay === day
                  ? "bg-[#12ad8c] text-white shadow-md"
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
              <div
                key={idx}
                className="flex items-center justify-between bg-[#F9FCFC] border rounded-xl shadow-sm p-4 hover:bg-[#f1f9f9] transition"
              >
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#12ad8c] shadow-md">
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
                        {course.endTime}
                      </span>
                      <span className="flex items-center gap-1 text-red-500">
                        <MdOutlineRoom /> {course.learn}
                      </span>
                    </div>
                    <div className="flex gap-2 text-sm text-gray-600">
                      <User size={18} /> Child: {course.child} (Parent:{" "}
                      {course.parent})
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
                  {course.status === "Pending" ? (
                    <div className="flex gap-2 mt-3">
                      <Button
                        size="small"
                        className="!bg-[#ee5757] hover:!bg-red-700 !text-white !w-[70px] !rounded-[8px] !h-8"
                        danger
                        onClick={() => {
                          handleDelete(course?.bookingId, activeDay);
                        }}
                      >
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {course.status === "Confirmed" && course.isPaid === false && (
                    <>
                      <button
                        onClick={() => {
                          handlePayment();
                          console.log("PAYMEN", course);
                          setChoosePayment(course);
                        }}
                        className="mt-4 px-4 py-1 bg-[#12ad8c] text-white rounded-md cursor-pointer hover:bg-[#24c5a2]"
                      >
                        Payment
                      </button>
                    </>
                  )}

                  {course.status === "Confirmed" && course.isPaid === true && (
                    <>
                      <Button
                        className="mt-5"
                        icon={<CheckCircleOutlined style={{ color: "#fff" }} />}
                        style={{
                          background:
                            "linear-gradient(90deg, #12ad8c, #24c5a2)",
                          border: "none",
                          borderRadius: "9999px",
                          color: "#fff",
                          fontWeight: "600",
                          boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
                          transition: "0.3s",
                        }}
                      >
                        {"Paid"}
                      </Button>
                    </>
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

      <CarouselTeacher />

      <ModalBooking
        open={openBooking}
        cancel={() => {
          setOpenBooking(false);
          setEditData(null);
        }}
        idTeacher={teacher}
        idStudent={profileParentId}
        initialValues={editData}
      />

      <DeleteVideoModal
        open={!!deleteData}
        onCancel={() => setDeleteData(null)}
        onConfirm={confirmDelete}
        loading={loadingDelete}
        courseTitle={deleteData?.title}
      />

      <ModalPayment
        open={openPayment}
        onClose={() => setOpenPayment(false)}
        dataPayment={choosePayment}
        userIdParent={profileParentId}
      />
    </div>
  );
}

export default ParentSchedule;
