import {
  Form,
  Input,
  Modal,
  Select,
  Button,
  DatePicker,
  TimePicker,
} from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect } from "react";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { createBookingId } from "../../../redux/parent/booking/createBookingId/createBookingIdSlice";
import { getBookingStudent } from "../../../redux/parent/booking/getBookingStudent/getBookingStudentSlice";
import { editBooking } from "../../../redux/parent/booking/editBooking/editBookingSlice";
import { toast } from "react-toastify";

function ModalBooking({ open, cancel, initialValues, idTeacher, idStudent }) {
  const [form] = useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    if (initialValues) {
      const start = dayjs(
        initialValues.requestedStartTime || initialValues.startTime
      );
      const end = dayjs(initialValues.requestedEndTime);

      const durationMinutes =
        initialValues.durationMinutes || end.diff(start, "minute");

      form.setFieldsValue({
        date: initialValues.date ? dayjs(initialValues.date) : start,
        startTime: start,
        durationMinutes,
        notes: initialValues.notes || "",
      });
    } else {
      form.resetFields();
    }
  }, [initialValues, form]);

  const handleFinish = async (values) => {
    const formatted = {
      teacherId: idTeacher?.teacherId,
      studentId: idStudent?.children?.[0]?.studentId,
      date: values.date.format("YYYY-MM-DD"),
      startTime: values.startTime.format("HH:mm:ss"),
      durationMinutes: values.durationMinutes,
      notes: values.notes,
    };
    if (initialValues) {
      dispatch(editBooking({ id: initialValues?.bookingId, body: formatted }));
      toast.success("Edit booking successful!");
    } else {
      dispatch(createBookingId(formatted));
    }
    dispatch(getBookingStudent(idStudent?.children?.[0]?.studentId));

    form.resetFields();
    cancel();
  };

  return (
    <Modal
      open={open}
      onCancel={cancel}
      footer={null}
      centered
      destroyOnClose
      className="rounded-xl overflow-hidden"
    >
      <div className="bg-gradient-to-r from-[#12ad8c] to-[#12ad8c] p-5 -m-6 mb-6">
        <h1 className="text-2xl font-bold text-white">
          {initialValues
            ? "Update Booking"
            : "Book Your Child's Learning Journey"}
        </h1>
        <p className="text-white/80 text-sm mt-1">
          Transform your child's future with our expert-led programming courses.
        </p>
      </div>

      <Form layout="vertical" form={form} onFinish={handleFinish}>
        <div className="grid grid-cols-3 gap-3">
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Please select a date" }]}
          >
            <DatePicker className="w-full" />
          </Form.Item>

          <Form.Item
            label="Start Time"
            name="startTime"
            rules={[{ required: true, message: "Please select start time" }]}
          >
            <TimePicker format="HH:mm" className="w-full" />
          </Form.Item>

          <Form.Item
            label="Duration"
            name="durationMinutes"
            rules={[{ required: true, message: "Please select duration" }]}
          >
            <Select placeholder="Select duration">
              <Select.Option value={60}>1 hour</Select.Option>
              <Select.Option value={120}>2 hours</Select.Option>
            </Select>
          </Form.Item>
        </div>

        <Form.Item label="Notes" name="notes">
          <Input.TextArea placeholder="Enter additional notes" rows={3} />
        </Form.Item>

        <div className="flex justify-end gap-2 mt-6">
          <Button className="!bg-[#ffffff] !text-black" onClick={cancel}>
            Cancel
          </Button>
          <Button
            type="secondary"
            className="!bg-[#12ad8c] hover:!bg-[#09735c] !text-white"
            htmlType="submit"
          >
            {initialValues ? "Update" : "Book Now"}
          </Button>
        </div>
      </Form>
    </Modal>
  );
}

export default ModalBooking;
