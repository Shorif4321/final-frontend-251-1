import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import ContactUs from "../../pages/ContactUs/ContactUs";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../../pages/Dashboard/Dashboard";
import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";
import AllUsers from "../../pages/Dashboard/AllUsers/AllUsers";
import AddServices from "../../pages/Dashboard/AddServices/AddServices";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/sign-in',
                element:<SignIn/>
            },
            {
                path:'/sign-up',
                element:<SignUp/>
            },
            {
                path:'/contact',
                element:<PrivateRoute><ContactUs></ContactUs></PrivateRoute>
            },
        ],

    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/dashboard/all-users',
                element:<PrivateRoute><AllUsers/></PrivateRoute>
            },
            {
                path:'/dashboard/add-service',
                element:<PrivateRoute><AddServices/></PrivateRoute>
            },
        ]
    }
])


export default router