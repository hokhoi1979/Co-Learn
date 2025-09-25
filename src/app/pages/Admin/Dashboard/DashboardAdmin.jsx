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
import { coursesData, revenueData, teacherStudentData } from "../../../shared";

function DashboardAdmin() {
  return (
    <div className="w-full min-h-screen p-6 bg-gray-100">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome Admin!</h1>
        <p className="text-gray-500">Manage and update your system!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
          <div className="bg-green-100 p-3 rounded-full">
            <FaUsers className="text-3xl text-green-600" />
          </div>
          <div>
            <p className="text-gray-500">Total Users</p>
            <h2 className="text-2xl font-bold text-green-600">2,847</h2>
            <p className="text-xs text-gray-400">+12% from last month</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <FaChalkboardTeacher className="text-3xl text-blue-600" />
          </div>
          <div>
            <p className="text-gray-500">Active Teachers</p>
            <h2 className="text-2xl font-bold text-blue-600">156</h2>
            <p className="text-xs text-gray-400">+8% from last month</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
          <div className="bg-purple-100 p-3 rounded-full">
            <FaBook className="text-3xl text-purple-600" />
          </div>
          <div>
            <p className="text-gray-500">Total Courses</p>
            <h2 className="text-2xl font-bold text-purple-600">89</h2>
            <p className="text-xs text-gray-400">+3 new courses</p>
          </div>
        </div>

        {/* Monthly Revenue */}
        <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4">
          <div className="bg-yellow-100 p-3 rounded-full">
            <FaDollarSign className="text-3xl text-yellow-500" />
          </div>
          <div>
            <p className="text-gray-500">Monthly Revenue</p>
            <h2 className="text-2xl font-bold text-yellow-600">$45,231</h2>
            <p className="text-xs text-gray-400">+18% from last month</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="text-lg font-semibold mb-4">Monthly Revenue</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `$${value}`} />
              <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#16a34a"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="text-lg font-semibold mb-4">Top Performing Courses</h3>
          <div className="space-y-4">
            {coursesData.map((course, idx) => (
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
                  {Math.round((course.students / 400) * 100)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow">
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={teacherStudentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" />

              <YAxis
                yAxisId="left"
                domain={[0, "dataMax + 20"]}
                label={{
                  value: "Teachers",
                  angle: -90,
                  position: "insideLeft",
                }}
              />

              <YAxis
                yAxisId="right"
                orientation="right"
                domain={[0, "dataMax + 50"]}
                label={{
                  value: "Students",
                  angle: -90,
                  position: "insideRight",
                }}
              />

              <Tooltip />
              <Legend />

              <Line
                yAxisId="left"
                type="monotone"
                dataKey="teachers"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                name="Teachers"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="students"
                stroke="#f59e0b"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
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
