import { FaEdit, FaUser } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useUserData from "../../Hooks/useUserData";

const DashboardProfile = () => {
     const { user } = useAuth();
     const [users] = useUserData();
     const role = users.find((item) => item.email === user.email);
     return (

          <div className="md:p-20">
            <div className=" border-2 rounded-xl shadow-xl p-4 md:h-[400px]">
              <img
                src={user.photoURL}
                alt="profile"
                className=" mx-auto rounded-full w-32"
              />
              <h2 className=" text-2xl font-semibold text-center ">
                {user.displayName}
              </h2>
              <h2 className=" text-lg font-semibold text-center">{user.email}</h2>
              <div className="divider"></div>
              <div className=" flex justify-between">
              <p className=" text-lg font-semibold bg-[#ffb900] px-2 rounded p-1 flex items-center gap-2"><FaUser/> Role : {role?.role ? role?.role : "User"}</p>
              <button className=" flex items-center bg-[#ffb900] px-4 p-1 rounded"><FaEdit/> Edit</button>
              </div>
              
            </div>

          </div>
     );
};

export default DashboardProfile;