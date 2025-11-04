import React, { useEffect, useState, useMemo } from "react";
import { Table, Input, Select, Button, Tag, message } from "antd";
import { DownloadOutlined, FilterOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getEarning } from "../../../redux/report/getEarning/getEarningSlice";
import * as XLSX from "xlsx";

const { Search } = Input;
const { Option } = Select;

const PaymentAdmin = () => {
  const dispatch = useDispatch();
  const { earning } = useSelector((state) => state.getEarningData || {});

  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    dispatch(getEarning());
  }, [dispatch]);

  // === Flatten giao dịch: lưu thêm dateRaw để so sánh chính xác ===
  const transactions = useMemo(() => {
    return (
      earning?.teacherEarnings?.flatMap(
        (teacher) =>
          teacher.bookingBreakdown?.map((b) => {
            const dateRaw = b.bookingDate; // giữ nguyên gốc (ISO) để so sánh
            const formattedDate = dateRaw
              ? new Date(dateRaw).toLocaleString("vi-VN")
              : "";
            const amount = Number(b.amount || 0);

            return {
              id: `PAY-${b.bookingId}`,
              user: b.studentName || `User #${b.studentId}`,
              teacher: teacher.teacherName || "N/A",
              course: b.courseTitle || "N/A",
              amount,
              teacherShare: amount * 0.3,
              platformShare: amount * 0.7,
              status: (b.paymentStatus || "Success").toString(),
              date: formattedDate,
              dateRaw,
            };
          }) || []
      ) || []
    );
  }, [earning]);

  // === Grouped transactions (gộp theo teacher) - dùng dateRaw để lấy latest ===
  const groupedTransactions = useMemo(() => {
    const map = new Map();

    transactions.forEach((t) => {
      const key = t.teacher;
      if (!map.has(key)) {
        map.set(key, {
          teacher: t.teacher,
          totalAmount: t.amount,
          teacherShare: t.teacherShare,
          platformShare: t.platformShare,
          status: t.status,
          latestDate: t.date,
          latestDateRaw: t.dateRaw,
          id: t.id,
        });
      } else {
        const prev = map.get(key);
        prev.totalAmount += t.amount;
        prev.teacherShare += t.teacherShare;
        prev.platformShare += t.platformShare;

        if (
          t.dateRaw &&
          (!prev.latestDateRaw ||
            new Date(t.dateRaw) > new Date(prev.latestDateRaw))
        ) {
          prev.latestDateRaw = t.dateRaw;
          prev.latestDate = t.date;
          prev.status = t.status;
          prev.id = t.id;
        }
      }
    });

    return Array.from(map.values());
  }, [transactions]);

  const filteredTransactions = useMemo(() => {
    const search = (searchText || "").trim().toLowerCase();
    const filter = (statusFilter || "all").toLowerCase();

    return groupedTransactions.filter((t) => {
      const matchSearch =
        !search ||
        (t.teacher || "").toLowerCase().includes(search) ||
        (t.id || "").toLowerCase().includes(search);

      const matchStatus =
        filter === "all" || (t.status || "").toLowerCase() === filter;

      return matchSearch && matchStatus;
    });
  }, [groupedTransactions, searchText, statusFilter]);

  const teacherData = useMemo(() => {
    const map = new Map();

    transactions.forEach((t) => {
      const key = t.teacher;
      if (!map.has(key)) {
        map.set(key, {
          teacher: t.teacher,
          total: t.amount,
          teacherShare: t.teacherShare,
          platformShare: t.platformShare,
          transactions: 1,
          courses: new Set([t.course]),
        });
      } else {
        const prev = map.get(key);
        prev.total += t.amount;
        prev.teacherShare += t.teacherShare;
        prev.platformShare += t.platformShare;
        prev.transactions += 1;
        prev.courses.add(t.course);
      }
    });

    return Array.from(map.values()).map((item) => ({
      ...item,
      courses: item.courses.size,
    }));
  }, [transactions]);

  const columns = [
    { title: "Teacher", dataIndex: "teacher" },
    {
      title: "Total Amount",
      dataIndex: "totalAmount",
      render: (value) => `${Number(value || 0).toLocaleString("vi-VN")} đ`,
    },
    {
      title: "Teacher (30%)",
      dataIndex: "teacherShare",
      render: (value) => `${Number(value || 0).toLocaleString("vi-VN")} đ`,
    },
    {
      title: "Platform (70%)",
      dataIndex: "platformShare",
      render: (value) => `${Number(value || 0).toLocaleString("vi-VN")} đ`,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => {
        const s = (status || "").toLowerCase();
        const color =
          s === "success" ? "green" : s === "pending" ? "orange" : "red";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Latest Transaction Date",
      dataIndex: "latestDate",
    },
  ];

  const teacherColumns = [
    { title: "Teacher", dataIndex: "teacher" },
    {
      title: "Total Revenue",
      dataIndex: "total",
      render: (v) => `${Number(v || 0).toLocaleString("vi-VN")} đ`,
    },
    {
      title: "Teacher Share (30%)",
      dataIndex: "teacherShare",
      render: (v) => (
        <span className="text-green-600">
          {Number(v || 0).toLocaleString("vi-VN")} đ
        </span>
      ),
    },
    {
      title: "Platform Share (70%)",
      dataIndex: "platformShare",
      render: (v) => (
        <span className="text-blue-600">
          {Number(v || 0).toLocaleString("vi-VN")} đ
        </span>
      ),
    },
    { title: "Transactions", dataIndex: "transactions" },
    { title: "Courses", dataIndex: "courses" },
  ];

  // === Export Excel: xuất filteredTransactions (gộp theo teacher) ===
  const handleExportExcel = () => {
    if (!filteredTransactions || filteredTransactions.length === 0) {
      message.warning("Không có dữ liệu để xuất.");
      return;
    }

    const exportData = filteredTransactions.map((r) => ({
      Teacher: r.teacher,
      "Total Amount": r.totalAmount,
      "Teacher (30%)": r.teacherShare,
      "Platform (70%)": r.platformShare,
      Status: r.status,
      "Latest Transaction Date": r.latestDate,
    }));

    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Transactions_by_Teacher");
    XLSX.writeFile(
      wb,
      `transactions_by_teacher_${new Date().toISOString().slice(0, 10)}.xlsx`
    );
    message.success("Xuất file Excel thành công.");
  };

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
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            onClick={handleExportExcel}
          >
            Export Excel
          </Button>
        </div>
      </div>

      {/* Cards (safe access with fallback) */}
      <div className="grid grid-cols-4 gap-4">
        <div className="rounded-xl p-5 bg-white">
          <p className="text-gray-500 text-sm">Total Teachers</p>
          <h2 className="text-2xl font-semibold mt-1 text-gray-800">
            {Number(earning?.totalTeachers || 0)}
          </h2>
        </div>

        <div className="rounded-xl p-5 bg-white">
          <p className="text-gray-500 text-sm">Total Teachers Earning</p>
          <h2 className="text-2xl font-semibold mt-1 text-gray-800">
            {Number(earning?.totalTeachersEarning || 0).toLocaleString("vi-VN")}{" "}
            đ
          </h2>
        </div>

        <div className="rounded-xl p-5 bg-white">
          <p className="text-gray-500 text-sm">Total Teachers Revenue</p>
          <h2 className="text-2xl font-semibold mt-1 text-gray-800">
            {Number(earning?.totalTeachersRevenue || 0).toLocaleString("vi-VN")}{" "}
            đ
          </h2>
        </div>

        <div className="rounded-xl p-5 bg-white">
          <p className="text-gray-500 text-sm">Total System Earnings</p>
          <h2 className="text-2xl font-semibold mt-1 text-gray-800">
            {Number(earning?.totalSystemEarnings || 0).toLocaleString("vi-VN")}{" "}
            đ
          </h2>
        </div>
      </div>

      {/* Teacher revenue summary */}
      <div className="bg-white rounded-xl border shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-1 text-black-600">
          Teacher Revenue Sharing
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Aggregated totals by teacher (30% teacher / 70% platform)
        </p>

        <Table
          columns={teacherColumns}
          dataSource={teacherData}
          pagination={false}
          rowKey="teacher"
        />
      </div>

      {/* Recent Transactions (gộp theo teacher) */}
      <div className="bg-white rounded-xl border shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-1">Recent Transactions</h2>
        <p className="text-sm text-gray-500 mb-4">
          All user payments (grouped by teacher)
        </p>

        <div className="flex justify-between mb-4 gap-2">
          <Search
            placeholder="Search by teacher or id..."
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
          rowKey="teacher"
          pagination={{ pageSize: 6 }}
        />
      </div>
    </div>
  );
};

export default PaymentAdmin;
