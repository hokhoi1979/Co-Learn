import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // { path: "", element: <Home /> },

      { path: "", element: <Login /> },
      { path: "/register", element: <Register /> },

      // Example
      //   {
      //     path: "nurse",
      //     // chỉ kiểm tra ở đây
      //     element: <PrivateRoute allowedRoles={[3]} />,
      //     children: [
      //       {
      //         path: "",
      //         element: <NurseLayout />,
      //         children: [
      //           { path: "", element: <Navigate to="materials" /> },

      //           {
      //             path: "materials",
      //             element: <Materials />,
      //             children: [
      //               { path: "", element: <Inventory /> },
      //               { path: "import", element: <Import /> },
      //               { path: "medicine", element: <MedicineForStudent /> },
      //               { path: "schedule", element: <MedicineSchedule /> },
      //             ],
      //           },
      //           {
      //             path: "student",
      //             element: <StudentProfile />,
      //           },
      //           {
      //             path: "vaccine",
      //             element: <VaccineNurse />,
      //             children: [
      //               { path: "", element: <VaccineDay /> },
      //               { path: "studentList/:id", element: <StudentList /> },
      //               { path: "vaccineHistory", element: <VaccineHistory /> },
      //               { path: "vaccineResult", element: <VaccineResult /> },
      //             ],
      //           },
      //           {
      //             path: "medical",
      //             element: <MedicalNurse />,
      //             children: [
      //               { path: "", element: <MedicalDay /> },
      //               {
      //                 path: "studentListCheckup/:id",
      //                 element: <StudentListMedical />,
      //               },
      //               { path: "medicalHistory", element: <MedicalHistory /> },
      //               { path: "medicalResult", element: <MedicalResult /> },
      //             ],
      //           },
      //           {
      //             path: "medicalEvent",
      //             element: <MedicalEvent />,
      //           },
      //           { path: "information", element: <NurseInfor /> },
      //           { path: "change_password", element: <ChangePasswordNurse /> },
      //         ],
      //       },
      //     ],
      //   },
    ],
  },
]);

export default router;
