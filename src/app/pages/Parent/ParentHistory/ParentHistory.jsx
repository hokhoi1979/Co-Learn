import React, { useEffect, useState } from "react";
import { Table, Card, Button } from "antd";
import CarouselTeacher from "../../Teacher/ComponentTeacher/CarouselTeacher";
import { useDispatch, useSelector } from "react-redux";
import { getTransactionById } from "../../../redux/transaction/getTransactionById/getTransactionByIdSlice";
import api from "../../../config/apiConfig";

const columns = [
  { title: "Number", dataIndex: "number", key: "number" },
  // { title: "Course Name", dataIndex: "nameCourse", key: "nameCourse" },
  // { title: "Teacher", dataIndex: "teacher", key: "teacher" },
  { title: "Date", dataIndex: "date", key: "date" },
  { title: "Description", dataIndex: "description", key: "description" },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (value) => <b>{value.toLocaleString("vi-VN")}₫</b>,
  },
];

function ParentHistory() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [tableData, setTableData] = useState([]);

  const { transactionId } = useSelector(
    (state) => state.getTransactionByIdData
  );

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (auth) setUser(auth);
  }, []);

  useEffect(() => {
    if (user?.userId) {
      dispatch(getTransactionById(user?.userId));
    }
  }, [dispatch, user?.userId]);

  useEffect(() => {
    async function mergeData() {
      if (!transactionId || transactionId.length === 0) return;

      const mergedData = await Promise.all(
        transactionId.map(async (item, index) => {
          const enrollId = item?.paymentDetail?.enrollmentId;
          let enrollment = null;

          if (enrollId) {
            const res = await api.get(`/enrollments/${enrollId}`);
            enrollment = res?.data || null;
          }

          return {
            key: index,
            number: index + 1,
            nameCourse: enrollment?.course?.title || "N/A",
            teacher:
              enrollment?.course?.teacherName ||
              enrollment?.course?.teacher?.fullName ||
              "N/A",
            date: new Date(item?.createdAt).toLocaleString("vi-VN"),
            description:
              JSON.parse(item?.gatewayResponse)?.description ||
              "No description",
            amount: item?.paymentDetail?.amount || 0,
          };
        })
      );

      setTableData(mergedData);
    }

    mergeData();
  }, [transactionId]);

  console.log("TRRR", transactionId);

  return (
    <div className="w-full min-h-screen p-6 bg-gradient-to-b from-[#F0F6F6] to-[#DBFBFD]">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome Parent!</h1>
        <p className="text-gray-500">
          Manage and update your children’s learning process
        </p>
        <h1 className="text-5xl flex justify-center text-[#057b5f] mb-8 font-medium">
          Payment history
        </h1>

        <div className="w-[90%] m-auto mt-5">
          <Card bordered={false} className="shadow-lg rounded-2xl">
            <Table
              columns={columns}
              dataSource={tableData}
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
