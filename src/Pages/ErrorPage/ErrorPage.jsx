import { Link } from "react-router-dom";
import "./ErrorPage.css"

const ErrorPage = () => {
     return (
          <div  className="bg-[#ffb900] h-[100vh] " >
    <div className=" mx-auto flex flex-col text-center ">
    <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404" className="w-[400px] mx-auto "/>
        <span className=" text-7xl font-semibold "> PAGE 404</span>
        <p className=" py-5">
           The page you were looking for could not be found</p>
        <div >
          <Link to={'/'} ><button className="btn bg-black hover:text-black text-white none">Back to Home</button></Link>
        </div>
    </div>
</div>
     );
};

export default ErrorPage;