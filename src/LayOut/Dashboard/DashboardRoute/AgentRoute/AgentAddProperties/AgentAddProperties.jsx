import { Link } from "react-router-dom";
import DashboardHeader from "../../../DashboardHeader";
import useAllPropertiesData from "../../../../../Hooks/useAllPropertiesData";
import useAuth from "../../../../../Hooks/useAuth";
import AddPropertycard from "./AddPropertycard";



const AgentAddProperties = () => {
  const [allProperties] = useAllPropertiesData()
  const {user} = useAuth()
  const myProperties = allProperties?.filter(item=>item.agentEmail === user.email)
  console.log(myProperties);
     return (
          <div>
               <DashboardHeader heading={'My Added Properties'}></DashboardHeader>
               <div className="flex justify-end m-5">
                    <Link to={'/dashboard/myAddedProperties/addProperty'}><button className="bg-[#ffb900] font-semibold rounded p-1 px-4 ">Add Property</button></Link>
               </div>
               <div className=" grid grid-cols-2 gap-5 m-10">
                {
                  myProperties?.map(property=><AddPropertycard key={property._id} property={property}></AddPropertycard>)
                }
               </div>
          </div>
     );
};

export default AgentAddProperties;