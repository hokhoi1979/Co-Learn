import React, { useEffect } from "react";
import Header from "../../layouts/Header/Header";
import { Icon } from "@iconify/react";
import { Star } from "lucide-react";
import bg from "../../img/bg1.jpg";
import bg3 from "../../img/bg3.jpg";
import { Button, Image } from "antd";
import { motion } from "framer-motion";
import Footer from "../../layouts/Footer/Footer";

function Home() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Parent of Emma, Age 8",
      comment:
        "My daughter's confidence in math has skyrocketed since using GoldLearns. The interactive lessons make learning feel like playing games!",
      initials: "SM",
      rating: 5,
    },
    {
      name: "David Johnson",
      role: "Parent of Alex, Age 10",
      comment:
        "The progress tracking feature is incredible. I can see exactly where my son excels and where he needs more support. Highly recommended!",
      initials: "DJ",
      rating: 5,
    },
    {
      name: "Lisa Rodriguez",
      role: "Elementary Teacher & Parent",
      comment:
        "As an educator, I'm impressed by the quality of content and the thoughtful approach to child development. It's truly exceptional.",
      initials: "LR",
      rating: 5,
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "$9",
      per: "per month",
      features: [
        "Access to basic courses",
        "Progress tracking",
        "Email support",
      ],
      button: "Start Free Trial",
      popular: false,
    },
    {
      name: "Family",
      price: "$19",
      per: "per month",
      features: [
        "All premium courses",
        "Advanced analytics",
        "Priority support",
        "Up to 3 children",
      ],
      button: "Start Free Trial",
      popular: true,
    },
    {
      name: "Premium",
      price: "$39",
      per: "per month",
      features: [
        "Everything in Family",
        "1-on-1 tutoring sessions",
        "Custom learning plans",
        "Unlimited children",
      ],
      button: "Start Free Trial",
      popular: false,
    },
  ];

  return (
    <>
      <div>
        <div
          className="fixed top-0 left-0 w-full z-50
             backdrop-blur-md bg-white/70 shadow-sm"
        >
          <Header />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full h-auto justify-center 
                       bg-gradient-to-r from-white via-50% to-[#e6fafe] shadow-md px-50 pt-[100px]"
        >
          <h1 className="text-4xl pt-5 text-cyan-600 font-bold flex justify-center">
            See Co&Learn in Action
          </h1>
          <p className="text-gray-500 flex justify-center">
            Watch how our platform makes coding accessible and fun for children
          </p>

          <div className="mt-10 flex gap-20">
            <div>
              <h1 className="text-6xl font-bold">Learning to Code is</h1>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Fun!
              </h1>
              <p className="text-gray-500 text-[18px] w-120">
                Transform learning into an adventure with our interactive
                educational platform designed to engage, inspire, and accelerate
                your child's growth.
              </p>

              <div className="flex gap-4 mt-5">
                <div className="w-25 rounded-[8px] justify-center cursor-pointer items-center gap-2 flex p-1 bg-cyan-600 text-white hover:bg-cyan-500">
                  Try demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12L8.283 7.404a1.5 1.5 0 0 1 2.12-2.122l5.658 5.657Z"
                    />
                  </svg>
                </div>

                <div className="w-40 rounded-[8px] justify-center border-cyan-600 border-1 cursor-pointer items-center gap-2 flex p-1 hover:bg-cyan-50">
                  <p className="text-cyan-600 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-cyan-600"
                    >
                      <path d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" />
                    </svg>
                    Create account
                  </p>
                </div>
              </div>
            </div>

            <Image className="rounded-3xl" src={bg} width={500} />
          </div>
          <div className="h-10"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex justify-center mt-10"
        >
          <h1 className="inline-block px-4 border-1 border-cyan-200 bg-cyan-50 text-cyan-600 font-semibold rounded-full">
            Why kid love Co&Learn
          </h1>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex justify-center text-4xl font-bold mt-5"
        >
          Everything Your Child Needs to Excel
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex p-5 px-20 gap-6 mb-5"
        >
          <div className="flex-1 bg-[#f7fefd] border border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition duration-300">
            <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-blue-100 mx-auto mb-3">
              <Icon
                className="text-cyan-600"
                icon="mdi:book-open-page-variant"
                width="26"
                height="26"
              />
            </div>
            <p className="text-2xl font-semibold">Interactive Learning</p>
            <p className="text-gray-400">
              Engaging lessons that adapt to your child's learning style.
            </p>
          </div>

          <div className="flex-1 bg-[#f7fefd] border border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition duration-300">
            <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-green-100 mx-auto mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                {" "}
                <g fill="none" fillRule="evenodd">
                  {" "}
                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />{" "}
                  <path
                    fill="green"
                    d="M16 14a5 5 0 0 1 4.995 4.783L21 19v1a2 2 0 0 1-1.85 1.995L19 22H5a2 2 0 0 1-1.995-1.85L3 20v-1a5 5 0 0 1 4.783-4.995L8 14zm0 2H8a3 3 0 0 0-2.995 2.824L5 19v1h14v-1a3 3 0 0 0-2.824-2.995zM12 2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
                  />{" "}
                </g>{" "}
              </svg>
            </div>
            <p className="text-2xl font-semibold">Expert Guidance</p>
            <p className="text-gray-400">
              Curriculum designed by specialists and child development experts.
            </p>
          </div>

          <div className="flex-1 bg-[#f7fefd] border border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition duration-300">
            <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-yellow-100 mx-auto mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                {" "}
                <path
                  fill="orange"
                  d="M9 10a3.04 3.04 0 0 1 3-3a3.04 3.04 0 0 1 3 3a3.04 3.04 0 0 1-3 3a3.04 3.04 0 0 1-3-3m3 9l4 1v-3.08A7.54 7.54 0 0 1 12 18a7.54 7.54 0 0 1-4-1.08V20m4-16a5.78 5.78 0 0 0-4.24 1.74A5.78 5.78 0 0 0 6 10a5.78 5.78 0 0 0 1.76 4.23A5.78 5.78 0 0 0 12 16a5.78 5.78 0 0 0 4.24-1.77A5.78 5.78 0 0 0 18 10a5.78 5.78 0 0 0-1.76-4.26A5.78 5.78 0 0 0 12 4m8 6a8 8 0 0 1-.57 2.8A7.8 7.8 0 0 1 18 15.28V23l-6-2l-6 2v-7.72A7.9 7.9 0 0 1 4 10a7.68 7.68 0 0 1 2.33-5.64A7.73 7.73 0 0 1 12 2a7.73 7.73 0 0 1 5.67 2.36A7.68 7.68 0 0 1 20 10"
                />{" "}
              </svg>
            </div>
            <p className="text-2xl font-semibold">Progress Tracking</p>
            <p className="text-gray-400">
              Detailed analytics and progress reports help parents and children.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex justify-center mt-10"
        >
          <div
            className="w-full h-auto justify-center 
                       bg-gradient-to-r from-[#e3f6fb] via-50% to-[#f6f8f9] shadow-lg px-50 "
          >
            <h1 className="text-4xl pt-5 text-cyan-600 font-bold flex justify-center">
              Benefits of learning
            </h1>
            <p className="m-auto text-center text-gray-500 w-200">
              Learning empowers personal growth, enhances skills, and opens new
              opportunities. It builds confidence, adaptability, and helps
              individuals reach their full potential.
            </p>

            <div className="p-5 grid grid-cols-2">
              <div>
                <Image className="rounded-3xl" src={bg3} width={500} />
              </div>
              <div className="p-10">
                <div className=" flex gap-5">
                  <div className="w-20 h-15 rounded-[10px] bg-green-300 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A3.5 3.5 0 0 1 3 18.5M19 20v-3H6.5a1.5 1.5 0 0 0 0 3zM5 15.337A3.5 3.5 0 0 1 6.5 15H19V4H6a1 1 0 0 0-1 1z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h1 className="text-2xl"> Interactive Learning</h1>
                    <p className="text-gray-500 text-[14px]">
                      Interactive learning engages students through active
                      participation, making lessons fun and effective.
                    </p>
                  </div>
                </div>

                <div className=" flex gap-5 mt-5">
                  <div className="w-21 h-15 rounded-[10px] bg-[#7fcedf] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 48 48"
                    >
                      <g
                        fill="none"
                        stroke="white"
                        stroke-linejoin="round"
                        stroke-width="4"
                      >
                        <path d="M6 9.256L24.009 4L42 9.256v10.778A26.32 26.32 0 0 1 24.003 45A26.32 26.32 0 0 1 6 20.029z" />
                        <path stroke-linecap="round" d="m15 23l7 7l12-12" />
                      </g>
                    </svg>
                  </div>

                  <div>
                    <h1 className="text-2xl"> Safe invironment</h1>
                    <p className="text-gray-500 text-[14px]">
                      A safe learning environment ensures students feel
                      comfortable, supported, and confident to explore and grow.
                    </p>
                  </div>
                </div>

                <div className=" flex gap-5 mt-5">
                  <div className="w-20 h-15 rounded-[10px] bg-orange-300 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M9 10a3.04 3.04 0 0 1 3-3a3.04 3.04 0 0 1 3 3a3.04 3.04 0 0 1-3 3a3.04 3.04 0 0 1-3-3m3 9l4 1v-3.08A7.54 7.54 0 0 1 12 18a7.54 7.54 0 0 1-4-1.08V20m4-16a5.78 5.78 0 0 0-4.24 1.74A5.78 5.78 0 0 0 6 10a5.78 5.78 0 0 0 1.76 4.23A5.78 5.78 0 0 0 12 16a5.78 5.78 0 0 0 4.24-1.77A5.78 5.78 0 0 0 18 10a5.78 5.78 0 0 0-1.76-4.26A5.78 5.78 0 0 0 12 4m8 6a8 8 0 0 1-.57 2.8A7.8 7.8 0 0 1 18 15.28V23l-6-2l-6 2v-7.72A7.9 7.9 0 0 1 4 10a7.68 7.68 0 0 1 2.33-5.64A7.73 7.73 0 0 1 12 2a7.73 7.73 0 0 1 5.67 2.36A7.68 7.68 0 0 1 20 10"
                      />
                    </svg>
                  </div>

                  <div>
                    <h1 className="text-2xl"> Self-Paced Learning</h1>
                    <p className="text-gray-500 text-[14px]">
                      Self-paced learning lets students progress at their own
                      speed, building confidence and deeper understanding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex justify-center mt-10"
        >
          <h1 className="inline-block px-4 border-1 border-cyan-200 bg-cyan-50 text-cyan-600 font-semibold rounded-full">
            What Parents Say
          </h1>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex justify-center text-4xl font-bold mt-5"
        >
          Trusted by Families Worldwide
        </motion.h1>

        <div className="flex p-5 px-20 gap-6 mb-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-5">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
                className="p-6 bg-[#f7fefd] rounded-2xl shadow hover:shadow-lg hover:-translate-y-2 transform transition duration-300"
              >
                <div className="flex mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{item.comment}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-700 font-bold mr-3">
                    {item.initials}
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="bg-gradient-to-r from-white via-50% to-[#e6fafe] py-12 px-6"
        >
          <h1 className="text-4xl text-cyan-600 font-bold text-center mb-4">
            Choose Your Learning Adventure
          </h1>
          <p className="text-gray-500 text-center mb-10">
            Flexible plans designed to fit every family's needs and budget.
            Start your free trial today!
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
                className={`p-6 rounded-xl border shadow-md bg-cyan-50 relative flex flex-col justify-between ${
                  plan.popular
                    ? "border-cyan-600  hover:-translate-y-2 transform transition duration-300"
                    : "border-transparent  hover:-translate-y-2 transform transition duration-300"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-600 text-white text-sm px-3 py-1 rounded-md">
                    Most Popular
                  </span>
                )}
                <h2 className="text-xl font-bold text-center">{plan.name}</h2>
                <p className="text-4xl font-bold text-center mt-3">
                  {plan.price}
                </p>
                <p className="text-center text-gray-500">{plan.per}</p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span className="text-green-600">✔</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-6 w-full py-3 rounded-lg font-semibold hover:bg-cyan-700 hover:text-white cursor-pointer ${
                    plan.popular
                      ? "bg-cyan-500 text-white"
                      : "bg-white border border-gray-300 text-gray-700"
                  }`}
                >
                  {plan.button}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Footer />
      </div>
    </>
  );
}

export default Home;
