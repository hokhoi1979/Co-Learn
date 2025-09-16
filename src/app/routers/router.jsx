import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Register from "../pages/Register/Register";
import HomeKids from "../pages/HomeKids/HomeKids";
import CourseKid from "../pages/HomeKids/CourseKid";
import CourseDetail from "../pages/HomeKids/CourseDetail";
import ScheduleKid from "../pages/HomeKids/ScheduleKid";

import Home from "../pages/Home/Home";
import TeacherLayout from "../pages/Teacher/TeacherLayout";
import TeacherCourses from "../pages/Teacher/TeacherCourses/TeacherCourses";
import TeacherClass from "../pages/Teacher/TeacherClass/TeacherClass";
import TeacherSchedule from "../pages/Teacher/TeacherSchedule/TeacherSchedule";
import TeacherContent from "../pages/Teacher/TeacherContent/TeacherContent";
import TeacherFeedBack from "../pages/Teacher/TeacherFeedBack/TeacherFeedBack";
import TeacherIncome from "../pages/Teacher/TeacherIncome/TeacherIncome";
import PaymentSuccess from "../pages/PaymentSuccess/PaymentSuccess";
import ViewContent from "../pages/Teacher/TeacherContent/ViewContent";
import ParentLayout from "../pages/Parent/ParentLayout";
import ParentProfile from "../pages/Parent/ParentProfile/ParentProfile";
import ParentSchedule from "../pages/Parent/ParentSchedule/ParentSchedule";
import ParentCourse from "../pages/Parent/ParentCourse/ParentCourse";
import ParentHistory from "../pages/Parent/ParentHistory/ParentHistory";
import ParentPurchased from "../pages/Parent/ParentPurchased/ParentPurchased";
import ParentFeedback from "../pages/Parent/ParentFeedback/ParentFeedback";
import TeacherProfile from "../pages/Teacher/TeacherProfile/TeacherProfile";
import Login from "../pages/Login/Login";

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
          { path: "", element: <Navigate to="profile" /> },
          { path: "profile", element: <TeacherProfile /> },

          { path: "classes", element: <TeacherClass /> },
          { path: "schedule", element: <TeacherSchedule /> },
          {
            path: "content",
            element: <TeacherContent />,
            children: [{ path: "viewContent", element: <ViewContent /> }],
          },
          { path: "feedback", element: <TeacherFeedBack /> },
          { path: "income", element: <TeacherIncome /> },

          { path: "courses", element: <TeacherCourses /> },
        ],
      },

      {
        path: "parent",
        element: <ParentLayout />,
        children: [
          { path: "", element: <Navigate to="profile" /> },
          { path: "profile", element: <ParentProfile /> },
          { path: "schedule", element: <ParentSchedule /> },
          { path: "course", element: <ParentCourse /> },
          { path: "purchased", element: <ParentPurchased /> },
          { path: "history", element: <ParentHistory /> },
          { path: "feedback", element: <ParentFeedback /> },
        ],
      },
      { path: "payment", element: <PaymentSuccess /> },

      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

export default router;
