import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
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
import { paymentsTeacher, topCourses } from "../../../shared";

const incomeData = [
  { month: "Jul", income: 2800 },
  { month: "Aug", income: 3200 },
  { month: "Sep", income: 2900 },
  { month: "Oct", income: 3800 },
  { month: "Nov", income: 3400 },
  { month: "Dec", income: 3680 },
];

function TeacherIncome() {
  return (
    <>
      <div className=" w-full h-auto p-5 bg-gradient-to-b from-[#F0F6F6] to-[#DBFBFD]">
        <h1 className="text-2xl font-bold">Welcome back! Miss Ha </h1>
        <p className="text-gray-400">
          Manage your classes and track your teaching progress
        </p>
        <div className="bg-[#1b9096]"></div>
        <Earning />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2 p-15">
          <Card className="md:col-span-2 p-5 shadow-lg rounded-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Monthly Income</h2>
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded-md bg-green-100 text-green-600 font-semibold">
                  6M
                </button>
                <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-600">
                  1Y
                </button>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={incomeData} barSize={50} margin={{ top: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis hide />
                <Tooltip
                  formatter={(value) => `$${value}`}
                  cursor={{ fill: "rgba(59,130,246,0.1)" }}
                  contentStyle={{
                    borderRadius: "10px",
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
                    padding: "5px 10px",
                  }}
                />
                <Bar dataKey="income" radius={[12, 12, 0, 0]}>
                  {incomeData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill="url(#colorGradient)"
                      className="transition-all duration-300 hover:opacity-80"
                    />
                  ))}
                </Bar>
                <defs>
                  <linearGradient
                    id="colorGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1b9096" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-5 shadow-lg rounded-2xl">
            <h2 className="text-xl font-bold mb-4">Top Earning Courses</h2>
            <div className="flex flex-col gap-4">
              {topCourses.map((course, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-3 h-3 rounded-full ${course.color}`}
                    ></span>
                    <div>
                      <p className="font-medium">{course.name}</p>
                      <p className="text-gray-500 text-sm">
                        {course.students} students
                      </p>
                    </div>
                  </div>
                  <p className="font-bold">${course.income.toLocaleString()}</p>
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
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 3,
                    background: "linear-gradient(to right, #06b6d4, #3b82f6)",
                    textTransform: "none",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#fff"
                      d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"
                      stroke-width="0.5"
                      stroke="#fff"
                    />
                  </svg>
                  Export
                </Button>
              </Box>

              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b>Date</b>
                    </TableCell>
                    <TableCell>
                      <b>Description</b>
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paymentsTeacher.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.description}</TableCell>
                      <TableCell>
                        <Typography fontWeight="bold">
                          ${row.amount.toLocaleString()}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        {row.status === "Completed" ? (
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
                      <TableCell>{row.method}</TableCell>
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
