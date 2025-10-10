import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const VerifyEmailModal = ({ open, onClose, email }) => {
  if (!open) return null;

  const handleOk = () => {
    onClose("OK");
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white w-[400px] rounded-2xl shadow-xl overflow-hidden text-center p-6"
      >
        <div className="flex justify-center mb-5">
          <div className="bg-green-100 rounded-full p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-green-600 w-12 h-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Đăng ký thành công!
        </h2>

        <p className="text-gray-600 text-sm mb-5">
          Chúng tôi đã gửi email xác nhận đến{" "}
          <span className="font-semibold bg-gray-100 px-2 py-0.5 rounded">
            {email || "user@example.com"}
          </span>
          . <br />
          Vui lòng kiểm tra hộp thư để hoàn tất quá trình đăng ký.
        </p>

        <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 flex gap-3 text-left mb-6">
          <div className="mt-1">
            <Mail className="text-purple-500 w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800">
              Kiểm tra email của bạn
            </p>
            <p className="text-xs text-gray-600">
              Nhấp vào liên kết xác minh trong email để kích hoạt tài khoản. Nếu
              không thấy email, hãy kiểm tra thư mục spam hoặc thư rác.
            </p>
          </div>
        </div>

        <div className="flex gap-3 justify-center">
          <button
            onClick={handleOk}
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2 rounded-xl transition-all"
          >
            Đã hiểu
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default VerifyEmailModal;
