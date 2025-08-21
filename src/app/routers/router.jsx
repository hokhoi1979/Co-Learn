import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Register from "../pages/Register/Register";
import HomeKids from "../pages/HomeKids/HomeKids";
import CourseKid from "../pages/HomeKids/CourseKid";
import CourseDetail from "../pages/HomeKids/CourseDetail";
import ScheduleKid from "../pages/HomeKids/ScheduleKid";
import Login from "../pages/Login";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // Trang mặc định (Home)
      { index: true, element: <Home /> },

      // Nhóm router cho Kids
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

      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

export default router;
