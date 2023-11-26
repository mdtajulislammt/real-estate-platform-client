import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../LayOut/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../LayOut/Dashboard/DashboardRoute/AdminRoute/ManageUsers/ManageUsers";

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
  {
     path:'/dashboard',
     element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
     errorElement:<ErrorPage></ErrorPage>,
     children:[
          //admin routes
          {
               path:'manageUsers',
               element:<PrivateRoute><ManageUsers></ManageUsers></PrivateRoute>
          },
          //Agent routes
          {

          },
          //User routes
          {

          }
     ]
  }
]);
