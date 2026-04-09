import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/home-page";
import { CourseDetailPage } from "./pages/course-detail-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/course/:courseId",
    Component: CourseDetailPage,
  },
]);
