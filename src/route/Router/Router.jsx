import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import ContactUs from "../../pages/ContactUs/ContactUs";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";

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
                element:<ContactUs></ContactUs>
            }
        ]
    }
])


export default router