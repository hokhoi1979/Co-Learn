import React from "react";
import { Table, Tag, Card, Button } from "antd";
import CarouselTeacher from "../../Teacher/ComponentTeacher/CarouselTeacher";
import { payments } from "../../../shared";

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
