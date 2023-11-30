import Swal from "sweetalert2";
import useUserWishOffer from "../../../../../Hooks/useUserWishOffer";
import DashboardHeader from "../../../DashboardHeader";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../../Hooks/useAuth";


const AgentRequestProperty = () => {
     const [userWishOffer,refetch] = useUserWishOffer()
     const axiosSecure = useAxiosSecure()
     
     const {user} = useAuth();
     const wishOffer = userWishOffer?.filter(item=>item.agentEmail === user.email );
     console.log(wishOffer);

      //make Accepted
  const handleMakeAccept =property=>{
    console.log(property);
     axiosSecure.patch(`/userWishOffer/accepted/${property._id}`)
     .then(res=>{ 
      console.log(res);
        if(res.data.modifiedCount > 0){
         refetch();
         Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${property.title} Request is Accepted `,
              showConfirmButton: false,
              timer: 1500
            });
        }
     })
 }

      //make rejected
  const handleRejected =property=>{
    console.log(property);
     axiosSecure.patch(`/userWishOffer/rejected/${property._id}`)
     .then(res=>{ 
      console.log(res);
        if(res.data.modifiedCount > 0){
         refetch();
         Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${property.title} Request is Rejected `,
              showConfirmButton: false,
              timer: 1500
            });
        }
     })
 }
     return (
          <div className="">
               <DashboardHeader heading={'Requested Properties'}></DashboardHeader>
              <div>
              <div className="divider"></div>
              <div className="overflow-x-auto mx-5  ">
  <table className="table table-xs my-2 ">
    <thead>
      <tr>
        <th>No.</th> 
        <th>Property title</th> 
        <th>Property Location</th> 
        <th>Buyer Email</th> 
        <th>Buyer Name</th> 
        <th>Offered Price</th>  
        <th>Accept Req.</th>
        <th>Reject Req.</th>
      </tr>
    </thead> 
    <tbody >
      {
          wishOffer?.map((property, index)=><tr key={property._id} className=" bg-gray-200 " >
          <th className="py-4">{index+1}</th> 
          <td>{property.title}</td> 
          <td>{property.location}</td> 
          <td>{property.buyerEmail}</td> 
          <td>{property.buyerName}</td> 
          <td>$ {property.offerAmount}</td> 

          <td>{ property.status === "accepted" ? <button  className=" bg-[#ffb900] p-1 text-xs font-medium  hover:text-black px-3 rounded">Accepted</button>: <button onClick={()=> handleMakeAccept(property)} className=" bg-green-500 p-1 text-xs font-medium text-white hover:text-black px-3 rounded">Pending</button>}</td>
          
          
          <td>{property.status === "rejected" ? <button
           className=" bg-red-500 p-1 text-xs font-medium text-white hover:text-black px-2 rounded">Rejected</button>:<button
           onClick={()=> handleRejected(property)}
           className=" bg-red-500 p-1 text-xs font-medium text-white hover:text-black px-2 rounded">Reject</button>}</td>  

        </tr>)
      }
      
    </tbody> 
    
  </table>
</div>
              </div>
          </div>
     );
};

export default AgentRequestProperty;