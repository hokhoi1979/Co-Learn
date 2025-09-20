import { Mail, Phone, Calendar, GraduationCap, Clock } from "lucide-react";
import { teachers } from "../../../shared";
import { Image } from "antd";
import teacher from "../../../assets/img/teacher.jpg";

function TeacherAdmin() {
  return (
    <div className="w-full min-h-screen p-6 bg-[#ebebeb]">
      <h1 className="text-3xl font-bold text-gray-800">Welcome Admin!</h1>
      <p className="text-gray-500 mb-6">Manage and update your system!</p>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#4f9cf4"
                d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z"
                opacity="0.45"
                stroke-width="0.5"
                stroke="#4f9cf4"
              />
              <path
                fill="#4f9cf4"
                d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"
                stroke-width="0.5"
                stroke="#4f9cf4"
              >
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  from="0 12 12"
                  repeatCount="indefinite"
                  to="360 12 12"
                  type="rotate"
                />
              </path>
            </svg>
            <p className="text-gray-500">Pending Review</p>
          </div>
          <h2 className="text-4xl flex justify-center font-bold text-[#4f9cf4]">
            3
          </h2>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 48 48"
            >
              <path
                fill="#52c673"
                fill-rule="evenodd"
                stroke="#52c673"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="m4 24l5-5l10 10L39 9l5 5l-25 25z"
                clip-rule="evenodd"
              />
            </svg>
            <p className="text-gray-500">Approved</p>
          </div>
          <h2 className="text-4xl flex justify-center font-bold text-[#52c673]">
            2
          </h2>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 20 20"
            >
              <path
                fill="#dc7256"
                d="m12.12 10l3.53 3.53l-2.12 2.12L10 12.12l-3.54 3.54l-2.12-2.12L7.88 10L4.34 6.46l2.12-2.12L10 7.88l3.54-3.53l2.12 2.12z"
                stroke-width="0.5"
                stroke="#dc7256"
              />
            </svg>
            <p className="text-gray-500">Rejected</p>
          </div>
          <h2 className="text-4xl flex justify-center font-bold text-[#dc7256]">
            1
          </h2>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <p className="text-gray-500">Avg Rating</p>
          <h2 className="text-2xl font-bold text-blue-600">4.8</h2>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <select className="border rounded-lg px-4 py-2">
          <option>All Status</option>
          <option>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {teachers.map((t) => (
          <div key={t.id} className="bg-white rounded-xl p-6 shadow">
            <div className="flex justify-between items-center mb-2">
              <div className="flex gap-3 items-center">
                <Image
                  src={teacher}
                  alt={t.fullName}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <h3 className="text-lg font-semibold">{t.fullName}</h3>
              </div>
              <span
                className={`px-3 py-1 text-sm rounded-full ${
                  t.status === "Pending"
                    ? "bg-yellow-100 text-yellow-600"
                    : t.status === "Approved"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {t.status || "Pending"}
              </span>
            </div>

            <div className="mt-3 text-sm text-gray-600 space-y-1">
              <p className="flex items-center gap-2">
                <Mail size={16} /> {t.email}
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} /> {t.phone}
              </p>
              <p className="flex items-center gap-2">
                <Calendar size={16} /> DOB: {t.dateOfBirth} ({t.age} yrs)
              </p>
              <p className="flex items-center gap-2">
                <GraduationCap size={16} /> Experience: {t.experience} years
              </p>
              <p className="flex items-center gap-2">
                <Clock size={16} /> Languages: {t.languages.join(", ")}
              </p>
            </div>

            <p className="mt-3 text-gray-600 text-sm">{t.introduction}</p>

            <a
              href={t.certificate}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              Link Certificate
            </a>
            <br />
            <a
              href={t.cv}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              Link CV
            </a>

            <div className="flex gap-3 mt-4">
              <button className="flex-1 bg-[#ea8576] hover:bg-[#e14f38] text-white py-1 cursor-pointer rounded-lg">
                Reject
              </button>
              <button className="flex-1 bg-[#20ba93] hover:bg-[#2ba788] text-white py-1 cursor-pointer rounded-lg">
                Approve
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherAdmin;
