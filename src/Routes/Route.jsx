import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../Pages/About/About";
import ContactUs from "../Pages/ContactUS/ContactUs";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignUp/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://job-portal-server-delta.vercel.app/fresher'),
                loader: () => fetch('https://job-portal-server-delta.vercel.app/experience')
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact-us',
                element: <ContactUs />
            },
            {
                path: '/sign-up',
                element: <SignUp />
            },
            {
                path: '/sign-in',
                element: <SignIn />
            }
        ]
    }
])