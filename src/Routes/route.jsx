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
import UserWishlist from "../LayOut/Dashboard/DashboardRoute/UserRoute/UserWishlist/UserWishlist";
import UserWishOffer from "../LayOut/Dashboard/DashboardRoute/UserRoute/UserWishlist/UserWishOffer";
import UserMyReview from "../LayOut/Dashboard/DashboardRoute/UserRoute/UserMyReview/UserMyReview";
import UserBought from "../LayOut/Dashboard/DashboardRoute/UserRoute/UserBought/UserBought";
import Payment from "../LayOut/Dashboard/DashboardRoute/UserRoute/Payment/Payment";
import AgentAddProperties from "../LayOut/Dashboard/DashboardRoute/AgentRoute/AgentAddProperties/AgentAddProperties";
import AddProperty from "../LayOut/Dashboard/DashboardRoute/AgentRoute/AgentAddProperties/AddProperty";
import AddPropertyupdate from "../LayOut/Dashboard/DashboardRoute/AgentRoute/AgentAddProperties/AddPropertyupdate";
import AgentSoldProperty from "../LayOut/Dashboard/DashboardRoute/AgentRoute/AgentSoldProperty/AgentSoldProperty";
import AgentRequestProperty from "../LayOut/Dashboard/DashboardRoute/AgentRoute/AgentRequestProperty/AgentRequestProperty";
import AdminManageReview from "../LayOut/Dashboard/DashboardRoute/AdminRoute/AdminManageReview/AdminManageReview";
import AdminManageProperty from "../LayOut/Dashboard/DashboardRoute/AdminRoute/AdminManageProperty/AdminManageProperty";



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
               path:"adminProfile",
               element:<PrivateRoute><Adminroute><AdminProfile></AdminProfile></Adminroute></PrivateRoute>
          },
          {
               path:'manageUsers',
               element:<PrivateRoute><Adminroute><ManageUsers></ManageUsers></Adminroute></PrivateRoute>
          },
          {
               path:"manageReviews",
               element:<PrivateRoute><Adminroute><AdminManageReview></AdminManageReview></Adminroute></PrivateRoute>
          },
          {
               path:"manageProperties",
               element:<PrivateRoute><Adminroute><AdminManageProperty></AdminManageProperty></Adminroute></PrivateRoute>
          },
          //Agent routes
          {
               path:"agentProfile",
               element:<PrivateRoute><AgentPrivedRoute><AgentProfile></AgentProfile></AgentPrivedRoute></PrivateRoute>
          },
          {
               path:"myAddedProperties",
               element:<PrivateRoute><AgentPrivedRoute><AgentAddProperties></AgentAddProperties></AgentPrivedRoute></PrivateRoute>
          },
          {
               path:"myAddedProperties/addProperty",
               element:<PrivateRoute><AgentPrivedRoute><AddProperty></AddProperty></AgentPrivedRoute></PrivateRoute>
          },
          {
               path:"myAddedProperties/:id",
               element:<PrivateRoute><AgentPrivedRoute><AddPropertyupdate></AddPropertyupdate></AgentPrivedRoute></PrivateRoute>
          },
          {
               path:"agentSoldProperty",
               element:<PrivateRoute><AgentPrivedRoute><AgentSoldProperty></AgentSoldProperty></AgentPrivedRoute></PrivateRoute>
          },
          {
               path:"agentRequestProperty",
               element:<PrivateRoute><AgentPrivedRoute><AgentRequestProperty></AgentRequestProperty></AgentPrivedRoute></PrivateRoute>
          },
          //User routes
          {
               path:"userProfile",
               element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>
          },
          {
               path:"wishlist",
               element:<PrivateRoute><UserWishlist></UserWishlist></PrivateRoute>
          },
          {
               path:"wishlist/:id",
               element:<PrivateRoute><UserWishOffer></UserWishOffer></PrivateRoute>
          },
          {
               path:"userMyReviews",
               element:<PrivateRoute><UserMyReview></UserMyReview></PrivateRoute>
          },
          {
               path:"userBought",
               element:<PrivateRoute><UserBought></UserBought></PrivateRoute>
          },
          {
               path:"userBought/payment/:id",
               element:<PrivateRoute><Payment></Payment></PrivateRoute>
          }
     ]
  }
 
]);
