import { Outlet} from "react-router-dom";
import Navbar from "../Sheard/Navbar/Navbar";
import Footer from "../Sheard/Footer/Footer";
const Main = () => {
     return (
          <div className=" font-kanit">
               <Navbar></Navbar>
               <Outlet></Outlet>
               <Footer></Footer>
          </div>
     );
};

export default Main;