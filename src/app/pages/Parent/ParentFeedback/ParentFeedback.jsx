import React, { useState } from "react";
import { Image, Modal, Rate, Input, Button, Form, Tag } from "antd";
import img from "../../../assets/img/bg3.jpg";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import { toast } from "react-toastify";

const data = [
  {
    title: "Critical Thinking & Puzzles",
    description:
      "Develop problem-solving and logical thinking with brain games.",
    image: "/images/courses/critical-thinking.jpg",
    status: true,
  },
  {
    title: "Mathematics Fun",
    description: "Engage kids with math challenges and fun quizzes.",
    image: "/images/courses/math-fun.jpg",
    status: false,
  },
  {
    title: "Creative Arts",
    description: "Boost creativity with drawing and storytelling activities.",
    image: "/images/courses/creative-arts.jpg",
    status: true,
  },
];

function ParentFeedback() {
  const [open, setOpen] = useState(false);
  const [form] = useForm();
  const [feedback, setFeedback] = useState([]);

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      const dataFeedback = {
        ...values,
      };
      console.log("DATA", dataFeedback);
      setFeedback(dataFeedback), form.resetFields();
      setOpen(false);
    });
    toast.success("Feedback successful!");
  };

  return (
    <div className="w-full min-h-screen p-6 bg-gradient-to-b from-[#F0F6F6] to-[#DBFBFD]">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome Parent!</h1>
        <p className="text-gray-500">
          Manage and update your children’s learning process
        </p>
        <h1 className="flex justify-center text-5xl text-gray-600 mt-5">
          Parent Feedback
        </h1>

        <div className="grid grid-cols-4 gap-2 mt-5">
          {data.map((item, index) => (
            <div
              key={index}
              className="border-1 shadow-md rounded-2xl bg-gray-100 py-5 flex flex-col h-full"
            >
              <div className="relative">
                <Image
                  src={img}
                  height={170}
                  width="100%"
                  className="bg-cover"
                />
              </div>

              <div className="px-5 flex flex-col flex-1">
                <h1 className="flex justify-center text-[20px] text-[#138257] font-bold">
                  {item.title}
                </h1>
                <p className="text-gray-500">{item.description}</p>

                {item.status === true ? (
                  <>
                    <div className="m-auto">
                      <Tag color="green" className="">
                        Give Success
                      </Tag>
                    </div>
                  </>
                ) : (
                  <>
                    <button
                      type="secondary"
                      className="bg-[#12ad8c] mt-2 self-center text-white px-2 py-1 rounded-md cursor-pointer hover:bg-[#17ba96]"
                      onClick={() => setOpen(true)}
                    >
                      Give Feedback
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={[
          <>
            <button
              onClick={handleSubmit}
              className="bg-[#12ad8c] mt-2 self-center text-white px-2 py-1 rounded-md cursor-pointer hover:bg-[#17ba96]"
            >
              Submit
            </button>
          </>,
        ]}
      >
        <div>
          <h1 className="flex justify-center text-2xl">Feedback</h1>
          <Form layout="vertical" form={form}>
            <Form.Item label="Please rate this course" name={"rating"}>
              <Rate />
            </Form.Item>
            <Form.Item
              label="Leave a comment"
              name={"feedback"}
              rules={[
                {
                  required: true,
                  message: "Pleased enter at least 4 characters",
                },
              ]}
            >
              <Input.TextArea name="description" rows={3} />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
}

export default ParentFeedback;
