import { FaStar, FaUser} from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { MdBookmarkAdded } from "react-icons/md";
import { NavLink } from "react-router-dom";


const AgentRoute = () => {
     return (
          <>
          <NavLink
         to={'/dashboard/agentProfile'}
           className={({ isActive, isPending }) =>
           isPending
             ? "pending"
             : isActive
             ? " text-lg font-semibold flex items-center p-3 rounded gap-2 text-white  bg-[#000000]  mb-3  underline"
             : "text-lg font-semibold flex items-center  p-3 gap-2 text-black mb-3"}
         >
           <FaUser/>
           <span className="hidden md:block"> Agent Profile</span>
         </NavLink>
          <NavLink
         to={'/dashboard/myAddedProperties'}
           className={({ isActive, isPending }) =>
           isPending
             ? "pending"
             : isActive
             ? " text-lg font-semibold flex items-center p-3 rounded gap-2 text-white  bg-[#000000]  mb-3  underline"
             : "text-lg font-semibold flex items-center  p-3 gap-2 text-black mb-3"}
         >
           <MdBookmarkAdded />
           <span className="hidden md:block"> My Added Properties</span>
         </NavLink>
         <NavLink
         to={'/dashboard/agentSoldProperty'}
           className={({ isActive, isPending }) =>
           isPending
             ? "pending"
             : isActive
             ? " text-lg font-semibold flex items-center p-3 rounded gap-2 text-white  bg-[#000000]  mb-3  underline"
             : "text-lg font-semibold flex items-center  p-3 gap-2 text-black mb-3"}
         >
           <FaStar />
           <span className="hidden md:block"> My Sold Properties</span>
         </NavLink>
          <NavLink
         to={'/dashboard/agentRequestProperty'}
           className={({ isActive, isPending }) =>
           isPending
             ? "pending"
             : isActive
             ? " text-lg font-semibold flex items-center p-3 rounded gap-2 text-white  bg-[#000000]  mb-3  underline"
             : "text-lg font-semibold flex items-center  p-3 gap-2 text-black mb-3"}
         >
           <FaCodePullRequest />
           <span className="hidden md:block"> Requested Properties</span>
         </NavLink>
         
     </>
     );
};

export default AgentRoute;