import { createBrowserRouter } from "react-router-dom";
import StudentDashboard from "../pagesForStudents/StudentDashboard";
import Layout from "../components/layout/Layout";
import Assignment from "../pagesForStudents/Assignment";
import MySubjects from "../pagesForStudents/MySubjects";
import Profile from "../pagesForStudents/Profile";
import Article from "../pagesForStudents/Article";
import TimeTable from "../pagesForStudents/TimeTable";
import SavedArticle from "../pagesForStudents/SavedArticle";

export const studentRouter = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <StudentDashboard /> },
			{
				path: "/time-table",
				element: <TimeTable />,
			},
			{
				path: "/your-profile",
				element: <Profile />,
			},
			{
				path: "/articles",
				element: <Article />,
			},
			{
				path: "/saved-articles",
				element: <SavedArticle />,
			},
			{
				path: "/your-subjects",
				element: <MySubjects />,
			},
			{
				path: "/assignment",
				element: <Assignment />,
			},
		],
	},
]);
