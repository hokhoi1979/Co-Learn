import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import confetti from "canvas-confetti";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentCancel } from "../../redux/payment/getPaymentCancel/getPaymentCancelSlice";

export default function PaymentCancelled() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const queryParams = new URLSearchParams(location.search);
  const orderCode = queryParams.get("payment");

  const { paymentCancel = {} } = useSelector((state) => state.getPaymentCancel);
  const payment = paymentCancel?.value; // ✅ Sửa ở đây

  useEffect(() => {
    if (orderCode) dispatch(getPaymentCancel(orderCode));
  }, [orderCode, dispatch]);

  // Hiệu ứng confetti màu xám nhẹ
  useEffect(() => {
    const duration = 1500;
    const end = Date.now() + duration;
    (function frame() {
      confetti({
        particleCount: 5,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#bdbdbd", "#e0e0e0", "#9e9e9e"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }, []);

  return (
    <div className="flex items-center p-10 justify-center min-h-screen bg-gradient-to-br from-red-50 to-rose-100 px-4">
      <div className="bg-white rounded-3xl py-10 shadow-2xl px-10 max-w-lg w-full text-center animate-fadeIn">
        <div className="flex justify-center">
          <XCircleIcon className="w-24 h-24 text-red-500 animate-pulse" />
        </div>

        <h1 className="text-4xl font-extrabold text-gray-800 mt-4">
          Payment Cancelled
        </h1>

        <p className="text-gray-600 mt-3 text-lg leading-relaxed">
          Transaction <strong>#{orderCode}</strong> has been cancelled.
          <br />
          If this was a mistake, please try again.
        </p>

        {payment ? (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mt-8 text-left">
            <h2 className="font-semibold text-gray-800 mb-3">
              Payment Details
            </h2>
            <ul className="space-y-2 text-gray-600 text-base">
              <li>
                <span className="font-medium">Payment ID:</span>{" "}
                {payment.paymentId}
              </li>
              <li>
                <span className="font-medium">Amount:</span>{" "}
                {payment.amount?.toLocaleString()} VND
              </li>
              <li>
                <span className="font-medium">Method:</span>{" "}
                {payment.methodName || "N/A"}
              </li>
              <li>
                <span className="font-medium">Status:</span>{" "}
                <span className="text-red-600 font-semibold">
                  {payment.statusName || "Cancelled"}
                </span>
              </li>
              <li>
                <span className="font-medium">Created At:</span>{" "}
                {new Date(payment.createdAt).toLocaleString()}
              </li>
              {payment.updatedAt && (
                <li>
                  <span className="font-medium">Updated At:</span>{" "}
                  {new Date(payment.updatedAt).toLocaleString()}
                </li>
              )}
              {payment.bookingId && (
                <li>
                  <span className="font-medium">Booking ID:</span>{" "}
                  {payment.bookingId}
                </li>
              )}
              <li>
                <span className="font-medium">Payer ID:</span>{" "}
                {payment.payerUserId}
              </li>
            </ul>
          </div>
        ) : (
          <p className="mt-6 text-gray-500 italic">
            Loading payment details...
          </p>
        )}

        <div className="mt-8 flex flex-col gap-3">
          <button
            onClick={() => navigate("/parent")}
            className="w-full bg-[#f87171] hover:bg-[#ef4444] cursor-pointer text-white font-semibold py-3 px-5 rounded-xl shadow-lg transition-all duration-300"
          >
            Try Again
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
