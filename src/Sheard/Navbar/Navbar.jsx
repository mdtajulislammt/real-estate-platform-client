import { CiUser } from 'react-icons/ci';
import { AiOutlineSetting ,AiOutlineLogout} from 'react-icons/ai';
import { MdOutlineDashboardCustomize,MdNotificationsActive } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const {user,logOut} = useAuth();
  const handleLogOut =()=>{
        logOut();  
  }
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " dark:hover:text-white  bg-[#ffb900] px-3  py-1 rounded text-lg font-semibold   underline"
              : "text-lg font-semibold  dark:text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " dark:hover:text-white  bg-[#ffb900] px-3  py-1 rounded text-lg font-semibold   underline"
              : "text-lg font-semibold  dark:text-white"
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " dark:hover:text-white  bg-[#ffb900] px-3  py-1 rounded text-lg font-semibold   underline"
              : "text-lg font-semibold  dark:text-white"
          }
        >
          About
        </NavLink>
      </li>
      {

      user && <li>
        <NavLink
          to="/allProperties"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " dark:hover:text-white  bg-[#ffb900] px-3  py-1 rounded text-lg font-semibold   underline"
              : "text-lg font-semibold  dark:text-white"
          }
        >
          All Properties
        </NavLink>
      </li>
      }
      
    </>
  );

  

  return (
    <div className="navbar fixed z-10 bg-[#ffffff80] md:px-14 lg:px-20 px-5 dark:text-white dark:bg-[#242323]">
          <div className="navbar-start">
          <div className="dropdown ">
               <label tabIndex={0} className="btn btn-ghost lg:hidden ">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </label>
               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box dark:bg-[#242323] w-40">
               {navLinks}
               </ul>
          </div>
          <Link className=" flex items-center lg:w-52 ">
               <img src={logo} alt="" className=" w-32 md:w-44"/>
              
          </Link>
          </div>
          
          <div className="navbar-end ">
          <div className=" hidden lg:flex">
          <ul className="  menu-horizontal gap-8 px-8">
               {navLinks}
          </ul>
          </div>
    {
      user ?  <div className="dropdown">
      <label tabIndex={0} className=" cursor-pointer  ">
        {
          user.photoURL? <img src={user.photoURL} className="rounded-full border-2 border-[#3994e4] w-10 h-10 md:h-12 md:w-12" /> : <CiUser className=" cursor-pointer border-2  border-[#3994e4] text-black bg-slate-300 p-1 w-10 h-10 rounded-full"/>
        }
      
      </label>
      <ul tabIndex={0} className="menu menu-sm  dropdown-content right-0 h-96 mt-5 w-80 z-[1] p-3 shadow border-4 border-[#3994e4] dark:bg-black  bg-slate-100  rounded-lg">
     
     <div className=" flex gap-4">
      <div>
      {
          user.photoURL? <img src={user.photoURL} className="rounded-full border-2 border-[#3994e4] w-6 h-6 md:w-8  md:h-8 " /> : <CiUser className=" cursor-pointer text-black bg-slate-300 p-1 w-10 h-10 mx-auto rounded-full"/>
        }
      </div>
      <div className=" flex justify-center">
       <div>
       <h2 className=" text-center dark:text-white text-lg font-semibold mt-2">{user.displayName}</h2>
       <h2 className=" text-center dark:text-white ">{user.email}</h2>
       </div>
        
      </div>
     </div>

      <div className=" border-t-2 my-2">
        <h2 className=" flex bg-[#3994e4] text-white hover:bg-[#3994e4] p-2 rounded-lg hover:text-black items-center gap-2 my-3 cursor-pointer "><CgProfile/> <span className="  hover:text-[#ffffff]">Profile</span></h2>
        <h2 className=" flex bg-[#3994e4] text-white hover:bg-[#3994e4] p-2 rounded-lg hover:text-black items-center gap-2 my-3 cursor-pointer "><MdOutlineDashboardCustomize/> <Link to={'/dashboard'} className="  hover:text-[#ffffff]">Dashboard</Link></h2>
        <h2 className=" flex bg-[#3994e4] text-white hover:bg-[#3994e4] p-2 rounded-lg hover:text-black items-center gap-2 my-3 cursor-pointer "><MdNotificationsActive/> <span className="  hover:text-[#ffffff]">Notifications</span></h2>
        <h2 className=" flex bg-[#3994e4] text-white hover:bg-[#3994e4] p-2 rounded-lg hover:text-black items-center gap-2 my-3 cursor-pointer "><AiOutlineSetting/> <span className="  hover:text-[#ffffff]">User Settings</span></h2>
        <div className=" w-full h-[1px] my-5 bg-[#3994e4]"></div>
       <button onClick={handleLogOut} className=" flex bg-[#3994e4] text-white hover:bg-[#3994e4] w-full p-2 rounded-lg hover:text-black items-center  gap-2 my-2 cursor-pointer text-b lack"><AiOutlineLogout/> <span className="  hover:text-[#ffffff]">LogOut</span></button>
      </div>
      
      </ul>
    </div>
      :<NavLink
      to="/login"
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? " dark:hover:text-white  bg-[#ffb900] px-3  py-1 rounded text-lg font-semibold   underline"
          : "text-lg font-semibold  dark:text-white"
      }
    >
      LogIn
    </NavLink>
    }
  </div>
          </div>
  );
};

export default Navbar;
