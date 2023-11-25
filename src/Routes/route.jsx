import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
     {
          path: "/",
          element:<Home></Home>
     },
     {
          path: "/login",
          element:<LogIn></LogIn>
     },
     {
          path: "/register",
          element:<Register></Register>
     },
    ]
  },
]);
