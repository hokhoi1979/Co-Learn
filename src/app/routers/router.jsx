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
import TeacherSchedule from "../pages/Teacher/TeacherSchedule/TeacherSchedule";
import TeacherContent from "../pages/Teacher/TeacherContent/TeacherContent";
import TeacherFeedBack from "../pages/Teacher/TeacherFeedBack/TeacherFeedBack";
import TeacherIncome from "../pages/Teacher/TeacherIncome/TeacherIncome";
import PaymentSuccess from "../pages/PaymentSuccess/PaymentSuccess";

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
          { path: "schedule", element: <TeacherSchedule /> },
          { path: "content", element: <TeacherContent /> },
          { path: "feedback", element: <TeacherFeedBack /> },
          { path: "income", element: <TeacherIncome /> },

          { path: "courses", element: <TeacherCourses /> },
        ],
      },
      { path: "payment", element: <PaymentSuccess /> },

      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

export default router;
