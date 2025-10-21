import { Mail, Phone, Calendar, GraduationCap, Clock, Eye } from "lucide-react";
import { Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllTeacher } from "../../../redux/admin/user/getAllTeacher/getAllTeacherSlice";
import { editProfileTeacher } from "../../../redux/teacher/profileTeacher/editProfileTeacher/editProfileTeacherSlice";
import { useNavigate } from "react-router-dom";

function TeacherAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filterStatus, setFilterStatus] = useState("All");
  const { allTeacher = [], loading } = useSelector(
    (state) => state.getAllTeacher
  );

  useEffect(() => {
    dispatch(getAllTeacher());
  }, [dispatch]);

  console.log("All teachers:", allTeacher);

  const handleApprove = async (values) => {
    const payload = {
      userId: values.userId,
      fullName: values.fullName,
      born: values.born,
      phone: values.phone,
      gender: values.gender,
      degree: values.degree,
      hourlyRate: values.hourlyRate,
      cv: values.cv,
      photo: values.photo,
      description: values.description,
      verificationStatus: "Verified",
    };
    console.log(payload);
    await dispatch(editProfileTeacher({ id: payload.userId, body: payload }));
  };

  const filteredTeachers = allTeacher.filter((t) => {
    if (filterStatus === "All") return true;
    if (filterStatus === "Pending") return t.verificationStatus === "Pending";
    if (filterStatus === "Approved") return t.verificationStatus === "Verified";
    if (filterStatus === "Rejected") return t.verificationStatus === "Rejected";
    return true;
  });

  return (
    <div className="w-full min-h-screen p-6 bg-[#ebebeb]">
      <h1 className="text-3xl font-bold text-gray-800">Welcome Admin!</h1>
      <p className="text-gray-500 mb-6">Manage and update your system!</p>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="flex gap-2 items-center">
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
                strokeWidth="0.5"
                stroke="#4f9cf4"
              />
              <path
                fill="#4f9cf4"
                d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"
                strokeWidth="0.5"
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
            {
              allTeacher.filter((t) => t.verificationStatus === "Pending")
                .length
            }
          </h2>
        </div>

        <div className="bg-white rounded-xl p-4 shadow">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 48 48"
            >
              <path
                fill="#52c673"
                stroke="#52c673"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="m4 24l5-5l10 10L39 9l5 5l-25 25z"
              />
            </svg>
            <p className="text-gray-500">Approved</p>
          </div>
          <h2 className="text-4xl flex justify-center font-bold text-[#52c673]">
            {
              allTeacher.filter((t) => t.verificationStatus === "Verified")
                .length
            }
          </h2>
        </div>

        <div className="bg-white rounded-xl p-4 shadow">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 20 20"
            >
              <path
                fill="#dc7256"
                d="m12.12 10l3.53 3.53l-2.12 2.12L10 12.12l-3.54 3.54l-2.12-2.12L7.88 10L4.34 6.46l2.12-2.12L10 7.88l3.54-3.53l2.12 2.12z"
                strokeWidth="0.5"
                stroke="#dc7256"
              />
            </svg>
            <p className="text-gray-500">Rejected</p>
          </div>
          <h2 className="text-4xl flex justify-center font-bold text-[#dc7256]">
            {
              allTeacher.filter((t) => t.verificationStatus === "Rejected")
                .length
            }
          </h2>
        </div>

        <div className="bg-white rounded-xl p-4 shadow">
          <p className="text-gray-500">Avg Rating</p>
          <h2 className="text-2xl font-bold text-blue-600">
            {allTeacher.length
              ? (
                  allTeacher.reduce((sum, t) => sum + (t.avgRating || 0), 0) /
                  allTeacher.length
                ).toFixed(1)
              : "—"}
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="relative">
          <select
            className="appearance-none border border-gray-300 rounded-xl px-5 py-2.5 pr-10 bg-white text-gray-700 font-medium shadow-sm 
      hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-200"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>

          {/* Icon mũi tên đẹp */}
          <svg
            className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Nút làm mới */}
        <button
          onClick={() => setFilterStatus("All")}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all duration-200 shadow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v6h6M20 20v-6h-6M4 10a8 8 0 0114.9-2M20 14a8 8 0 01-14.9 2"
            />
          </svg>
          Reset
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {filteredTeachers.map((t) => (
            <div key={t.teacherId} className="bg-white rounded-xl p-6 shadow">
              <div className="flex justify-between items-center mb-2">
                <div className="flex gap-3 items-center">
                  <Image
                    src={t.photo || "https://picsum.photos/200"}
                    alt={t.fullName}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <h3 className="text-lg font-semibold">{t.fullName}</h3>
                </div>
                <span
                  className={`px-3 py-1 text-sm rounded-full ${
                    t.verificationStatus === "Verified"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {t.verificationStatus === "Verified" ? "Verified" : "Pending"}
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
                  <Calendar size={16} /> Born: {t.born?.split("T")[0]} ({t.age}{" "}
                  yrs)
                </p>

                <p className="flex items-center gap-2">
                  <Clock size={16} /> Rate: {t.hourlyRate?.toLocaleString()}₫ /h
                </p>
              </div>

              <p className="mt-3 text-gray-600 text-sm">
                Description: {t.description}
              </p>

              <div className="flex justify-between mt-4">
                {t.degree && (
                  <a
                    href={t.degree}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition w-[48%]"
                  >
                    <Eye size={16} />
                    <span>Degree</span>
                  </a>
                )}

                {t.cv && (
                  <a
                    href={t.cv}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition w-[48%]"
                  >
                    <Eye size={16} />
                    <span>CV</span>
                  </a>
                )}
              </div>

              {t.verificationStatus === "Pending" && (
                <>
                  <div className="flex gap-3 mt-4">
                    <button className="flex-1 bg-[#ea8576] hover:bg-[#e14f38] text-white py-1 rounded-lg">
                      Reject
                    </button>
                    <button
                      className="flex-1 bg-[#20ba93] hover:bg-[#2ba788] text-white py-1 rounded-lg cursor-pointer"
                      onClick={() => {
                        handleApprove(t);
                      }}
                    >
                      Approve
                    </button>
                  </div>
                </>
              )}

              {t.verificationStatus === "Verified" && (
                <>
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => {
                        navigate(`/admin/viewTeacherAdmin/${t.teacherId}`);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#20ba93] hover:bg-[#2ba788] text-white py-2 rounded-lg cursor-pointer transition"
                    >
                      <Eye size={18} />
                      <span>View information</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TeacherAdmin;
