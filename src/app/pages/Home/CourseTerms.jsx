import { sections } from "../../shared";
import { motion } from "framer-motion";

function CourseTerms() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-gradient-to-r from-white via-50% to-[#e6fafe] mt-5 py-12 px-6"
    >
      <div className=" px-6">
        <div className="max-w-3xl mx-auto text-center ">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Course Terms & Conditions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg"
          >
            Please read these terms carefully before enrolling in any of our
            courses.
          </motion.p>
        </div>
        <div className="max-w-3xl mx-auto space-y-8">
          {sections.map((sec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0">
                <svg
                  className="w-7 h-7 text-green-500 mt-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-1">
                  {sec.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">{sec.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default CourseTerms;
