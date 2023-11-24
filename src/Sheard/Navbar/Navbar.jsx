
import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import logo from "../../assets/logo.png"

const Navbar = () => {
     const [isSideMenuOpen, setMenu] = useState(false);
     const navLinks = <>
     <li><NavLink to='/'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#3994e4] dark:text-[#3994e4] dark:hover:text-white  hover:bg-[#00000000] text-lg font-thin  underline" : "text-lg font-thin  dark:text-white"
              }>Home</NavLink></li>
     <li><NavLink to='/alljobs'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#3994e4] dark:text-[#3994e4] dark:hover:text-white  hover:bg-[#00000000] text-lg font-thin  underline" : "text-lg font-thin dark:text-white"
              }>All Jobs</NavLink></li>

    {/* {
      user?.email && <>
       <li><NavLink to='/appliedjobs'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#3994e4] dark:text-[#3994e4] dark:hover:text-white  hover:bg-[#00000000] text-lg font-thin  underline" : "text-lg font-thin dark:text-white"
              }>Applied Jobs</NavLink></li>
     <li><NavLink to='/addajobs'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#3994e4] dark:text-[#3994e4] dark:hover:text-white  hover:bg-[#00000000] text-lg font-thin  underline" : "text-lg font-thin dark:text-white"
              }>Add a Jobs</NavLink></li>
     <li><NavLink to='/myjobs'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#3994e4] dark:text-[#3994e4] dark:hover:text-white  hover:bg-[#00000000] text-lg font-thin  underline" : "text-lg font-thin dark:text-white"
              }>My Jobs</NavLink></li>
      </>
    } */}

     {/* <li><NavLink to='/blogs'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#3994e4] dark:text-[#3994e4] dark:hover:text-white  hover:bg-[#00000000] text-lg font-thin  underline" : "text-lg font-thin dark:text-white"
              }>Blogs</NavLink></li>
     <li><NavLink to='/about'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#3994e4] dark:text-[#3994e4] dark:hover:text-white  hover:bg-[#00000000] text-lg font-thin  underline" : "text-lg font-thin dark:text-white"
              }>About</NavLink></li>
     <li><NavLink to='/contact'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#3994e4] dark:text-[#3994e4] dark:hover:text-white  hover:bg-[#00000000] text-lg font-thin  underline" : "text-lg font-thin dark:text-white"
              }>Contact</NavLink></li> */}
    
     
     </>
          
     
     return (
      <nav className="flex  justify-between px-20 items-center py-2 ">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            
            {/* logo */}
            <Link to={'/'} className="text-4xl font-mono">
              <img src={logo} alt="" className="w-52" />
            </Link>
          </section>
          
        </div>

        {/* sidebar mobile menu */}
        

        {/* last section */}
        <section className="flex items-center gap-4">
          {/* NavLink */}
        
          <ul className=" flex gap-5">
          {navLinks}
          </ul>
          {/* cart icon */}
          <AiOutlineShoppingCart className="text-3xl" />
          {/* menu */}
          <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
          {/* <Image
            width={40}
            height={40}
            className="h-8 w-8 rounded-full "
            src="https://i.pravatar.cc/150?img=52"
            alt="avatar-img"
          /> */}
          {/* avtar img */}
        </section>
      </nav>
          
     );
};

export default Navbar;