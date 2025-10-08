import { useEffect, useState } from "react";
import { Users, UserPlus, UserMinus } from "lucide-react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getAllParent } from "../../../redux/admin/user/getAllParent/getAllParentSlice";
import { getAllTeacher } from "../../../redux/admin/user/getAllTeacher/getAllTeacherSlice";

function UserAdmin() {
  const [parents, setParents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("parents");
  const dispatch = useDispatch();
  const { allParent } = useSelector((state) => state.getAllParent);
  const { allTeacher } = useSelector((state) => state.getAllTeacher);

  useEffect(() => {
    dispatch(getAllParent());
    dispatch(getAllTeacher());
  }, [dispatch]);

  // ✅ Map Parents
  useEffect(() => {
    if (allParent?.length) {
      const mapped = allParent.map((p) => ({
        id: p.userId,
        name: p.fullName,
        email: p.email,
        phone: p.phone || "-",
        role: "Parent",
        status: p.isActive ? "Active" : "Inactive",
        joinDate: p.createdAt?.split("T")[0] || "",
        children: (p.children || []).map((c) => ({
          id: c.userId,
          name: c.fullName,
          email: c.email,
          gradeLevel: c.gradeLevel,
        })),
      }));
      setParents(mapped);
    }
  }, [allParent]);

  // ✅ Map Teachers
  useEffect(() => {
    if (allTeacher?.length) {
      const mapped = allTeacher.map((t) => ({
        id: t.teacherId,
        name: t.fullName,
        email: t.email,
        phone: t.phone || "-",
        gender: t.gender || "-",
        role: "Teacher",
        status: t.verificationStatus === "Verified" ? "Active" : "Inactive",
        joinDate: t.createdAt?.split("T")[0] || "",
      }));
      setTeachers(mapped);
    }
  }, [allTeacher]);

  // ✅ Toggle ban/unban (for both)
  const handleBanUser = (id, type) => {
    if (type === "parent") {
      setParents((prev) =>
        prev.map((u) =>
          u.id === id
            ? {
                ...u,
                status: u.status === "Active" ? "Inactive" : "Active",
                children: u.children.map((c) => ({
                  ...c,
                  status: u.status === "Active" ? "Inactive" : "Active",
                })),
              }
            : u
        )
      );
    } else {
      setTeachers((prev) =>
        prev.map((t) =>
          t.id === id
            ? {
                ...t,
                status: t.status === "Active" ? "Inactive" : "Active",
              }
            : t
        )
      );
    }
    toast.success("Status updated successfully!");
  };

  // ✅ Filter
  const filteredData = activeTab === "parents" ? parents : teachers;
  const searchedData = filteredData.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ Stats
  const totalUsers =
    parents.reduce((acc, p) => acc + 1 + (p.children?.length || 0), 0) +
    teachers.length;
  const totalActive =
    parents.filter((p) => p.status === "Active").length +
    teachers.filter((t) => t.status === "Active").length;
  const totalInactive = totalUsers - totalActive;

  return (
    <div className="w-full min-h-screen p-6 bg-[#ebebeb]">
      <h1 className="text-3xl font-bold text-gray-800">Welcome Admin!</h1>
      <p className="text-gray-500 mb-6">Manage and update your system!</p>

      {/* ==== STATS ==== */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-6">
        <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
          <Users className="text-green-500" />
          <div>
            <p className="text-sm text-gray-500">Total Users</p>
            <h2 className="text-xl font-bold">{totalUsers}</h2>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
          <Users className="text-blue-500" />
          <div>
            <p className="text-sm text-gray-500">Active Users</p>
            <h2 className="text-xl font-bold">{totalActive}</h2>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
          <UserMinus className="text-red-500" />
          <div>
            <p className="text-sm text-gray-500">Inactive Users</p>
            <h2 className="text-xl font-bold">{totalInactive}</h2>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
          <UserPlus className="text-yellow-500" />
          <div>
            <p className="text-sm text-gray-500">Total Teachers</p>
            <h2 className="text-xl font-bold">{teachers.length}</h2>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
          <Users className="text-green-600" />
          <div>
            <p className="text-sm text-gray-500">Active Teachers</p>
            <h2 className="text-xl font-bold">
              {teachers.filter((t) => t.status === "Active").length}
            </h2>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
          <UserMinus className="text-red-600" />
          <div>
            <p className="text-sm text-gray-500">Inactive Teachers</p>
            <h2 className="text-xl font-bold">
              {teachers.filter((t) => t.status !== "Active").length}
            </h2>
          </div>
        </div>
      </div>

      {/* ==== TABLE ==== */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab("parents")}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === "parents"
                  ? "bg-[#232323] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Parents
            </button>
            <button
              onClick={() => setActiveTab("teachers")}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === "teachers"
                  ? "bg-[#232323] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Teachers
            </button>
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border rounded-lg text-sm"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b text-gray-600">
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Phone</th>
                {activeTab === "teachers" && (
                  <th className="py-3 px-4">Gender</th>
                )}
                {activeTab === "parents" && (
                  <>
                    <th className="py-3 px-4">Children</th>
                    <th className="py-3 px-4">Email Children</th>
                  </>
                )}
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {searchedData.map((u, i) => (
                <tr key={u.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{i + 1}</td>
                  <td className="px-4 py-2">{u.name}</td>
                  <td className="px-4 py-2">{u.email}</td>
                  <td className="px-4 py-2">{u.phone}</td>

                  {activeTab === "teachers" && (
                    <td className="px-4 py-2">{u.gender}</td>
                  )}

                  {activeTab === "parents" && (
                    <>
                      <td className="px-4 py-2">
                        {u.children.map((c) => (
                          <div key={c.id}>
                            {c.name} ({c.gradeLevel})
                          </div>
                        ))}
                      </td>
                      <td className="px-4 py-2">
                        {u.children.map((c) => (
                          <div key={c.id}>{c.email}</div>
                        ))}
                      </td>
                    </>
                  )}

                  <td className="px-4 py-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        u.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {u.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() =>
                        handleBanUser(
                          u.id,
                          activeTab === "parents" ? "parent" : "teacher"
                        )
                      }
                      className={`px-3 py-1 rounded-lg text-sm font-medium ${
                        u.status === "Active"
                          ? "bg-red-100 text-red-600 hover:bg-red-200"
                          : "bg-green-100 text-green-600 hover:bg-green-200"
                      }`}
                    >
                      {u.status === "Active" ? "Ban" : "Unban"}
                    </button>
                  </td>
                </tr>
              ))}
              {searchedData.length === 0 && (
                <tr>
                  <td
                    colSpan={activeTab === "parents" ? 8 : 6}
                    className="text-center py-6 text-gray-400"
                  >
                    No {activeTab} found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserAdmin;
