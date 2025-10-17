import React, { useEffect, useState } from "react";
import { Modal, Input, Button, Form } from "antd";
import { DollarSign, CreditCard, Banknote, IdCard } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { postPayment } from "../../../redux/payment/postPayment/postPaymentSlice";
import { useNavigate } from "react-router";

const { TextArea } = Input;

const ModalPayment = ({ open, onClose, dataPayment, userIdParent }) => {
  const [selectedMethod, setSelectedMethod] = useState("1");
  const dispatch = useDispatch();

  const { createPayment } = useSelector((state) => state.postPayment);
  const navigate = useNavigate();

  useEffect(() => {
    if (createPayment) {
      window.location.href = createPayment?.checkoutUrl;
    }
  }, [createPayment, navigate]);

  const onSubmit = async () => {
    const payload = {
      bookingId: dataPayment.bookingId,
      payerUserId: userIdParent.userId,
    };

    const res = await dispatch(
      postPayment({ bookingId: payload.bookingId, userId: payload.payerUserId })
    ).unwrap();
    const url = res?.checkoutUrl;

    if (url) {
      if (url.startsWith("http")) {
        window.location.href = url;
      } else {
        navigate(url);
      }
    }
  };

  if (!dataPayment) return null;

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      width={520}
      className="rounded-2xl"
    >
      <div className="flex flex-col items-center border-b pb-4">
        <div className="bg-[#12ad8c] p-3 rounded-full">
          <DollarSign color="white" className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-semibold mt-2">Complete Payment</h2>
        <p className="text-gray-500 text-sm">Secure payment for your booking</p>
      </div>

      <div className="mt-5 border rounded-xl bg-green-50/30 p-4">
        <h3 className="text-gray-700 font-medium mb-2">Booking Details</h3>
        <div className="grid grid-cols-2 text-sm text-gray-700 gap-y-1">
          <p>
            <span className="font-medium">Booking ID:</span> #
            {dataPayment.bookingId}
          </p>
          <p>
            <span className="font-medium">Teacher:</span>{" "}
            {dataPayment.teacherEmail}
          </p>
          <p>
            <span className="font-medium">Student:</span> {dataPayment.child}
          </p>
          <p>
            <span className="font-medium">Parent:</span> {dataPayment.parent}
          </p>
          <p>
            <span className="font-medium">Date:</span> {dataPayment.date}
          </p>
          <p>
            <span className="font-medium">Time:</span> {dataPayment.time}
          </p>
          <p>
            <span className="font-medium">Duration:</span>{" "}
            {dataPayment.durationMinutes} min
          </p>
          <p>
            <span className="font-medium">Mode:</span> {dataPayment.learn}
          </p>
        </div>

        <div className="border-t mt-3 pt-3 flex justify-between items-center">
          <span className="font-medium text-gray-700">Total Amount</span>
          <span className="text-[#12ad8c] font-semibold text-lg"></span>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="font-medium text-gray-700 mb-2">Payment Method</h3>
        <div className="grid grid-cols-3 gap-3">
          <Button
            type="default"
            onClick={() => setSelectedMethod("2")}
            className={`!flex-1 !rounded-xl !flex !flex-col !items-center !justify-center !h-[90px] ${
              selectedMethod === "2"
                ? "!border-2 !border-[#12ad8c] !bg-[#c3f0e6] !text-[#12ad8c]"
                : "!border !text-gray-700"
            }`}
          >
            <Banknote
              className={`mb-1 ${
                selectedMethod === "2" ? "text-[#12ad8c]" : "text-gray-500"
              }`}
            />
            <span className="text-sm font-medium">PayOs</span>
            <span className="text-xs text-gray-400">
              Transfer via bank account
            </span>
          </Button>

          <Button
            type="default"
            onClick={() => setSelectedMethod("1")}
            className={`!flex-1 !rounded-xl !flex !flex-col !items-center !justify-center !h-[90px] ${
              selectedMethod === "1"
                ? "!border-2 !border-[#12ad8c] !bg-[#c3f0e6] !text-[#12ad8c]"
                : "!border !text-gray-700"
            }`}
          >
            <CreditCard
              className={`mb-1 ${
                selectedMethod === "1" ? "text-[#12ad8c]" : "text-gray-500"
              }`}
            />
            <span className="text-sm font-medium">Credit Card</span>
            <span className="text-xs text-gray-400">
              Pay with credit/debit card
            </span>
          </Button>

          <Button
            type="default"
            onClick={() => setSelectedMethod("3")}
            className={`!flex-1 !rounded-xl !flex !flex-col !items-center !justify-center !h-[90px] ${
              selectedMethod === "3"
                ? "!border-2 !border-[#12ad8c] !bg-[#c3f0e6] !text-[#12ad8c]"
                : "!border !text-gray-700"
            }`}
          >
            <IdCard
              className={`mb-1 ${
                selectedMethod === "3" ? "text-[#12ad8c]" : "text-gray-500"
              }`}
            />
            <span className="text-sm font-medium">Momo</span>
            <span className="text-xs text-gray-400">Pay with Momo</span>
          </Button>
        </div>
      </div>

      <div className="flex justify-end mt-6 gap-3">
        <Button onClick={onClose}>Cancel</Button>
        <Button
          type="primary"
          className="!bg-[#12ad8c] !text-white hover:!bg-[#0d7d65]"
          onClick={onSubmit}
        >
          Submit Payment
        </Button>
      </div>
    </Modal>
  );
};

export default ModalPayment;
