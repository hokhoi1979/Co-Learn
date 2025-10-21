import React, { useEffect, useState } from "react";
import { Table, Input, Select, Button, Tag } from "antd";
import {
  DownloadOutlined,
  FilterOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getPayment } from "../../../redux/payment/getPayment/getPaymentSlice";

const { Search } = Input;
const { Option } = Select;

const PaymentAdmin = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const { payment } = useSelector((state) => state.getPaymentData);
  useEffect(() => {
    dispatch(getPayment());
  }, [dispatch]);

  console.log("first", payment);

  const transactions = [
    {
      id: "TX1001",
      user: "John Doe",
      teacher: "Prof. Smith",
      course: "Advanced React",
      amount: 120,
      teacherShare: 36,
      platformShare: 84,
      status: "Success",
      date: "2025-10-08 14:32",
    },
    {
      id: "TX1002",
      user: "Sarah Lee",
      teacher: "Dr. Johnson",
      course: "Python Basics",
      amount: 80,
      teacherShare: 24,
      platformShare: 56,
      status: "Pending",
      date: "2025-10-08 13:15",
    },
    {
      id: "TX1003",
      user: "Michael Chan",
      teacher: "Prof. Smith",
      course: "Full Stack Dev",
      amount: 200,
      teacherShare: 60,
      platformShare: 140,
      status: "Failed",
      date: "2025-10-08 12:45",
    },
    {
      id: "TX1004",
      user: "Emma Watson",
      teacher: "Dr. Williams",
      course: "UI/UX Design",
      amount: 150,
      teacherShare: 45,
      platformShare: 105,
      status: "Success",
      date: "2025-10-08 11:20",
    },
    {
      id: "TX1005",
      user: "David Kim",
      teacher: "Prof. Brown",
      course: "Data Science",
      amount: 95,
      teacherShare: 28.5,
      platformShare: 66.5,
      status: "Success",
      date: "2025-10-08 10:05",
    },
    {
      id: "TX1006",
      user: "Lisa Anderson",
      teacher: "Dr. Johnson",
      course: "Machine Learning",
      amount: 175,
      teacherShare: 52.5,
      platformShare: 122.5,
      status: "Success",
      date: "2025-10-08 09:30",
    },
  ];

  const columns = [
    { title: "Transaction ID", dataIndex: "id" },
    { title: "User", dataIndex: "user" },
    { title: "Teacher", dataIndex: "teacher" },
    { title: "Course", dataIndex: "course" },
    {
      title: "Amount",
      dataIndex: "amount",
      render: (value) => `$${value}`,
    },
    {
      title: "Teacher (30%)",
      dataIndex: "teacherShare",
      render: (value) => `$${value}`,
    },
    {
      title: "Platform (70%)",
      dataIndex: "platformShare",
      render: (value) => `$${value}`,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => {
        let color =
          status === "Success"
            ? "green"
            : status === "Pending"
            ? "orange"
            : "red";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    { title: "Date", dataIndex: "date" },
  ];

  const teacherData = [
    {
      teacher: "Prof. Smith",
      total: 1250,
      teacherShare: 375,
      platformShare: 875,
      transactions: 18,
      courses: 3,
    },
    {
      teacher: "Dr. Johnson",
      total: 980,
      teacherShare: 294,
      platformShare: 686,
      transactions: 15,
      courses: 2,
    },
    {
      teacher: "Dr. Williams",
      total: 850,
      teacherShare: 255,
      platformShare: 595,
      transactions: 12,
      courses: 2,
    },
    {
      teacher: "Prof. Brown",
      total: 720,
      teacherShare: 216,
      platformShare: 504,
      transactions: 10,
      courses: 1,
    },
  ];

  return (
    <div className="p-8 bg-[#ebebeb] min-h-screen space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Payment Dashboard
          </h1>
          <p className="text-gray-500">
            Monitor transactions and revenue sharing
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button icon={<FilterOutlined />}>Filter</Button>
          <Button type="primary" icon={<DownloadOutlined />}>
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="rounded-xl p-5 bg-[#ffff]">
          <p className="text-gray-500 text-sm">Total Revenue</p>
          <h2 className="text-2xl font-semibold mt-1">$8,950</h2>
          <p className="text-green-500 text-xs mt-1 flex items-center">
            <ArrowUpOutlined className="mr-1" /> +12.5% from last month
          </p>
        </div>

        <div className="rounded-xl p-5 bg-[#ffff] ">
          <p className="text-gray-500 text-sm">Transactions</p>
          <h2 className="text-2xl font-semibold mt-1">156</h2>
          <p className="text-green-500 text-xs mt-1 flex items-center">
            <ArrowUpOutlined className="mr-1" /> +8.2% from last month
          </p>
        </div>

        <div className="rounded-xl p-5 bg-[#fff] ">
          <p className="text-gray-500 text-sm">Pending</p>
          <h2 className="text-2xl font-semibold mt-1">12</h2>
          <p className="text-gray-500 text-xs mt-1">Awaiting confirmation</p>
        </div>

        <div className="rounded-xl p-5 bg-[#ffff] ">
          <p className="text-gray-500 text-sm">Failed</p>
          <h2 className="text-2xl font-semibold mt-1">8</h2>
          <p className="text-red-500 text-xs mt-1 flex items-center">
            <ArrowDownOutlined className="mr-1" /> -2.1% from last month
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl border shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-1 text-black-600">
          Teacher Revenue Sharing
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Commission breakdown by teacher (30% teacher / 70% platform)
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-5 rounded-xl bg-gradient-to-r from-green-50 to-white border">
            <p className="text-gray-500 text-sm">Total Teacher Share</p>
            <h2 className="text-2xl font-semibold text-green-600">$2,685</h2>
            <p className="text-gray-400 text-xs">30% of total revenue</p>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-white border">
            <p className="text-gray-500 text-sm">Platform Share</p>
            <h2 className="text-2xl font-semibold text-blue-600">$6,265</h2>
            <p className="text-gray-400 text-xs">70% of total revenue</p>
          </div>
        </div>

        <Table
          columns={[
            { title: "Teacher", dataIndex: "teacher" },
            {
              title: "Total Revenue",
              dataIndex: "total",
              render: (v) => `$${v}`,
            },
            {
              title: "Teacher Share (30%)",
              dataIndex: "teacherShare",
              render: (v) => <span className="text-green-600">${v}</span>,
            },
            {
              title: "Platform Share (70%)",
              dataIndex: "platformShare",
              render: (v) => <span className="text-blue-600">${v}</span>,
            },
            { title: "Transactions", dataIndex: "transactions" },
            { title: "Courses", dataIndex: "courses" },
          ]}
          dataSource={teacherData}
          pagination={false}
        />
      </div>

      <div className="bg-white rounded-xl border shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-1">Recent Transactions</h2>
        <p className="text-sm text-gray-500 mb-4">
          All user payments and transaction details
        </p>

        <div className="flex justify-between mb-4">
          <Search
            placeholder="Search by ID, user, or teacher..."
            onChange={(e) => setSearchText(e.target.value)}
            className="w-1/2"
          />
          <Select defaultValue="All Status" className="w-40">
            <Option value="all">All Status</Option>
            <Option value="success">Success</Option>
            <Option value="pending">Pending</Option>
            <Option value="failed">Failed</Option>
          </Select>
        </div>

        <Table
          columns={columns}
          dataSource={transactions}
          pagination={{ pageSize: 6 }}
        />
      </div>
    </div>
  );
};

export default PaymentAdmin;
