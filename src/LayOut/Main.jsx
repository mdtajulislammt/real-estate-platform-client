import { Outlet, useLocation} from "react-router-dom";
import Navbar from "../Sheard/Navbar/Navbar";
import Footer from "../Sheard/Footer/Footer";
const Main = () => {
     const location = useLocation()
     const noHeaderFooter = location.pathname.includes('login',) || location.pathname.includes('signup',)
     return (
          <div className=" font-kanit">
                <Navbar></Navbar>
               <Outlet></Outlet>
               {noHeaderFooter || <Footer></Footer>}
          </div>
     );
};

export default Main;