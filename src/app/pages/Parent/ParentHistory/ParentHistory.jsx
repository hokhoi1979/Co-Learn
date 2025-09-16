import React from "react";
import { Table, Tag, Card, Button } from "antd";
import CarouselTeacher from "../../Teacher/ComponentTeacher/CarouselTeacher";

const payments = [
  {
    number: "1",
    nameCourse: "Math Basics",
    teacher: "Mr. Smith",
    date: "Dec 15, 2024",
    description: "Monthly Payout",
    amount: 2450,
  },
  {
    number: "2",
    nameCourse: "English Grammar",
    teacher: "Ms. Johnson",
    date: "Dec 10, 2024",
    description: "Course Sales",
    amount: 890,
  },
  {
    number: "3",
    nameCourse: "Science Fundamentals",
    teacher: "Dr. Lee",
    date: "Dec 5, 2024",
    description: "Bonus Payment",
    amount: 150,
  },
  {
    number: "4",
    nameCourse: "History World",
    teacher: "Mr. Brown",
    date: "Nov 30, 2024",
    description: "Monthly Payout",
    amount: 3200,
  },
  {
    number: "5",
    nameCourse: "Coding for Kids",
    teacher: "Ms. Taylor",
    date: "Nov 25, 2024",
    description: "Course Sales",
    amount: 1240,
  },
  {
    number: "6",
    nameCourse: "Math Basics",
    teacher: "Mr. Smith",
    date: "Nov 20, 2024",
    description: "Course Sales",
    amount: 980,
  },
  {
    number: "7",
    nameCourse: "English Grammar",
    teacher: "Ms. Johnson",
    date: "Nov 15, 2024",
    description: "Bonus Payment",
    amount: 200,
  },
  {
    number: "8",
    nameCourse: "Science Fundamentals",
    teacher: "Dr. Lee",
    date: "Nov 10, 2024",
    description: "Monthly Payout",
    amount: 2700,
  },
  {
    number: "9",
    nameCourse: "History World",
    teacher: "Mr. Brown",
    date: "Nov 5, 2024",
    description: "Course Sales",
    amount: 1150,
  },
  {
    number: "10",
    nameCourse: "Coding for Kids",
    teacher: "Ms. Taylor",
    date: "Oct 30, 2024",
    description: "Course Sales",
    amount: 1340,
  },
  {
    number: "11",
    nameCourse: "Math Basics",
    teacher: "Mr. Smith",
    date: "Oct 25, 2024",
    description: "Monthly Payout",
    amount: 2500,
  },
  {
    number: "12",
    nameCourse: "English Grammar",
    teacher: "Ms. Johnson",
    date: "Oct 20, 2024",
    description: "Course Sales",
    amount: 920,
  },
  {
    number: "13",
    nameCourse: "Science Fundamentals",
    teacher: "Dr. Lee",
    date: "Oct 15, 2024",
    description: "Bonus Payment",
    amount: 180,
  },
  {
    number: "14",
    nameCourse: "History World",
    teacher: "Mr. Brown",
    date: "Oct 10, 2024",
    description: "Course Sales",
    amount: 1080,
  },
  {
    number: "15",
    nameCourse: "Coding for Kids",
    teacher: "Ms. Taylor",
    date: "Oct 5, 2024",
    description: "Monthly Payout",
    amount: 3000,
  },
];

function ParentHistory() {
  const columns = [
    {
      title: "Number",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Name Course",
      dataIndex: "nameCourse",
      key: "nameCourse",
    },
    {
      title: "Teacher",
      dataIndex: "teacher",
      key: "teacher",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },

    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (value) => <b>${value.toLocaleString()}</b>,
    },
  ];

  return (
    <div className="w-full min-h-screen p-6 bg-gradient-to-b from-[#F0F6F6] to-[#DBFBFD]">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome Parent!</h1>
        <p className="text-gray-500">
          Manage and update your children’s learning process
        </p>
        <h1 className="flex justify-center text-5xl text-gray-600 mt-5">
          Payment history
        </h1>

        <div className="w-[90%] m-auto mt-5">
          <Card bordered={false} className="shadow-lg rounded-2xl">
            <div className="flex justify-between items-center mb-4">
              <div></div>
              <Button
                type="primary"
                style={{
                  borderRadius: 8,
                  background: "linear-gradient(to right, #06b6d4, #3b82f6)",
                }}
              >
                Export
              </Button>
            </div>

            <Table
              columns={columns}
              dataSource={payments.map((p, i) => ({ ...p, key: i }))}
              pagination={{
                pageSize: 5,
                showSizeChanger: true,
                pageSizeOptions: [5, 10, 20],
              }}
            />
          </Card>
        </div>
      </div>

      <CarouselTeacher />
    </div>
  );
}

export default ParentHistory;
