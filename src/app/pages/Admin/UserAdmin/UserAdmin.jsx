import { useEffect, useState } from "react";
import { Users, UserPlus, UserMinus } from "lucide-react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getAllParent } from "../../../redux/admin/user/getAllParent/getAllParentSlice";
import { getAllTeacher } from "../../../redux/admin/user/getAllTeacher/getAllTeacherSlice";

function UserAdmin() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("users");
  const dispatch = useDispatch();
  const { allParent } = useSelector((state) => state.getAllParent);
  const { allTeacher } = useSelector((state) => state.getAllTeacher);

  useEffect(() => {
    dispatch(getAllParent());
    dispatch(getAllTeacher());
  }, [dispatch]);

  console.log("ALLTEACHER", allTeacher);

  useEffect(() => {
    if (allParent?.length) {
      const mapped = allParent.map((parent) => {
        return {
          id: parent.userId,
          name: parent.fullName,
          email: parent.email,
          role: "Parent",
          status: parent.isActive ? "Active" : "In Active",
          joinDate: parent.createdAt?.split("T")[0] || "",
          children: (parent.children || []).map((c) => ({
            id: c.userId,
            name: c.fullName,
            email: c.email,
            gradeLevel: c.gradeLevel,
            status: "Active",
            joinDate: c.createdAt?.split("T")[0] || "",
          })),
        };
      });
      setUsers(mapped);
    }
  }, [allParent]);

  const handleBanUser = (id) => {
    setUsers((prev) =>
      prev.map((u) => {
        if (u.id === id) {
          const newStatus = u.status === "Active" ? "Inactive" : "Active";
          return {
            ...u,
            status: newStatus,
            children: u.children.map((c) => ({ ...c, status: newStatus })),
          };
        }
        return u;
      })
    );

    const user = users.find((u) => u.id === id);
    toast[user?.status === "Active" ? "success" : "info"](
      user?.status === "Active" ? "Ban user successful!" : "User re-activated!"
    );
  };

  const tabFiltered = users.filter((u) =>
    activeTab === "users" ? u.role === "Parent" : u.role === "Teacher"
  );

  const filteredUsers = tabFiltered.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen p-6 bg-[#ebebeb]">
      <h1 className="text-3xl font-bold text-gray-800">Welcome Admin!</h1>
      <p className="text-gray-500 mb-6">Manage and update your system!</p>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-6">
        <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
          <Users className="text-green-500" />
          <div>
            <p className="text-sm text-gray-500">Total Users</p>
            <h2 className="text-xl font-bold">
              {users.reduce((acc, u) => acc + 1 + (u.children?.length || 0), 0)}
            </h2>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
          <Users className="text-blue-500" />
          <div>
            <p className="text-sm text-gray-500">Active Users</p>
            <h2 className="text-xl font-bold">
              {users.reduce(
                (acc, u) =>
                  acc +
                  (u.status === "Active" ? 1 : 0) +
                  (u.children?.filter((c) => c.status === "Active").length ||
                    0),
                0
              )}
            </h2>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
          <UserMinus className="text-red-500" />
          <div>
            <p className="text-sm text-gray-500">Inactive Users</p>
            <h2 className="text-xl font-bold">
              {users.reduce(
                (acc, u) =>
                  acc +
                  (u.status !== "Active" ? 1 : 0) +
                  (u.children?.filter((c) => c.status !== "Active").length ||
                    0),
                0
              )}
            </h2>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
          <UserPlus className="text-yellow-500" />
          <div>
            <p className="text-sm text-gray-500">Total Teacher</p>
            <h2 className="text-xl font-bold">{allTeacher?.length || 0}</h2>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
          <Users className="text-green-600" />
          <div>
            <p className="text-sm text-gray-500">Active Teachers</p>
            <h2 className="text-xl font-bold">
              {allTeacher?.filter((t) => t.verificationStatus === "Verified")
                ?.length || 0}
            </h2>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
          <UserMinus className="text-red-600" />
          <div>
            <p className="text-sm text-gray-500">Inactive Teachers</p>
            <h2 className="text-xl font-bold">
              {allTeacher?.filter((t) => t.verificationStatus !== "Verified")
                ?.length || 0}
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab("users")}
              className={`px-4 py-2 rounded-lg font-medium cursor-pointer ${
                activeTab === "users"
                  ? "bg-[#232323] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Users
            </button>
            <button
              onClick={() => setActiveTab("teachers")}
              className={`px-4 py-2 rounded-lg font-medium cursor-pointer ${
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
                <th>Number</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email Parent</th>
                <th className="py-3 px-4">Role</th>
                <th className="py-3 px-4">Children</th>
                <th className="py-3 px-4">Email Children</th>

                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((u, index) => (
                <tr key={u.id} className="border-b hover:bg-gray-50">
                  <td>{index + 1}</td>

                  <td className="py-3 px-4">{u.name}</td>
                  <td className="py-3 px-4">{u.email}</td>
                  <td className="py-3 px-4">{u.role}</td>
                  <td className="py-3 px-4">
                    {u.children.map((c) => (
                      <div key={c.id}>
                        {c.name} ({c.gradeLevel})
                      </div>
                    ))}
                  </td>
                  <td className="py-3 px-4">
                    {u.children.map((c) => (
                      <div key={c.id}>{c.email}</div>
                    ))}
                  </td>
                  <td className="py-3 px-4">
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
                  <td className="py-3 px-4">
                    <button
                      onClick={() => handleBanUser(u.id)}
                      className={`px-3 py-1 rounded-lg text-sm font-medium cursor-pointer ${
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
              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center py-6 text-gray-400">
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
