
import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import Container from "../../Components/Container";

const Navbar = () => {
     const [isSideMenuOpen, setMenu] = useState(false);
     const navLinks = (<>
     <li><NavLink to='/'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#3994e4] dark:text-[#3994e4] dark:hover:text-white  hover:bg-[#00000000] text-lg font-thin  underline" : "text-lg font-thin dark:text-white"
              }>Home</NavLink></li>
     <li><NavLink to='/allProperties'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#3994e4] dark:text-[#3994e4] dark:hover:text-white  hover:bg-[#00000000] text-lg font-thin  underline" : "text-lg font-thin dark:text-white"
              }>All properties</NavLink></li>
     <li><NavLink to='/contact'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#3994e4] dark:text-[#3994e4] dark:hover:text-white  hover:bg-[#00000000] text-lg font-thin  underline" : "text-lg font-thin dark:text-white"
              }>Contact Us</NavLink></li>
     <li><NavLink to='/features'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#3994e4] dark:text-[#3994e4] dark:hover:text-white  hover:bg-[#00000000] text-lg font-thin  underline" : "text-lg font-thin dark:text-white"
              }>Features</NavLink></li>
     </>
          
     )
          
     
     return (
          <Container>
           <main>
      <nav className="flex justify-between px-8 items-center py-6   ">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            
            {/* logo */}
            <Link href={"/"} className="text-4xl font-mono">
              logo
            </Link>
          </section>
          
        </div>

        {/* sidebar mobile menu */}
        <div
          className={clsx(
            " fixed h-full w-screen lg:hidden bg-black/10  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute right-1 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />

            <ul>
               {navLinks}
            </ul>
          </section>
        </div>

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
      <hr className=" " />
    </main>    
          </Container>
          
     );
};

export default Navbar;