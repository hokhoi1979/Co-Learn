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

  const totalUser = Array.isArray(allUser?.value?.items)
    ? allUser.value.items.length
    : 0;

  const totalTeacher = Array.isArray(allUser?.value?.items)
    ? allUser.value.items.filter((item) => item.primaryRoleId === 3).length
    : 0;

  const totalCourse = Array.isArray(course?.value?.items)
    ? course.value.items.length
    : 0;

  const totalMoney = Array.isArray(payment?.value)
    ? payment.value.reduce((acc, cur) => acc + (cur.amount || 0), 0)
    : 0;

  // 🔹 Monthly revenue (group by month from payment.date)
  const monthlyRevenue = useMemo(() => {
    if (!Array.isArray(payment?.value)) return [];

    const revenueMap = {};

    payment.value.forEach((p) => {
      const date = new Date(p.createdAt);
      if (!isNaN(date)) {
        const month = `${date.getMonth() + 1}/${date.getFullYear()}`; // e.g., "10/2025"
        revenueMap[month] = (revenueMap[month] || 0) + (p.amount || 0);
      }
    });

    // convert to recharts format
    return Object.entries(revenueMap)
      .map(([month, revenue]) => ({ month, revenue }))
      .sort((a, b) => {
        const [ma, ya] = a.month.split("/").map(Number);
        const [mb, yb] = b.month.split("/").map(Number);
        return ya === yb ? ma - mb : ya - yb;
      });
  }, [payment]);

  // 🔹 Top performing courses (fake ranking by random students count or if you have enrollments, map them)
  const topCourses = useMemo(() => {
    if (!Array.isArray(course?.value?.items)) return [];

    // Nếu sau này có API enrollment thì có thể tính theo số lượng học viên
    return course.value.items
      .map((c) => ({
        name: c.title,
        students: Math.floor(Math.random() * 50) + 10, // demo tạm
      }))
      .sort((a, b) => b.students - a.students)
      .slice(0, 5);
  }, [course]);

  return (
    <div className="w-full min-h-screen p-6 bg-gray-100">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome Admin!</h1>
        <p className="text-gray-500">Manage and update your system!</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
          <div className="bg-green-100 p-3 rounded-full">
            <FaUsers className="text-3xl text-green-600" />
          </div>
          <div>
            <p className="text-gray-500">Total Users</p>
            <h2 className="text-2xl font-bold text-green-600">{totalUser}</h2>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <FaChalkboardTeacher className="text-3xl text-blue-600" />
          </div>
          <div>
            <p className="text-gray-500">Active Teachers</p>
            <h2 className="text-2xl font-bold text-blue-600">{totalTeacher}</h2>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
          <div className="bg-purple-100 p-3 rounded-full">
            <FaBook className="text-3xl text-purple-600" />
          </div>
          <div>
            <p className="text-gray-500">Total Courses</p>
            <h2 className="text-2xl font-bold text-purple-600">
              {totalCourse}
            </h2>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
          <div className="bg-yellow-100 p-3 rounded-full">
            <FaDollarSign className="text-3xl text-yellow-500" />
          </div>
          <div>
            <p className="text-gray-500">Total Revenue</p>
            <h2 className="text-2xl font-bold text-yellow-600">
              {totalMoney.toLocaleString("vi-VN")} ₫
            </h2>
            <p className="text-xs text-gray-400">+18% from last month</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Monthly Revenue */}
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="text-lg font-semibold mb-4">Monthly Revenue</h3>
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
        </div>

        {/* Top Performing Courses */}
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="text-lg font-semibold mb-4">Top Performing Courses</h3>
          <div className="space-y-4">
            {topCourses.map((course, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center border-b pb-2 last:border-none"
              >
                <div>
                  <p className="font-medium text-gray-800">{course.name}</p>
                  <p className="text-sm text-gray-500">
                    {course.students} students
                  </p>
                </div>
                <span className="text-green-600 font-bold">
                  {Math.round((course.students / topCourses[0].students) * 100)}
                  %
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Teacher vs Student growth chart */}
      <div className="bg-white rounded-xl p-6 shadow">
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={[
                { month: "Jan", teachers: 10, students: 100 },
                { month: "Feb", teachers: 12, students: 130 },
                { month: "Mar", teachers: 14, students: 160 },
              ]}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="teachers"
                stroke="#3b82f6"
                strokeWidth={3}
                name="Teachers"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="students"
                stroke="#f59e0b"
                strokeWidth={3}
                name="Students"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default DashboardAdmin;
