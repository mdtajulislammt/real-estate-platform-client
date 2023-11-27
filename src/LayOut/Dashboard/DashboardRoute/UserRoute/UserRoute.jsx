import { FaStar, FaUser} from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { MdBookmarkAdded } from "react-icons/md";
import { NavLink } from "react-router-dom";


const UserRoute = () => {
     return (
          <>
          <NavLink
         to={'/dashboard/userProfile'}
           className={({ isActive, isPending }) =>
           isPending
             ? "pending"
             : isActive
             ? " text-lg font-semibold flex items-center p-3 rounded gap-2 text-white  bg-[#000000]  mb-3  underline"
             : "text-lg font-semibold flex items-center  p-3 gap-2 text-black mb-3"}
         >
           <FaUser/>
           <span className="hidden md:block"> My Profile</span>
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
           <MdBookmarkAdded />
           <span className="hidden md:block">  Wishlist</span>
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
           <FaCodePullRequest />
           <span className="hidden md:block"> Property Bought</span>
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
           <span className="hidden md:block"> My reviews</span>
         </NavLink>
     </>
     );
};

export default UserRoute;