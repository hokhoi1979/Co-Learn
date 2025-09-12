import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center animate-fadeIn">
        <div className="flex justify-center">
          <CheckCircleIcon className="w-24 h-24 text-[#12ad8c] animate-bounce" />
        </div>

        <h1 className="text-4xl font-extrabold text-gray-800 mt-6">
          Payment Successful!
        </h1>

        <p className="text-gray-600 mt-3 text-lg leading-relaxed">
          Thank you for purchasing the course 🎓. Your payment has been
          confirmed. Start learning today!
        </p>

        <div className="bg-green-50 border border-green-200 rounded-xl p-5 mt-6 text-left">
          <h2 className="font-semibold text-gray-800 mb-3">
            Chi tiết đơn hàng
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              <span className="font-medium">Khóa học:</span> Lập trình ReactJS
              từ A-Z
            </li>
            <li>
              <span className="font-medium">Mã đơn hàng:</span> #123456
            </li>
            <li>
              <span className="font-medium">Số tiền:</span> 1,200,000 VND
            </li>
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <button
            onClick={() => navigate("/parent/purchased")}
            className="w-full bg-[#12ad8c] hover:bg-[#12ad8c] cursor-pointer text-white font-semibold py-3 px-5 rounded-xl shadow-lg transition-all duration-300"
          >
            View Course
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-700 font-medium py-3 px-5 rounded-xl transition-all duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
