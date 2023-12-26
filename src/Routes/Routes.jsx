import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CreateTask from "../Pages/Dashboard/Dashboard/CreateTask";
import ManageTasks from "../Pages/Dashboard/ManageTasks";
import UpdateTask from "../Pages/Dashboard/UpdateTask";
import About from "../Pages/Home/About/About";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'about',
                element: <About></About>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'home',
                element: <ManageTasks></ManageTasks>
            },
            {
                path: 'createTask',
                element: <CreateTask></CreateTask>
            },
            {
                path: 'update/:id',
                element: <UpdateTask></UpdateTask>,
                loader: ({ params }) => fetch(`http://localhost:5000/tasks/${params.id}`)
            }
        ],
    }
]);