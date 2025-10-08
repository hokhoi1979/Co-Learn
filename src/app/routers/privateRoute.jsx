import React from "react";
import { useSelector } from "react-redux";
import { Button } from "antd";
import { LockOutlined, WarningOutlined } from "@ant-design/icons";

const PrivateRoute = ({ children, role }) => {
  const loginState = useSelector((state) => state.loginReducer);
  let user = loginState?.user || null;

  if (!user) {
    const parse = localStorage.getItem("auth");
    if (parse) {
      user = JSON.parse(parse);
    }
  }

  const ErrorPage = ({ icon, title, description, buttonText, onClick }) => (
    <div className="flex flex-col justify-center items-center h-[80vh] text-center">
      <div className="p-8 rounded-2xl shadow-lg bg-white max-w-md w-full border border-gray-200">
        <div className="flex justify-center mb-6 text-primary text-6xl">
          {icon}
        </div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h1>
        <p className="text-gray-500 mb-6 leading-relaxed">{description}</p>
        <Button
          type="primary"
          size="large"
          onClick={onClick}
          className="rounded-lg px-8"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );

  if (!user) {
    return (
      <ErrorPage
        icon={<LockOutlined />}
        title="Chưa đăng nhập"
        description="Vui lòng đăng nhập để tiếp tục sử dụng hệ thống học tập của bạn."
        buttonText="Đăng nhập ngay"
        onClick={() => (window.location.href = "/login")}
      />
    );
  }

  if (role && String(user.role) !== String(role)) {
    return (
      <ErrorPage
        icon={<WarningOutlined />}
        title="Không có quyền truy cập"
        description="Tài khoản của bạn không được phép truy cập trang này. 
        Hãy quay lại trang phù hợp với vai trò của bạn."
        buttonText="Quay lại"
        onClick={() => window.history.back()}
      />
    );
  }

  return children;
};

export default PrivateRoute;
