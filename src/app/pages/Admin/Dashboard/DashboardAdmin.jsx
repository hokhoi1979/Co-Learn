import {
  FaUsers,
  FaChalkboardTeacher,
  FaBook,
  FaDollarSign,
} from "react-icons/fa";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { getAllUser } from "../../../redux/admin/user/getAllUser/getAllUserSlice";
import { getCourse } from "../../../redux/teacher/courseTeacher/getCourse/getCourseSlice";
import { getPayment } from "../../../redux/payment/getPayment/getPaymentSlice";

function DashboardAdmin() {
  const dispatch = useDispatch();
  const { allUser } = useSelector((state) => state.getAllUserData);
  const { course } = useSelector((state) => state.getCourseData);
  const { payment } = useSelector((state) => state.getPaymentData);

  useEffect(() => {
    dispatch(getAllUser());
    dispatch(getCourse());
    dispatch(getPayment());
  }, [dispatch]);

  const totalUser = allUser?.value?.items?.length || 0;
  const totalTeacher =
    allUser?.value?.items?.filter((item) => item.primaryRoleId === 3).length ||
    0;
  const totalCourse = course?.value?.items?.length || 0;
  const totalMoney = Array.isArray(payment?.value)
    ? payment.value.reduce((acc, cur) => acc + (cur.amount || 0), 0)
    : 0;

  const monthlyRevenue = useMemo(() => {
    if (!Array.isArray(payment?.value)) return [];

    const revenueMap = {};

    payment.value.forEach((p) => {
      const date = new Date(p.createdAt);
      if (!isNaN(date)) {
        const month = `${date.getMonth() + 1}/${date.getFullYear()}`;
        revenueMap[month] = (revenueMap[month] || 0) + (p.amount || 0);
      }
    });

    return Object.entries(revenueMap)
      .map(([month, revenue]) => ({ month, revenue }))
      .sort((a, b) => {
        const [ma, ya] = a.month.split("/").map(Number);
        const [mb, yb] = b.month.split("/").map(Number);
        return ya === yb ? ma - mb : ya - yb;
      });
  }, [payment]);

  // const topCourses = useMemo(() => {
  //   if (!Array.isArray(payment?.value) || !Array.isArray(course?.value?.items))
  //     return [];

  //   const revenueByCourse = {};

  //   payment.value.forEach((p) => {
  //     const enrollment = p.enrollment || {};
  //     const courseId = enrollment.courseId || p.courseId;
  //     if (courseId) {
  //       revenueByCourse[courseId] =
  //         (revenueByCourse[courseId] || 0) + (p.amount || 0);
  //     }
  //   });

  //   return course.value.items
  //     .map((c) => ({
  //       name: c.title,
  //       revenue: revenueByCourse[c.courseId] || 0,
  //     }))
  //     .filter((c) => c.revenue > 0)
  //     .sort((a, b) => b.revenue - a.revenue)
  //     .slice(0, 5);
  // }, [course, payment]);

  const topCourse = course?.value?.items?.slice(0, 5);

  const teacherStudentData = useMemo(() => {
    if (!Array.isArray(allUser?.value?.items)) return [];

    const dataMap = {};

    allUser.value.items.forEach((u) => {
      const date = new Date(u.createdAt);
      if (!isNaN(date)) {
        const month = `${date.getMonth() + 1}/${date.getFullYear()}`;
        if (!dataMap[month])
          dataMap[month] = { month, teachers: 0, students: 0 };

        if (u.primaryRoleId === 3) dataMap[month].teachers += 1;
        if (u.primaryRoleId === 2) dataMap[month].students += 1;
      }
    });

    return Object.values(dataMap).sort((a, b) => {
      const [ma, ya] = a.month.split("/").map(Number);
      const [mb, yb] = b.month.split("/").map(Number);
      return ya === yb ? ma - mb : ya - yb;
    });
  }, [allUser]);

  console.log("first", course);

  return (
    <div className="w-full min-h-screen p-6 bg-gray-100">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome Admin!</h1>
        <p className="text-gray-500">Manage and update your system!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <DashboardCard
          icon={<FaUsers className="text-3xl text-green-600" />}
          bg="bg-green-100"
          label="Total Users"
          value={totalUser}
        />
        <DashboardCard
          icon={<FaChalkboardTeacher className="text-3xl text-blue-600" />}
          bg="bg-blue-100"
          label="Active Teachers"
          value={totalTeacher}
        />
        <DashboardCard
          icon={<FaBook className="text-3xl text-purple-600" />}
          bg="bg-purple-100"
          label="Total Courses"
          value={totalCourse}
        />
        <DashboardCard
          icon={<FaDollarSign className="text-3xl text-yellow-500" />}
          bg="bg-yellow-100"
          label="Total Revenue"
          value={`${totalMoney.toLocaleString("vi-VN")} ₫`}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard title="Monthly Revenue">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis dataKey="month" />
              <YAxis
                tickFormatter={(value) => value.toLocaleString("vi-VN") + "₫"}
              />
              <Tooltip
                formatter={(value) => value.toLocaleString("vi-VN") + "₫"}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#16a34a"
                strokeWidth={3}
                name="Doanh thu"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Top Performing Courses">
          {course?.value?.items.length > 0 ? (
            <div className="space-y-4">
              {topCourse.map((course, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center border-b pb-2 last:border-none"
                >
                  <p className="font-medium text-gray-800">
                    {idx + 1}. {course.title}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 italic">No data yet</p>
          )}
        </ChartCard>
      </div>

      <ChartCard title="Teachers vs Students by Month">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={teacherStudentData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="teachers"
              stroke="#3b82f6"
              strokeWidth={3}
              name="Teachers"
            />
            <Line
              type="monotone"
              dataKey="students"
              stroke="#f59e0b"
              strokeWidth={3}
              name="Students"
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}

const DashboardCard = ({ icon, bg, label, value }) => (
  <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
    <div className={`${bg} p-3 rounded-full`}>{icon}</div>
    <div>
      <p className="text-gray-500">{label}</p>
      <h2 className="text-2xl font-bold text-gray-800">{value}</h2>
    </div>
  </div>
);

const ChartCard = ({ title, children }) => (
  <div className="bg-white rounded-xl p-6 shadow">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    {children}
  </div>
);

export default DashboardAdmin;
