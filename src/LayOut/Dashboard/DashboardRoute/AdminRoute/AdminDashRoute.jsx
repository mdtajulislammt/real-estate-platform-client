import { FaStar, FaUser } from "react-icons/fa";
import {  FaUsers, FaVectorSquare } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const AdminDashRoute = () => {
     return (
          <>
               <NavLink
              to={'/dashboard/adminProfile'}
                className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-lg font-semibold flex items-center p-3 rounded gap-2 text-white  bg-[#000000]  mb-3  underline"
                  : "text-lg font-semibold flex items-center  p-3 gap-2 text-black mb-3"}
              >
                <FaUser/>
                <span className="hidden md:block"> Admin Profile</span>
              </NavLink>
               <NavLink
              to={'/dashboard/manageProperties'}
                className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-lg font-semibold flex items-center p-3 rounded gap-2 text-white  bg-[#000000]  mb-3  underline"
                  : "text-lg font-semibold flex items-center  p-3 gap-2 text-black mb-3"}
              >
                <FaVectorSquare/>
                <span className="hidden md:block"> Manage Properties</span>
              </NavLink>
               <NavLink
              to={'/dashboard/manageUsers'}
                className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-lg font-semibold flex items-center p-3 rounded gap-2 text-white  bg-[#000000]  mb-3  underline"
                  : "text-lg font-semibold flex items-center  p-3 gap-2 text-black mb-3"}
              >
                <FaUsers/>
                <span className="hidden md:block"> Manage Users</span>
              </NavLink>
               <NavLink
              to={'/dashboard/manageReviews'}
                className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-lg font-semibold flex items-center p-3 rounded gap-2 text-white  bg-[#000000]  mb-3  underline"
                  : "text-lg font-semibold flex items-center  p-3 gap-2 text-black mb-3"}
              >
                <FaStar />
                <span className="hidden md:block"> Manage reviews</span>
              </NavLink>
          </>
     );
};

export default AdminDashRoute;