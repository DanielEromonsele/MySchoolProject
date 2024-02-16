import { createBrowserRouter } from "react-router-dom";
import TeacherDashboard from "../pagesForTeachers/TeacherDashboard";
import LoadingScreen from "../components/static/LoadingScreen";
import Layout from "../pagesForTeachers/layout/Layout";
import Schedule from "../pagesForTeachers/Schedule";
import Class from "../pagesForTeachers/Class";
import Subject from "../pagesForTeachers/Subject";
import Profile from "../pagesForTeachers/Profile";
import LessonNote from "../pagesForTeachers/LessonNote";

export const teacherRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <TeacherDashboard />,
      },
      {
        path: "view-schedule",
        element: <Schedule />,
      },
      {
        path: "view-class",
        element: <Class />,
      },
      {
        path: "view-subject",
        element: <Subject />,
      },
      {
        path: "lesson-note",
        element: <LessonNote />,
      },
      {
        path: "store",
        element: <Schedule />,
      },
      {
        path: "settings",
        element: <Profile />,
      },
    ],
  },
  {
    path: "*",
    element: <LoadingScreen />,
  },
]);
