import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";
import {
  Table,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Box,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
} from "@mui/material";
import Earning from "../ComponentTeacher/Earning";
import { useDispatch, useSelector } from "react-redux";
import { getEarningId } from "../../../redux/report/getEarningById/getEarningByIdSlice";
import { getProfileTeacherId } from "../../../redux/teacher/profileTeacher/getProfileId/getProfileIdSlice";

function TeacherIncome() {
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);

  const { earningId } = useSelector((state) => state.getEarningIdData);
  const { profileTeacherId } = useSelector(
    (state) => state.getProfileTeacherId
  );

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    const parse = JSON.parse(auth);
    if (parse) {
      setUser(parse);
    }
  }, []);

  useEffect(() => {
    if (user?.userId) {
      dispatch(getProfileTeacherId(user.userId));
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (profileTeacherId?.teacherId) {
      dispatch(getEarningId(profileTeacherId.teacherId));
    }
  }, [profileTeacherId?.teacherId, dispatch]);

  // Thu nhập theo ngày (Daily Income Chart)
  const incomeData = React.useMemo(() => {
    if (!earningId?.bookingBreakdown) return [];

    const dayMap = {};

    earningId.bookingBreakdown.forEach((b) => {
      const date = new Date(b.bookingDate);
      const day = date.toLocaleDateString("en-GB"); // dd/mm/yyyy

      if (!dayMap[day]) dayMap[day] = 0;
      dayMap[day] += b.amount;
    });

    // Chuyển về mảng để bảng đọc
    return Object.keys(dayMap).map((d) => ({
      date: d,
      income: dayMap[d],
    }));
  }, [earningId]);

  return (
    <>
      <div className="w-full h-auto p-5 bg-gradient-to-b from-[#F0F6F6] to-[#DBFBFD]">
        <h1 className="text-2xl font-bold">
          Welcome back! Miss {profileTeacherId?.teacherName}
        </h1>
        <p className="text-gray-400">
          Manage your classes and track your teaching progress
        </p>
        {/* Earnings Summary */}
        <div className="w-[90%] p-3 m-auto mt-5 h-45 rounded-2xl bg-white">
          <div className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 16 16"
            >
              <path
                fill="#16a551"
                d="M12.32 8a3 3 0 0 0-2-.7H5.63A1.59 1.59 0 0 1 4 5.69a2 2 0 0 1 0-.25a1.59 1.59 0 0 1 1.63-1.33h4.62a1.59 1.59 0 0 1 1.57 1.33h1.5a3.08 3.08 0 0 0-3.07-2.83H8.67V.31H7.42v2.3H5.63a3.08 3.08 0 0 0-3.07 2.83a2 2 0 0 0 0 .25a3.07 3.07 0 0 0 3.07 3.07h4.74A1.59 1.59 0 0 1 12 10.35a2 2 0 0 1 0 .34a1.59 1.59 0 0 1-1.55 1.24h-4.7a1.59 1.59 0 0 1-1.55-1.24H2.69a3.08 3.08 0 0 0 3.06 2.73h1.67v2.27h1.25v-2.27h1.7a3.08 3.08 0 0 0 3.06-2.73v-.34A3.06 3.06 0 0 0 12.32 8"
              />
            </svg>

            <h1 className=" text-xl">Earnings Summary</h1>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-3">
            <div className="rounded-xl p-6 text-center shadow-md bg-gradient-to-b from-[#e9fff7] to-[#f3fffb]">
              <p className="text-2xl font-bold">
                {earningId?.totalEarnings?.toLocaleString()}đ
              </p>
              <p className="text-gray-600">Total Earning</p>
            </div>

            <div className="rounded-xl p-6 text-center shadow-md bg-gradient-to-b from-[#eaf0ff] to-[#f8f9ff]">
              <p className="text-2xl font-bold">
                {earningId?.totalFromBookings?.toLocaleString()}đ
              </p>
              <p className="text-gray-600">Total From Bookings</p>
            </div>

            <div className="rounded-xl p-6 text-center shadow-md bg-gradient-to-b from-[#ffeef5] to-[#fff7fa]">
              <p className="text-2xl font-bold">
                {earningId?.totalFromEnrollments?.toLocaleString()}đ
              </p>
              <p className="text-gray-600">Total From Enrollments</p>
            </div>

            <div className="rounded-xl p-6 text-center shadow-md bg-gradient-to-b from-[#fff3e6] to-[#fff9f3]">
              <p className="text-2xl font-bold">
                {earningId?.totalRevenue?.toLocaleString()}đ
              </p>
              <p className="text-gray-600">Total Revenue</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2 p-15">
          <Card className="md:col-span-2 p-5 shadow-lg rounded-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Monthly Income</h2>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={incomeData}
                margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="incomeGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop
                      offset="100%"
                      stopColor="#3b82f6"
                      stopOpacity={0.05}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="4 4"
                  vertical={false}
                  stroke="#e5e7eb"
                />

                <XAxis
                  dataKey="date"
                  tick={{ fill: "#6b7280", fontSize: 13 }}
                  tickLine={false}
                  axisLine={false}
                />

                <YAxis
                  tick={{ fill: "#6b7280", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => value.toLocaleString() + "đ"}
                />

                <Tooltip
                  formatter={(value) => `${value.toLocaleString()} đ`}
                  contentStyle={{
                    borderRadius: 10,
                    border: "1px solid #d1d5db",
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="income"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  fill="url(#incomeGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-5 shadow-lg rounded-2xl">
            <h2 className="text-xl font-bold mb-4">Top Earning Courses</h2>
            <div className="flex flex-col gap-4">
              {earningId?.courseBreakdown?.map((course, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    <div>
                      <p className="font-medium">
                        {idx + 1}/ {course.courseTitle}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {course.totalBookings} bookings
                      </p>
                    </div>
                  </div>
                  <p className="font-bold">
                    {course.courseRevenue.toLocaleString()} đ
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="w-[90%] m-auto">
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  Payment History
                </Typography>
              </Box>

              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b>Booking ID</b>
                    </TableCell>
                    <TableCell>
                      <b>Date</b>
                    </TableCell>
                    <TableCell>
                      <b>Student</b>
                    </TableCell>
                    <TableCell>
                      <b>Amount</b>
                    </TableCell>
                    <TableCell>
                      <b>Status</b>
                    </TableCell>
                    <TableCell>
                      <b>Method</b>
                    </TableCell>
                    <TableCell>
                      <b>Note</b>
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {earningId?.bookingBreakdown?.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.bookingId}</TableCell>
                      <TableCell>
                        {new Date(row.bookingDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell>{row.studentName}</TableCell>
                      <TableCell>
                        <Typography fontWeight="bold">
                          {row.amount.toLocaleString()} đ
                        </Typography>
                      </TableCell>

                      <TableCell>
                        {row.paymentStatus === "Success" ? (
                          <Chip
                            label="Completed"
                            size="small"
                            sx={{
                              bgcolor: "#d1fae5",
                              color: "#059669",
                              fontWeight: "bold",
                            }}
                          />
                        ) : (
                          <Chip
                            label="Pending"
                            size="small"
                            sx={{
                              bgcolor: "#fef3c7",
                              color: "#d97706",
                              fontWeight: "bold",
                            }}
                          />
                        )}
                      </TableCell>

                      <TableCell>Online</TableCell>
                      <TableCell>{row.note || "-"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default TeacherIncome;
