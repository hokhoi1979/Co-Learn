import React, { useEffect, useState } from "react";
import { Table, Input, Select, Button, Tag } from "antd";
import { DownloadOutlined, FilterOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getPayment } from "../../../redux/payment/getPayment/getPaymentSlice";

const { Search } = Input;
const { Option } = Select;

const PaymentAdmin = () => {
  const dispatch = useDispatch();
  const { payment } = useSelector((state) => state.getPaymentData);

  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    dispatch(getPayment());
  }, [dispatch]);

  const transactions =
    payment?.value?.map((item) => ({
      id: `PAY-${item.paymentId}`,
      user: item.payerName || `User #${item.payerUserId}`,
      teacher: item.teacherName || "-",
      course: item.courseTitle || item.bookingTitle || "N/A",
      amount: item.amount || 0,
      teacherShare: (item.amount || 0) * 0.3,
      platformShare: (item.amount || 0) * 0.7,
      status:
        item.statusName ||
        (item.isPaid ? "Success" : item.bookingId ? "Pending" : "Failed"),
      date: new Date(item.createdAt).toLocaleString("vi-VN"),
    })) || [];

  // ✅ Lọc theo search và status
  const filteredTransactions = transactions.filter((t) => {
    const search = searchText.toLowerCase();
    const matchSearch =
      t.id.toLowerCase().includes(search) ||
      t.user.toLowerCase().includes(search) ||
      t.teacher.toLowerCase().includes(search) ||
      t.course.toLowerCase().includes(search);

    const matchStatus =
      statusFilter === "all" || t.status.toLowerCase() === statusFilter;

    return matchSearch && matchStatus;
  });

  const columns = [
    { title: "Transaction ID", dataIndex: "id" },
    { title: "User", dataIndex: "user" },
    { title: "Teacher", dataIndex: "teacher" },
    { title: "Course", dataIndex: "course" },
    {
      title: "Amount",
      dataIndex: "amount",
      render: (value) => `${Number(value).toLocaleString("vi-VN")} đ`,
    },
    {
      title: "Teacher (30%)",
      dataIndex: "teacherShare",
      render: (value) => `${Number(value).toLocaleString("vi-VN")} đ`,
    },
    {
      title: "Platform (70%)",
      dataIndex: "platformShare",
      render: (value) => `${Number(value).toLocaleString("vi-VN")} đ`,
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

  const totalRevenue = transactions.reduce((sum, t) => sum + t.amount, 0);
  const totalTransactions = transactions.length;
  const totalPending = transactions.filter(
    (t) => t.status === "Pending"
  ).length;
  const totalFailed = transactions.filter((t) => t.status === "Failed").length;

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
      {/* Header */}
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
      {/* Summary cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="rounded-xl p-5 bg-white">
          <p className="text-gray-500 text-sm">Total Revenue</p>
          <h2 className="text-2xl font-semibold mt-1 text-gray-800">
            {Number(totalRevenue).toLocaleString("vi-VN")} đ
          </h2>
        </div>

        <div className="rounded-xl p-5 bg-white">
          <p className="text-gray-500 text-sm">Transactions</p>
          <h2 className="text-2xl font-semibold mt-1 text-gray-800">
            {totalTransactions}
          </h2>
        </div>

        <div className="rounded-xl p-5 bg-white">
          <p className="text-gray-500 text-sm">Pending</p>
          <h2 className="text-2xl font-semibold mt-1 text-gray-800">
            {totalPending}
          </h2>
        </div>

        <div className="rounded-xl p-5 bg-white">
          <p className="text-gray-500 text-sm">Failed</p>
          <h2 className="text-2xl font-semibold mt-1 text-gray-800">
            {totalFailed}
          </h2>
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
      ;{/* Transactions table */}
      <div className="bg-white rounded-xl border shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-1">Recent Transactions</h2>
        <p className="text-sm text-gray-500 mb-4">
          All user payments and transaction details
        </p>

        <div className="flex justify-between mb-4 gap-2">
          <Search
            placeholder="Search by ID, user, or teacher..."
            onChange={(e) => setSearchText(e.target.value)}
            className="w-1/2"
            allowClear
          />
          <Select
            value={statusFilter}
            className="w-40"
            onChange={(value) => setStatusFilter(value)}
          >
            <Option value="all">All Status</Option>
            <Option value="success">Success</Option>
            <Option value="pending">Pending</Option>
            <Option value="failed">Failed</Option>
          </Select>
        </div>

        <Table
          columns={columns}
          dataSource={filteredTransactions}
          rowKey="id"
          pagination={{ pageSize: 6 }}
        />
      </div>
    </div>
  );
};

export default PaymentAdmin;
