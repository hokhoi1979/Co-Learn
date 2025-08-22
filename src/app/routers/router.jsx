import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Register from "../pages/Register/Register";
import HomeKids from "../pages/HomeKids/HomeKids";
import CourseKid from "../pages/HomeKids/CourseKid";
import CourseDetail from "../pages/HomeKids/CourseDetail";
import ScheduleKid from "../pages/HomeKids/ScheduleKid";
import Login from "../pages/Login";
import Home from "../pages/Home/Home";
import TeacherLayout from "../pages/Teacher/TeacherLayout";
import TeacherCourses from "../pages/Teacher/TeacherCourses/TeacherCourses";
import TeacherClass from "../pages/Teacher/TeacherClass/TeacherClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "kids",
        element: <HomeKids />,
        children: [
          { index: true, element: <CourseKid /> },
          { path: "courses", element: <CourseKid /> },
          { path: "courses/detail", element: <CourseDetail /> },
          { path: "space", element: <div>My Space</div> },
          { path: "schedule", element: <ScheduleKid /> },
        ],
      },

      {
        path: "teacher",
        element: <TeacherLayout />,
        children: [
          { path: "", element: <Navigate to="classes" /> },
          { path: "classes", element: <TeacherClass /> },

          { path: "courses", element: <TeacherCourses /> },
        ],
      },

      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

export default router;
