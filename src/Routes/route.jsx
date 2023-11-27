import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../LayOut/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../LayOut/Dashboard/DashboardRoute/AdminRoute/ManageUsers/ManageUsers";
import UserProfile from "../LayOut/Dashboard/DashboardRoute/UserRoute/UserProfile/UserProfile";
import AgentProfile from "../LayOut/Dashboard/DashboardRoute/AgentRoute/AgentProfile/AgentProfile";
import AdminProfile from "../LayOut/Dashboard/DashboardRoute/AdminRoute/AdminProfile/AdminProfile";
import Adminroute from "./AdminRoute";
import AgentPrivedRoute from "./AgentPrivedRoute";
import AllProperties from "../Pages/AllProperties/AllProperties";
import Propertydetails from "../Pages/AllProperties/Propertydetails";



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
     {
          path: "/allProperties",
          element:<PrivateRoute><AllProperties></AllProperties></PrivateRoute>
     },
     {
          path: "/allProperties/:id",
          element:<PrivateRoute><Propertydetails></Propertydetails></PrivateRoute>,
          // loader:({params})=> fetch(`http://localhost:5000/allProperties/${params.id}`)
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
               element:<PrivateRoute><Adminroute><ManageUsers></ManageUsers></Adminroute></PrivateRoute>
          },
          {
               path:"adminProfile",
               element:<PrivateRoute><Adminroute><AdminProfile></AdminProfile></Adminroute></PrivateRoute>
          },
          //Agent routes
          {
               path:"agentProfile",
               element:<PrivateRoute><AgentPrivedRoute><AgentProfile></AgentProfile></AgentPrivedRoute></PrivateRoute>
          },
          //User routes
          {
               path:"userProfile",
               element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>
          }
     ]
  }
 
]);
