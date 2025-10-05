import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Earning from "../ComponentTeacher/Earning";
import { Button } from "antd";
import CarouselTeacher from "../ComponentTeacher/CarouselTeacher";
import ModalProfile from "../ComponentTeacher/ModalProfile";
import {
  Mail,
  Phone,
  Users,
  Calendar,
  Info,
  ExternalLink,
  Award,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileTeacherId } from "../../../redux/teacher/profileTeacher/getProfileId/getProfileIdSlice";

function TeacherProfile() {
  const dispatch = useDispatch();
  const [openProfile, setOpenProfile] = useState(false);
  const [user, setUser] = useState(null);

  const { profileTeacherId } = useSelector(
    (state) => state.getProfileTeacherId
  );

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      setUser(JSON.parse(auth));
    }
  }, []);

  useEffect(() => {
    if (user?.userId) {
      dispatch(getProfileTeacherId(user.userId));
    }
  }, [dispatch, user]);

  console.log("TEACHER", profileTeacherId);

  const handleTeacherOk = () => setOpenProfile(false);
  const profile = profileTeacherId || null;

  return (
    <div className="w-full min-h-screen p-5 bg-gradient-to-b from-[#F0F6F6] to-[#DBFBFD]">
      <h1 className="text-2xl font-bold">
        Welcome back! {profile?.fullName || "Teacher"}
      </h1>
      <p className="text-gray-500 mb-6">
        Manage your classes and track your teaching progress
      </p>

      <Earning />

      <div className="py-10">
        {!profile ? (
          <div className="flex flex-col items-center justify-center h-96 bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-xl font-semibold text-gray-700 mt-4">
              No Teacher Information
            </h2>
            <p className="text-gray-500 mb-6 text-center">
              You haven’t updated your teaching profile yet.
            </p>
            <Button
              onClick={() => setOpenProfile(true)}
              type="primary"
              className="!bg-[#3fcba8] !text-white shadow-md hover:!bg-[#17ae88] px-6 py-2 rounded-lg"
            >
              + Update Now
            </Button>
          </div>
        ) : (
          <div className="w-[90%] md:w-[80%] lg:w-[75%] mx-auto">
            <div className="bg-gradient-to-r from-[#f2f9f8] to-[#f2f9f9] rounded-2xl shadow p-8 flex flex-col md:flex-row items-center md:items-start gap-6 relative">
              <img
                src={profile.photo}
                alt="Teacher Avatar"
                className="w-28 h-28 rounded-xl object-cover shadow-md"
              />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {profile.fullName}
                </h3>

                <span className="bg-[#DFF7F2] text-[#158F77] px-3 py-1 rounded-lg ">
                  Professional Educator
                </span>
                <div className="flex flex-wrap gap-3 mt-3 items-center text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    Gender:
                    {profile.gender}
                  </span>
                </div>
              </div>

              <Button
                onClick={() => setOpenProfile(true)}
                className="!bg-[#3fcba8] !text-white shadow-md hover:!bg-[#17ae88] "
              >
                Edit Profile
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-2xl shadow p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="text-[#0ea88f]" size={20} />
                  <h4 className="text-lg font-semibold">Contact Information</h4>
                </div>

                <div className="text-gray-600 space-y-4">
                  <div>
                    <div className="text-xs text-gray-400 uppercase mb-1">
                      Phone
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="text-[#3fcba8]" size={16} />
                      <span className="text-sm">{profile.phone || "-"}</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-400 uppercase mb-1">
                      Email
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="text-[#3fcba8]" size={16} />
                      <span className="text-sm">{profile.email || "-"}</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-400 uppercase mb-1">
                      Birthday
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="text-[#3fcba8]" size={16} />
                      <span className="text-sm">
                        {profile.born
                          ? dayjs(profile.born).format("MMMM D, YYYY")
                          : "N/A"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Info className="text-[#0ea88f]" size={20} />
                  <h4 className="text-lg font-semibold">About Me</h4>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {profile.description ||
                    "No description provided. Update your profile to let students know more about you."}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow p-6 mt-8">
              <div className="flex items-center gap-3 mb-4">
                <Award color="#0ea88f" />
                <h4 className="text-lg font-semibold">
                  Credentials & Documents
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href={profile.degree || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-[#F3FBF9] border border-transparent rounded-lg p-4 hover:shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-white/60 rounded-md p-3 shadow-sm">
                      <Info className="text-[#0ea88f]" size={20} />
                    </div>
                    <div>
                      <div className="font-medium">Degree Certificate</div>
                      <div className="text-sm text-gray-500">
                        View credentials
                      </div>
                    </div>
                  </div>
                  <div>
                    <ExternalLink className="text-gray-500" size={18} />
                  </div>
                </a>

                <a
                  href={profile.cv || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-[#F3FBF9] border border-transparent rounded-lg p-4 hover:shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-white/60 rounded-md p-3 shadow-sm">
                      <Info className="text-[#0ea88f]" size={20} />
                    </div>
                    <div>
                      <div className="font-medium">Curriculum Vitae</div>
                      <div className="text-sm text-gray-500">View full CV</div>
                    </div>
                  </div>
                  <div>
                    <ExternalLink className="text-gray-500" size={18} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <CarouselTeacher />

      <ModalProfile
        isModalOpen={openProfile}
        handleCancel={() => setOpenProfile(false)}
        handleOk={handleTeacherOk}
        initialState={profile}
      />
    </div>
  );
}

export default TeacherProfile;
