import Swal from "sweetalert2";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import DashboardHeader from "../../../DashboardHeader";
import useAllPropertiesData from "../../../../../Hooks/useAllPropertiesData";

const AdminManageProperty = () => {
     const axiosSecure = useAxiosSecure()
     const [allProperties,refetch] = useAllPropertiesData()
     


      //make Accepted
  const handleMakeVerify =property=>{
    console.log(property);
     axiosSecure.patch(`/allProperties/verify/${property._id}`)
     .then(res=>{ 
      console.log(res);
        if(res.data.modifiedCount > 0){
         refetch();
         Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${property.title} is Verify `,
              showConfirmButton: false,
              timer: 1500
            });
        }
     })
 }
      //make Accepted
  const handleMakeRejected =property=>{
    console.log(property);
     axiosSecure.patch(`/allProperties/reject/${property._id}`)
     .then(res=>{ 
      console.log(res);
        if(res.data.modifiedCount > 0){
         refetch();
         Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${property.title} is Verify `,
              showConfirmButton: false,
              timer: 1500
            });
        }
     })
 }
     return (
          <div>
               <DashboardHeader heading={'Manage Property'}></DashboardHeader>
               <div>
               <div>
              <div className="divider"></div>
              <div className="overflow-x-auto mx-5  ">
  <table className="table table-xs my-2 ">
    <thead>
      <tr>
        <th>No.</th> 
        <th>Property title</th> 
        <th>Property Location</th> 
        <th> Agent name</th> 
        <th> Agent Email</th> 
        <th>price range</th>  
        <th>Verify </th>
        <th>Not Verify </th>
      </tr>
    </thead> 
    <tbody >
      {
          allProperties?.map((property, index)=><tr key={property._id} className=" bg-gray-200 " >
          <th className="py-4">{index+1}</th> 
          <td>{property.title}</td> 
          <td>{property.location}</td> 
          <td>{property.agentName}</td> 
          <td>{property.agentEmail}</td> 
          <td>$ {property.minPrice} - $ {property.maxPrice}</td> 

          <td>{ property.verificationStatus === "Verified" ? <button  className=" bg-[#ffb900] p-1 text-xs font-medium  hover:text-black px-3 rounded">Verified</button>: <button onClick={()=> handleMakeVerify(property)} className=" bg-green-500 p-1 text-xs font-medium text-white hover:text-black px-3 rounded">Pending</button>}</td>
          
          
          <td>{property.verificationStatus === "Not Verified" ? <button
          
           className=" bg-red-500 p-1 text-xs font-medium text-white hover:text-black px-2 rounded">Rejected</button>:<button
           onClick={()=> handleMakeRejected(property)}
           className=" bg-red-500 p-1 text-xs font-medium text-white hover:text-black px-2 rounded">Reject</button>}</td>  

        </tr>)
      }
      
    </tbody> 
    
  </table>
</div>
              </div>
               </div>
          </div>
     );
};

export default AdminManageProperty;