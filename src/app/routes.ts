import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/home-page";
import { CourseDetailPage } from "./pages/course-detail-page";
import { LoginPage } from "./pages/login-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/course/:courseId",
    Component: CourseDetailPage,
  },
{
  path: "/login",
  Component: LoginPage,
},

]);
