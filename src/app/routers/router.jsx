import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import Register from "../pages/Register/Register";
import HomeKids from "../pages/HomeKids/HomeKids";
import CourseKid from "../pages/HomeKids/CourseKid";
import CourseDetail from "../pages/HomeKids/CourseDetail";
import ScheduleKid from "../pages/HomeKids/ScheduleKid";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // { path: "", element: <Home /> },
      {
        path: "",
        element: <HomeKids />,
        children: [
          {
            index: true,
            element: <CourseKid />,
          },
          {
            path: "courses",
            element: <CourseKid />,
          },
          {
            path: "courses/detail",
            element: <CourseDetail />,
          },

          { path: "space", element: <div>My Space</div> },
          { path: "schedule", element: <ScheduleKid /> },
        ],
      },

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
